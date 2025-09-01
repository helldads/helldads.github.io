"use client";
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { LOADOUTS } from "./loadouts-data";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";

export default function LoadoutsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filterName: string) => {
    setActiveFilter(activeFilter === filterName ? null : filterName);
  };

  const getSectionVisibility = (sectionName: string) => {
    if (activeFilter === null) return 'visible';
    return activeFilter === sectionName ? 'visible' : 'invisible absolute';
  };

  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl py-10 md:py-14">
        <h1 className={title()}>Loadout Builds</h1>
        <p className="my-6 max-w-2xl">
          In Helldivers 2, a loadout is your complete combat setup that determines how you'll approach missions and fight for Super Earth. Think of it as your soldier's complete kit. Every loadout is designed with a specific playstyle and mission type in mind.
        </p>
      </section>

      <Divider />

      {/* Tips & Tricks */}
      <section id="tips" className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Loadout builds
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {LOADOUTS.map((c, n) => (
            <Link
              key={n} 
              href={`#${n}`}
              radius="sm" 
              size="md"
              variant="bordered"
            >
              {c.title}
            </Link>
          ))}
        </div>

        {/* Sections Container */}
        <div className="relative">
          {LOADOUTS.map((c, n) => (
            <div 
              key={n} 
              id={n} 
              className="mt-12 scroll-mt-24"
            >
              <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold">
                {c.title}
              </h3>
              <p className="mb-4">
                {c.subTitle}
              </p>
              <h4 className="mb-2 flex items-center gap-2 text-md font-semibold">Playstyle</h4>
              <p className="mb-4">
                {c.description}
              </p>
              <h4 className="mb-2 flex items-center gap-2 text-md font-semibold">Weakness</h4>
              <p className="mb-4">
                {c.weakness}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card radius="sm">
                  <h5 className="mb-2 flex items-center gap-2 text-md font-semibold">
                    {c.loadoutCards.armour.armourName}
                  </h5>
                </Card>
                <Card radius="sm">
                  <h5 className="mb-2 flex items-center gap-2 text-md font-semibold">
                    {c.loadoutCards.primary.primaryName}
                  </h5>
                </Card>
                <Card radius="sm">
                  <h5 className="mb-2 flex items-center gap-2 text-md font-semibold">
                    {c.loadoutCards.secondary.secondaryName}
                  </h5>
                </Card>
                <Card radius="sm">
                  <h5 className="mb-2 flex items-center gap-2 text-md font-semibold">
                    {c.loadoutCards.throwable.throwableName}
                  </h5>
                </Card>
                
              </div>
                
              {/* <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.items.map((t, i) => (
                  <Card key={i} radius="sm">
                    <CardHeader className="flex items-center gap-3 font-light">
                      {t}
                    </CardHeader>
                    <CardFooter className="pt-0 text-sm text-foreground/80">
                      <Chip size="sm" variant="flat" color={c.color}>
                        {c.name}
                      </Chip>
                    </CardFooter>
                  </Card>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <Divider />
      
      {/* Gaming Terms */}
      {/* <section id="terms" className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold tracking-tight">
            Gaming Terms
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {GAMING_TERMS.map((term, i) => (
              <Card key={i} radius="sm">
                <CardHeader className="flex flex-col items-start gap-2">
                  <span className="font-bold text-yellow-500 tracking-wide">{term.term}</span>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-sm text-foreground/80">{term.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <Divider />

      {/* Abbreviations */}
      {/* <section id="abbreviations" className="mx-auto max-w-6xl py-10 md:py-14">
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
                    <span className="font-bold text-yellow-500 tracking-wide">{abbr.abbr}: </span>
                    <span className="text-sm font-semibold tracking-wide">{abbr.full}</span>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <p className="text-sm text-foreground/80">{abbr.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>       */}
    </div>
  );
}
