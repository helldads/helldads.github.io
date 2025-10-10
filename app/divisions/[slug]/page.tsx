import { Card, CardBody } from "@heroui/card"; // CardFooter, CardHeader
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/react";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { getAllSlugs, getDivisionBySlug } from "@/data/divisions";
import { getAsset } from "@/data/assets";
import {
  DiscordIcon,
  RedditIcon,
} from "@/components/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) {
    return {
      title: "Division Not Found",
      alternates: {
        canonical: `/divisions/${slug}`,
      },
    };
  }

  return {
    title: division.title,
    description:
      typeof division.description === "string"
        ? division.description
        : division.description?.[0] || division.slogan, // Use first paragraph or slogan as description
    alternates: {
      canonical: `/divisions/${slug}`,
    },
  };
}

// Prebuild static paths
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = getDivisionBySlug(slug);

  if (!division) return notFound();

  return (
    <div className="prose dark:prose-invert max-w-none">
      <header>
        <h1 className="text-4xl font-semibold">{division.title}</h1>
        {division.slogan && (
          <p className="opacity-80 text-2xl mt-2">{division.slogan}</p>
        )}
      </header>

      {division.links && (
        <section className="space-y-1">
          <Divider />
          <div className="flex gap-4 flex-wrap py-2">
            {division.links?.reddit && (
              <Link
                isExternal
                aria-label="Open Reddit"
                href={division.links.reddit}
              >
                <Chip
                  className="py-5 px-0.5 transition-discrete transition-colors hover:border-[#fc4301]"
                  radius="sm"
                  size="lg"
                  variant="bordered"
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <RedditIcon className="text-[#fc4301]" /> Discuss on Reddit
                  </span>
                </Chip>
              </Link>
            )}
            {division.links?.discord && (
              <Link
                isExternal
                aria-label="Open Discord"
                href={division.links.discord}
              >
                <Chip
                  className="py-5 px-0.5 transition-discrete transition-colors hover:border-indigo-500"
                  radius="sm"
                  size="lg"
                  variant="bordered"
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <DiscordIcon className="text-indigo-500" /> Discuss on
                    Discord
                  </span>
                </Chip>
              </Link>
            )}
          </div>
          <Divider />
        </section>
      )}

      {division.loadout && division.loadout.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {division.loadout?.map((entry, i) => {
            if (!entry.assetId) return null;
            const asset = getAsset(
              entry.assetId as Parameters<typeof getAsset>[0]
            );

            if (!asset)
              return (
                <Card key={i} radius="sm">
                  <CardBody className="flex bg-warning-200 flex-row gap-3">
                    {entry.note}
                  </CardBody>
                </Card>
              );

            return (
              <Card key={i} radius="sm">
                <CardBody className="flex flex-row gap-3">
                  <div className="flex basis-1/4 flex-shrink-0 justify-center max-w-[110px]">
                    {asset.image && (
                      <Image
                        alt={asset.description}
                        className="flex max-w-[110px] max-h-[120px]"
                        radius="sm"
                        src={asset.image}
                        title={asset.description}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {asset.wiki ? (
                      <Link
                        isExternal
                        showAnchorIcon
                        className="text-md font-bold text-yellow-500 tracking-wide"
                        href={asset.wiki || "#"}
                        title="Open Helldivers Wiki"
                      >
                        {asset.name}
                      </Link>
                    ) : (
                      <span>{asset.name}</span>
                    )}
                    {(entry.note || asset.description) && (
                      <p className="text-sm opacity-90">
                        {entry.note ?? asset.description}
                      </p>
                    )}
                    <div className="flex flex-wrap flex-row gap-2 mt-auto">
                      <Chip
                        className="max-w-fit px-2 opacity-60"
                        size="sm"
                        variant="bordered"
                      >
                        {asset.role}
                      </Chip>
                      {asset.warbond && (
                        <Chip
                          className="max-w-fit px-2 opacity-60"
                          size="sm"
                          variant="bordered"
                        >
                          {asset.warbond}
                        </Chip>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </section>
      )}

      {/* Wrapper: 1 col on mobile, 4 cols on lg */}
      <div className="my-8 grid grid-cols-1 gap-16 lg:grid-cols-3">
        {division.description && (
          <div>
            <h2 className="block mb-1 text-2xl font-semibold tracking-tight">
              Playstyle
            </h2>
            {Array.isArray(division.description) ? (
              division.description.map((paragraph, index) => (
                <p key={index} className="my-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{division.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
