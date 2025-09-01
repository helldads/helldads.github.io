import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllSlugs, getBuildBySlug } from "@/data/builds-index";

// Prebuild static paths
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BuildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = getBuildBySlug(slug);

  if (!build) return notFound();

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      {build.image && (
        <div className="relative aspect-video">
          <Image
            alt={build.title}
            className="object-cover rounded-xl"
            src={build.image}
          />
        </div>
      )}
      <header>
        <h1 className="text-2xl font-semibold">{build.title}</h1>
        {build.slogan && <p className="opacity-80">{build.slogan}</p>}
      </header>

      {build.description && (
        <p className="leading-relaxed">{build.description}</p>
      )}
      {build.weakness && (
        <div className="rounded-lg border p-4">
          <strong>Weakness</strong>
          <p>{build.weakness}</p>
        </div>
      )}

      {build.loadout && build.loadout.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-2">Loadout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {build.loadout.map((l, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="pb-2">
                  <Image
                    alt="placeholder"
                    height={40}
                    radius="sm"
                    src="/assets/builds/judge-dredd-build.jpeg"
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p className="text-md">{l.asset}</p>
                  </div>
                </CardHeader>
                {l.description && (
                  <CardBody>
                    <p className="text-sm opacity-90">{l.description}</p>
                  </CardBody>
                )}
                <CardFooter>
                  <p className="text-small text-default-500">{l.role}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      {build.links && (
        <section className="space-y-1">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="list-disc pl-6">
            {build.links.reddit && (
              <li>
                <Link href={build.links.reddit}>Reddit</Link>
              </li>
            )}
            {build.links.full && (
              <li>
                <Link href={build.links.full}>Full video</Link>
              </li>
            )}
            {build.links.highlights && (
              <li>
                <Link href={build.links.highlights}>Highlights</Link>
              </li>
            )}
            {build.links.discord && (
              <li>
                <Link href={build.links.discord}>Discord</Link>
              </li>
            )}
          </ul>
        </section>
      )}
    </main>
  );
}
