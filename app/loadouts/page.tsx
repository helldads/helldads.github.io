"use client";
/* eslint-disable prettier/prettier */
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
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl py-10 md:py-14">
        <h1 className={title()}>Loadout Builds</h1>
        <p className="my-6 max-w-2xl">
          In Helldivers 2, a loadout is your complete combat setup that determines how you'll approach missions and fight for Super Earth. Think of it as your soldier's kit. Every loadout is designed with a specific playstyle and mission type in mind.
        </p>
      </section>

      <Divider />

      {/* Tips & Tricks */}
      <section id="tips" className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Helldads Loadouts
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mt-6 flex-wrap">
          {LOADOUTS.map((c, n) => (
            <Link
              key={n} 
              href={`#${c.title.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <Chip 
                radius="sm" 
                size="lg" 
                variant="bordered">
                  {c.title}
              </Chip>
            </Link>
          ))}
        </div>

        {/* Sections Container */}
        <div className="relative">
          {LOADOUTS.map((c, n) => (
            <div 
              key={n} 
              id={`${c.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="mt-12 scroll-mt-24"
            >
              <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
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
              <div className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(c.loadoutCards).map(([key, loadoutCard]) => (
                <Card key={key} radius="sm">
                <h5 className="mb-2 flex items-center gap-2 text-md font-semibold">
                  {loadoutCard.name}
                </h5>
                <p className="mb-4">
                  {loadoutCard.description}
                </p>
                </Card>
              ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(c.youtubeVideos).map(([key, youtubeVideo]) => (
                <Card key={key} radius="sm">
                <p className="mb-4">
                  {youtubeVideo.videoUrl}
                </p>
                </Card>
              ))}
              </div>
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
    </div>
  );
}
