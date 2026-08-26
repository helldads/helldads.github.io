"use client";

import type { BuildExplorerItem } from "@/data/builds";

import {
  AdjustmentsHorizontalIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { BUILD_TAG_GROUPS, getBuildTagLabel } from "@/lib/build-tags";

type SortDirection = "asc" | "desc";

type BuildFilters = {
  query: string;
  sortDirection: SortDirection;
};

declare global {
  interface Window {
    dataLayer?: Object[];
  }
}

const STORAGE_KEY = "helldads.builds.filters.v2";
const DEFAULT_FILTERS: BuildFilters = {
  query: "",
  sortDirection: "asc",
};

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function parseUrlFilters(): BuildFilters | undefined {
  if (typeof window === "undefined") return undefined;

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");
  const sort = params.get("sort");

  if (query === null && sort === null) return undefined;

  return {
    query: query ?? DEFAULT_FILTERS.query,
    sortDirection: sort === "desc" ? "desc" : DEFAULT_FILTERS.sortDirection,
  };
}

function getStoredFilters(): BuildFilters {
  if (typeof window === "undefined" || !("localStorage" in window)) {
    return DEFAULT_FILTERS;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) return DEFAULT_FILTERS;

    const parsedValue = JSON.parse(storedValue) as Partial<BuildFilters>;

    return {
      query:
        typeof parsedValue.query === "string"
          ? parsedValue.query
          : DEFAULT_FILTERS.query,
      sortDirection:
        parsedValue.sortDirection === "desc"
          ? "desc"
          : DEFAULT_FILTERS.sortDirection,
    };
  } catch {
    return DEFAULT_FILTERS;
  }
}

function isDefaultFilterState(filters: BuildFilters): boolean {
  return (
    filters.query.trim() === "" &&
    filters.sortDirection === DEFAULT_FILTERS.sortDirection
  );
}

