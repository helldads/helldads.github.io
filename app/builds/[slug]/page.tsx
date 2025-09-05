import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { Image } from "@heroui/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAsset } from "@/data/assets";
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
    <div className="max-w-3xl mx-auto py-6 space-y-6">
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
        <div className="space-y-4">
          {Array.isArray(build.description) 
            ? build.description.map((paragraph, index) => (
                <p key={index} className="my-2">{paragraph}</p>
              ))
            : <p>{build.description}</p>
          }
        </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {build.loadout?.map((entry, i) => {
              const asset = getAsset(entry.assetId);

              return (
                <Card key={i} className="flex flex-row gap-4">
                  <CardBody className="flex flex-row gap-2">
                    <div className="basis-1/4 flex-shrink-0 aspect-square">
                      <Tooltip
                        color="warning"
                        content={<a href={`https://helldivers.wiki.gg/wiki/${asset.wiki}`} target="_blank" rel="noopener noreferrer">Helldivers Wiki: {asset.name}</a>}
                        delay={1000}
                        showArrow={true}
                      >
                        {asset.image && (
                          <Image
                            alt={asset.description}
                            className="max-h-[110px] max-w-[110px]"
                            radius="sm"
                            src={asset.image}
                          />
                        )}
                      </Tooltip>
                    </div>
                    <div className="flex basis-3/4 flex-col gap-2">
                      <p className="text-md font-bold text-yellow-500 tracking-wide">{asset.name}</p>
                      {(entry.note || asset.description) && (
                        <p className="text-sm opacity-90">{entry.note ?? asset.description}</p>
                      )}
                      <p className="text-small text-default-500">{asset.role}</p>
                    </div>
                  </CardBody>
                </Card>
                // <Card key={i} className="flex flex-col">
                //   <CardHeader className="pb-2">
                //     {asset.image && (
                //       <Image
                //         alt={asset.description}
                //         height={40}
                //         radius="sm"
                //         src={asset.image}
                //         width={40}
                //       />
                //     )}

                //     <div className="flex flex-col">
                //       <p className="text-md">{asset.name}</p>
                //     </div>
                //   </CardHeader>
                //   {(entry.note || asset.description) && (
                //     <CardBody>
                //       <p className="text-sm opacity-90">
                //         {entry.note ?? asset.description}
                //       </p>
                //     </CardBody>
                //   )}
                //   <CardFooter>
                //     <p className="text-small text-default-500">{asset.role}</p>
                //   </CardFooter>
                // </Card>
              );
            })}
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
    </div>
  );
}
