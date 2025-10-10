import { Card, CardBody } from "@heroui/card"; // CardFooter, CardHeader
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/react";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import { getAllSlugs, getDivisionBySlug } from "@/data/divisions";

import {
  DiscordIcon,
  // RedditIcon,
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
      typeof division.slogan === "string"
        ? division.slogan
        : division.slogan?.[0] || division.subtitle, // Use first paragraph or slogan as description
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
    // <div className="space-y-10 max-w-7xl px-6 mx-auto mt-2">
    <div className="max-w-5xl mx-auto mt-12 px-6">
      <header>
        <h1 className="text-4xl font-semibold">{division.title}</h1>
        {division.slogan && (
          <p className="opacity-80 text-2xl mt-2">{division.slogan}</p>
        )}
      </header>

      {/* Wrapper: 1 col on mobile, 4 cols on lg */}
      {(division.tactics || division.formation || division.subtitle) && (
        <div className="my-8 grid grid-cols-1 gap-16 lg:grid-cols-3">
          {division.subtitle && (
            <div className="lg:col-span-3">
              <h2 className="block mb-1 text-2xl font-semibold tracking-tight">{division.subtitle}</h2>
            </div>
          )}
          {division.tactics && (
            <div>
              <h2 className="block mb-1 text-2xl font-semibold tracking-tight">
                Tactics:
              </h2>
              {Array.isArray(division.tactics) ? (
                division.tactics.map((paragraph, index) => (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{division.tactics}</p>
              )}
            </div>
          )}
          {division.formation && (
            <div>
              <h2 className="block mb-1 text-2xl font-semibold tracking-tight">
                Formation:
              </h2>
              {Array.isArray(division.formation) ? (
                division.formation.map((paragraph, index) => (
                  <p key={index} className="my-4">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p>{division.formation}</p>
              )}
            </div>
          )}
        </div>
      )}

      {division.links && (
        <section className="space-y-1">
          <Divider />
          <div className="flex gap-4 flex-wrap py-2">
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
    </div>
  );
}