function updateUrl(filters: BuildFilters) {
  const params = new URLSearchParams(window.location.search);

  if (filters.query.trim()) {
    params.set("q", filters.query.trim());
  } else {
    params.delete("q");
  }

  if (filters.sortDirection !== DEFAULT_FILTERS.sortDirection) {
    params.set("sort", filters.sortDirection);
  } else {
    params.delete("sort");
  }

  const search = params.toString();
  const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`;

  window.history.replaceState(null, "", nextUrl);
}

function sortByTitle(
  first: BuildExplorerItem,
  second: BuildExplorerItem,
  direction: SortDirection,
): number {
  const sortValue = first.title.localeCompare(second.title, undefined, {
    numeric: true,
    sensitivity: "base",
  });

  return direction === "asc" ? sortValue : -sortValue;
}

function addQueryToken(query: string, token: string): string {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  const normalizedToken = normalizeSearchText(token);
  const hasToken = terms.some(
    (term) => normalizeSearchText(term) === normalizedToken,
  );

  return hasToken ? query : [...terms, token].join(" ");
}

function trackBuildSearch(
  source: string,
  filters: BuildFilters,
  resultCount: number,
) {
  if (typeof window === "undefined") return;

  if (!window.dataLayer) {
    if (!Object.isExtensible(window)) return;

    window.dataLayer = [];
  }

  window.dataLayer.push({
    event: "build_search",
    build_search_query: filters.query.trim(),
    build_search_result_count: resultCount,
    build_search_sort: filters.sortDirection,
    build_search_source: source,
  });
}

export default function BuildsExplorer({
  builds,
}: {
  builds: BuildExplorerItem[];
}) {
  const [filters, setFilters] = useState<BuildFilters>(DEFAULT_FILTERS);
  const [isReady, setIsReady] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const analyticsTrackedKeyRef = useRef("");
  const analyticsSourceRef = useRef("load");

  useEffect(() => {
    setFilters(parseUrlFilters() ?? getStoredFilters());
    setIsReady(true);
  }, []);

  const hasNonDefaultSort =
    filters.sortDirection !== DEFAULT_FILTERS.sortDirection;
  const hasActiveFilters = filters.query.trim() !== "" || hasNonDefaultSort;
  const filteredBuilds = useMemo(() => {
    const searchTerms = normalizeSearchText(filters.query)
      .split(/\s+/)
      .filter(Boolean);

    return builds
      .filter((build) =>
        searchTerms.every((term) => build.searchText.includes(term)),
      )
      .sort((first, second) =>
        sortByTitle(first, second, filters.sortDirection),
      );
  }, [builds, filters.query, filters.sortDirection]);

  useEffect(() => {
    if (!isReady || typeof window === "undefined") return;

    updateUrl(filters);

    if ("localStorage" in window) {
      try {
        if (isDefaultFilterState(filters)) {
          window.localStorage.removeItem(STORAGE_KEY);
        } else {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
        }
      } catch {
        return;
      }
    }
  }, [filters, isReady]);

  useEffect(() => {
    if (!isReady) return;

    const eventKey = JSON.stringify({
      query: filters.query.trim(),
      resultCount: filteredBuilds.length,
      sortDirection: filters.sortDirection,
    });

    if (eventKey === analyticsTrackedKeyRef.current) return;

    const source = analyticsSourceRef.current;
    const timeoutId = window.setTimeout(() => {
      if (eventKey === analyticsTrackedKeyRef.current) return;

      trackBuildSearch(source, filters, filteredBuilds.length);
      analyticsTrackedKeyRef.current = eventKey;
      analyticsSourceRef.current = "input";
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [filteredBuilds.length, filters, isReady]);

  function updateFilter(nextFilters: Partial<BuildFilters>, source: string) {
    analyticsSourceRef.current = source;
    setFilters((currentFilters) => ({
      ...currentFilters,
      ...nextFilters,
    }));
  }

  function addTagToSearch(tag: string) {
    updateFilter(
      { query: addQueryToken(filters.query, getBuildTagLabel(tag)) },
      "tag",
    );
    setIsFilterOpen(false);
  }

  function resetFilters() {
    updateFilter(DEFAULT_FILTERS, "reset");
  }

  function toggleSortDirection() {
    updateFilter(
      {
        sortDirection: filters.sortDirection === "asc" ? "desc" : "asc",
      },
      "sort",
    );
  }

  const tagPicker = (
    <div className="grid max-h-[22rem] gap-4 overflow-y-auto pr-1">
      {BUILD_TAG_GROUPS.map((group) => (
        <div key={group.label} className="grid gap-2">
          <span className="text-xs font-semibold uppercase text-default-500">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <button
                key={tag}
                className="rounded-sm border border-default-200 px-3 py-1.5 text-sm transition-colors hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
                type="button"
                onClick={() => addTagToSearch(tag)}
              >
                {getBuildTagLabel(tag)}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (!isReady) {
    return (
      <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6">
        <div className="sticky top-20 z-30 h-[96px] rounded-lg bg-background/90 shadow-xl ring-1 ring-default-200 backdrop-blur" />
        <div className="min-h-[32rem]" />
      </div>
    );
  }

  return (
    <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6">
      <div className="sticky top-20 z-30 rounded-lg bg-background/95 p-3 shadow-xl ring-1 ring-default-200 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-2 gap-y-1">
          <Input
            aria-label="Filter builds"
            className="min-w-0"
            classNames={{
              inputWrapper: "rounded-sm",
            }}
            endContent={
              <span className="text-sm text-default-500 text-nowrap">
                {filteredBuilds.length} of {builds.length}
              </span>
            }
            placeholder="Search names, tags, assets..."
            startContent={
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-default-400"
              />
            }
            type="text"
            value={filters.query}
            onValueChange={(query) => updateFilter({ query }, "input")}
          />

          <div className="flex items-center gap-2">
            <Popover
              showArrow
              isOpen={isFilterOpen}
              placement="bottom-end"
              onOpenChange={setIsFilterOpen}
            >
              <PopoverTrigger>
                <Button
                  isIconOnly
                  aria-label="Open filters"
                  className="rounded-sm"
                  title="Open filters"
                  variant={filters.query.trim() ? "solid" : "bordered"}
                >
                  <AdjustmentsHorizontalIcon
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[min(23rem,calc(100vw-2rem))] rounded-lg p-4">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold">
                      Add Search Tag
                    </span>
                    <Button
                      size="sm"
                      variant="light"
                      onPress={() => updateFilter({ query: "" }, "clear-tags")}
                    >
                      Clear Search
                    </Button>
                  </div>
                  <div className="sm:hidden">
                    <Button
                      className="w-full rounded-sm"
                      size="sm"
                      variant="bordered"
                      onPress={toggleSortDirection}
                    >
                      {filters.sortDirection === "asc"
                        ? "Sort A-Z"
                        : "Sort Z-A"}
                    </Button>
                  </div>
                  {tagPicker}
                </div>
              </PopoverContent>
            </Popover>
            <Button
              isIconOnly
              aria-label={`Sort ${filters.sortDirection === "asc" ? "Z-A" : "A-Z"}`}
              className="hidden rounded-sm sm:inline-flex"
              title={`Sort ${filters.sortDirection === "asc" ? "Z-A" : "A-Z"}`}
              variant="bordered"
              onPress={toggleSortDirection}
            >
              {filters.sortDirection === "asc" ? (
                <BarsArrowDownIcon aria-hidden="true" className="h-5 w-5" />
              ) : (
                <BarsArrowUpIcon aria-hidden="true" className="h-5 w-5" />
              )}
            </Button>
            <Button
              isIconOnly
              aria-label="Reset filters"
              className="rounded-sm"
              isDisabled={!hasActiveFilters}
              title="Reset filters"
              variant="light"
              onPress={resetFilters}
            >
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {filteredBuilds.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBuilds.map(({ slug, title, slogan, image, tags }) => (
            <Card
              key={slug}
              className="
                h-full rounded-sm transition-colors duration-700 ease-in-out
                outline-1 outline-white dark:outline-black
                hover:outline-yellow-500 hover:dark:outline-yellow-500
                hover:bg-neutral-50 hover:dark:bg-stone-800
                focus-within:outline-yellow-500 focus-within:dark:outline-yellow-500
                focus-within:bg-neutral-50 focus-within:dark:bg-stone-800"
            >
              <Link
                className="flex flex-1 flex-col rounded-sm"
                href={`/builds/${slug}`}
              >
                {image && (
                  <div className="aspect-[4/3] w-full overflow-hidden bg-default-100">
                    <Image
                      removeWrapper
                      alt={title}
                      className="h-full w-full rounded-none object-cover"
                      src={image}
                      title={title}
                    />
                  </div>
                )}
                <CardBody className="flex flex-1 flex-col gap-2">
                  <h2 className="text-lg font-bold tracking-wide dark:text-yellow-500">
                    {title}
                  </h2>
                  {slogan && <p className="text-sm opacity-80">{slogan}</p>}
                </CardBody>
              </Link>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1 overflow-hidden px-3 pb-3">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      aria-label={`Add ${getBuildTagLabel(tag)} to search`}
                      className="min-w-0 max-w-[8rem] rounded-sm bg-default-100 px-2 py-1 text-xs transition-colors hover:bg-yellow-500 hover:text-black"
                      title={getBuildTagLabel(tag)}
                      type="button"
                      onClick={() => addTagToSearch(tag)}
                    >
                      <span className="block truncate whitespace-nowrap">
                        {getBuildTagLabel(tag)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex min-h-[24rem] flex-col items-center justify-center gap-3 py-10 text-center">
          <h2 className="text-2xl font-semibold">No builds found</h2>
          <p className="max-w-md text-default-500">
            Try a different name, asset, role, or damage type.
          </p>
          <Button
            className="rounded-sm"
            variant="bordered"
            onPress={resetFilters}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
