import { Card, CardBody } from "@heroui/card"; // CardFooter, CardHeader
import { Tooltip } from "@heroui/tooltip";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { notFound } from "next/navigation";

import { getAsset } from "@/data/assets";
import { getAllSlugs, getBuildBySlug } from "@/data/builds-index";
import { DiscordIcon, RedditIcon, YoutubeIcon, PhotoIcon } from "@/components/icons";
import { Divider } from "@heroui/react";

// Prebuild static paths
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);

  return match ? match[1] : null;
}

export default async function BuildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) return notFound();

  // Check if we have a highlights video to show
  const highlightsVideoId = build.links?.highlights
    ? getYouTubeVideoId(build.links.highlights)
    : null;

  return (
    <div className="py-6 space-y-6">

      {highlightsVideoId ? (
        <div className="relative aspect-video">
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            src={`https://www.youtube.com/embed/${highlightsVideoId}?modestbranding=1&showinfo=0&rel=0&controls=1&disablekb=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&color=white&theme=dark`}
            title={`${build.title} - Highlights`}
          />
        </div>
      ) : null}

      <header>
        <h1 className="text-4xl font-semibold">{build.title}</h1>
        {build.slogan && <p className="opacity-80 text-2xl mt-2">{build.slogan}</p>}
      </header>

      {build.links && (
        <section className="space-y-1">
          <Divider />
          {/* <h2 className="text-xl font-semibold">Links</h2> */}
          <div className="flex gap-4 flex-wrap py-2">
            {build.links.reddit && (
              <Link isExternal aria-label="Open Reddit" href={build.links.reddit}>
                <Chip radius="sm" size="lg" variant="bordered" className="py-5 px-0.5 transition-discrete transition-colors hover:border-[#fc4301]">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <RedditIcon className="text-[#fc4301]" /> Discuss on Reddit
                  </span>
                </Chip>
              </Link>
            )}
            {build.links.discord && (
              <Link isExternal aria-label="Open Discord" href={build.links.discord}>
                <Chip radius="sm" size="lg" variant="bordered" className="py-5 px-0.5 transition-discrete transition-colors hover:border-indigo-500">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <DiscordIcon className="text-indigo-500" /> Discuss on Discord
                  </span>
                </Chip>
              </Link>
            )}
            {build.links.full && (
              <Link isExternal aria-label="Open Youtube with full video" href={build.links.full}>
                <Chip radius="sm" size="lg" variant="bordered" className="py-5 px-0.5 transition-discrete transition-colors hover:border-red-500">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <YoutubeIcon className="text-red-500" /> Watch Full Video
                  </span>
                </Chip>
              </Link>
            )}
            
            {build.image && (
              <Link isExternal aria-label="Open Image" href={build.image}>
                <Chip radius="sm" size="lg" variant="bordered" className="py-5 px-0.5 transition-discrete transition-colors hover:border-green-500">
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <PhotoIcon className="text-green-500" /> Download Poster
                  </span>
                </Chip>
              </Link>
            )}
          </div>
          <Divider />
        </section>
      )}

      {build.loadout && build.loadout.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {build.loadout?.map((entry, i) => {
            const asset = getAsset(entry.assetId);

            return (
              <Card key={i} radius="sm">
                <CardBody className="flex flex-row gap-3">
                  <div className="basis-1/4 flex-shrink-0 max-w-[110px]">
                    <Tooltip
                      color="warning"
                      content={
                        <a
                          href={`${asset.wiki}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Helldivers Wiki: {asset.name}
                        </a>
                      }
                      delay={1000}
                      showArrow={true}
                    >
                      <span> {/* Explicitly use span instead of letting Tooltip decide */}
                        {asset.image && (
                          <Image
                            alt={asset.description}
                            className="max-w-[110px]"
                            radius="sm"
                            src={asset.image}
                          />
                        )}
                      </span>
                    </Tooltip>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-md font-bold text-yellow-500 tracking-wide">{asset.name}</p>
                    {(entry.note || asset.description) && (
                      <p className="text-sm opacity-90">{entry.note ?? asset.description}</p>
                    )}
                    <Chip size="sm" variant="bordered" className="max-w-fit px-2 opacity-60">
                      {asset.role}
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </section>
      )}

      {build.description && (
        <div className="my-8">
          {Array.isArray(build.description) ? (
            build.description.map((paragraph, index) => (
              <p key={index} className="my-2">{paragraph}</p>
            ))
          ) : (
            <p>{build.description}</p>
          )}
        </div>
      )}
      {build.weakness && (
        <div className="rounded-lg border p-4">
          <strong>Weakness</strong>
          <p>{build.weakness}</p>
        </div>
      )}
    </div>
  );
}
