"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { CONTRIB, TIPS, ABBREVIATIONS, GAMING_TERMS } from "./essentials-data";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";

import HeroHeader from "@/components/heroHeader";
import backgroundImage from "../../public/assets/helldads-embrace-science.webp";

export default function EssentialsPageClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const getSectionVisibility = (sectionName: string) => {
    if (activeFilter === null) return "visible";

    return activeFilter === sectionName ? "visible" : "invisible absolute";
  };

  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-7xl py-10 md:py-14 px-6 space-y-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className={title()}>Essentials</h1>
            <p className="my-6 max-w-2xl">
              Welcome to the HellDads Essentials, a quick, fun guide for
              everyone to understand all the wild game mechanics and gaming
              lingo, which might not be that obvious to figure out! Whether
              you&apos;re fresh from the academy or just need a refresher,
              we&apos;ve got you covered with the combined knowledge of the
              HellDads. Proudly curated by the R&amp;D Science Team.
            </p>
          </div>
          <Card
            className="w-full max-w-md mb-6 md:mb-0 md:w-[420px]"
            radius="sm"
          >
            <CardHeader className="flex items-center gap-3">
              <Image className="mr-auto" src={CONTRIB.avatar} width={64} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{CONTRIB.name}</span>
                <span className="text-xs text-foreground/60">
                  {CONTRIB.note}
                </span>
              </div>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button
                as="a"
                color="primary"
                endContent={<DiscordIcon />}
                href={siteConfig.links.discord}
                size="sm"
                target="_blank"
              >
                Share a Tip
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="#tips">
            <Chip radius="sm" size="lg" variant="bordered">
              Tips &amp; Tricks
            </Chip>
          </Link>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="#terms">
            <Chip radius="sm" size="lg" variant="bordered">
              Gaming Terms
            </Chip>
          </Link>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="#abbreviations">
            <Chip radius="sm" size="lg" variant="bordered">
              Chat Abbreviations
            </Chip>
          </Link>
        </div>
      </section>

      <Divider />

      {/* Tips & Tricks */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14" id="tips">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tips &amp; Tricks
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mt-6 flex-wrap">
          <Button
            color="warning"
            radius="sm"
            size="md"
            variant={activeFilter === null ? "solid" : "bordered"}
            onPress={() => setActiveFilter(null)}
          >
            Show All
          </Button>
          {TIPS.map((c, n) => (
            <Button
              key={n}
              color={activeFilter === c.name ? c.color : "default"}
              radius="sm"
              size="md"
              variant={activeFilter === c.name ? "solid" : "bordered"}
              onPress={() => handleFilterClick(c.name)}
            >
              {c.name}
            </Button>
          ))}
        </div>

        {/* Sections Container */}
        <div className="relative">
          {TIPS.map((c, n) => (
            <div
              key={n}
              className={`mt-12 scroll-mt-24 transition-opacity duration-300 ${getSectionVisibility(c.name)}`}
              id={c.name}
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                {c.name}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((t, i) => (
                  <Card key={i} radius="sm">
                    <CardHeader className="flex items-center gap-3 font-light">
                      {t}
                    </CardHeader>
                    <CardFooter className="pt-0 text-sm text-foreground/80">
                      <Chip color={c.color} size="sm" variant="flat">
                        {c.name}
                      </Chip>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Gaming Terms */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14" id="terms">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight">
            Gaming Terms
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {GAMING_TERMS.map((term, i) => (
              <Card key={i} radius="sm">
                <CardHeader className="flex flex-col items-start gap-2">
                  <span className="font-bold text-yellow-500 tracking-wide">
                    {term.term}
                  </span>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-sm text-foreground/80">
                    {term.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Abbreviations */}
      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14" id="abbreviations">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight">
            Chat Abbreviations
          </h2>
          <p className="my-6">
            Abbreviations commonly used in chats every HellDad should know:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ABBREVIATIONS.map((abbr, i) => (
              <Card key={i} radius="sm">
                <CardHeader className="flex items-start">
                  <div className="flex flex-col">
                    <span className="font-bold text-yellow-500 tracking-wide">
                      {abbr.abbr}:{" "}
                    </span>
                    <span className="text-sm font-semibold tracking-wide">
                      {abbr.full}
                    </span>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-sm text-foreground/80">
                    {abbr.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
