import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import { Metadata } from "next";

import { getAllBuilds } from "../../data/builds";

import HeroHeader from "@/components/heroHeader";
import backgroundImage from "../../public/assets/helldads-embrace-science.webp";

export const metadata: Metadata = {
  title: "Builds",
  alternates: {
    canonical: "/builds",
  },
};

export default function BuildsPage() {
  const builds = getAllBuilds(); // static at build time

  return (
    <div>
      <HeroHeader
        title={String(metadata.title ?? "")}
        backgroundImage={{ src: backgroundImage.src }}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12 p-6">
        {builds.map(({ slug, title, slogan, image }) => (
          <Link key={slug} className="flex rounded-sm" href={`/builds/${slug}`}>
            <Card
              key={slug}
              className="
                rounded-sm transition-colors duration-700 ease-in-out
                outline-1 outline-white dark:outline-black
                hover:outline-yellow-500 hover:dark:outline-yellow-500
                hover:bg-neutral-50 hover:dark:bg-stone-800
                focus:outline-yellow-500 focus:dark:outline-yellow-500
                focus:bg-neutral-50 focus:dark:bg-stone-800"
            >
              {image && (
                <Image
                  alt={title}
                  className="mr-auto rounded-none"
                  src={image}
                  title={title}
                />
              )}
              <CardBody className="flex flex-col gap-1">
                <h2 className="text-lg font-bold dark:text-yellow-500 tracking-wide">
                  {title}
                </h2>
                {slogan && <p className="text-sm opacity-80">{slogan}</p>}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
