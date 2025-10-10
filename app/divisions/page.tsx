import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import { Metadata } from "next";

import { getAllDivisions } from "../../data/divisions";

import { title } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Divisions",
  alternates: {
    canonical: "/divisions",
  },
};

export default function DivisionsPage() {
  const divisions = getAllDivisions(); // static at build time

  return (
    <div>
      <h1 className={title()}>Divisions</h1>
      <div className="grid gap-4 mt-6 md:mt-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {divisions.map(({ slug, title, slogan, image }) => (
          <Link key={slug} className="flex rounded-sm" href={`/divisions/${slug}`}>
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
