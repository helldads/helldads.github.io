import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

import { getAllBuilds } from "@/data/builds-index";
import { title } from "@/components/primitives";

export default function BuildsPage() {
  const builds = getAllBuilds(); // static at build time

  return (
    <div>
      <h1 className={title()}>Builds</h1>
      <section className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {builds.map(({ slug, title, slogan, image }) => (
            <Card
              key={slug}
              className="w-full max-w-md mb-6 md:mb-0 md:w-[420px]"
              radius="sm"
            >
              <CardHeader className="flex items-center gap-3">
                <h2 className="text-lg font-semibold">{title}</h2>
                {slogan && <p className="text-sm opacity-80">{slogan}</p>}
              </CardHeader>
              <CardBody>
                <Link key={slug} className="" href={`/builds/${slug}`}>
                  {image && (
                    <div className="">
                      <Image alt={title} className="mr-auto" src={image} />
                    </div>
                  )}
                </Link>
              </CardBody>
              <CardFooter className="justify-center">
                <Button
                  key={slug}
                  as="a"
                  color="primary"
                  href={`/builds/${slug}`}
                  size="sm"
                >
                  Open build page
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
