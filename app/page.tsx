import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Badge } from "@heroui/badge";
import { Divider } from "@heroui/divider";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";

import { siteConfig } from "@/config/site";
import {
  CalendarIcon,
  ChartBarIcon,
  DiscordIcon,
  RedditIcon,
  UserIcon,
  YoutubeIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <section className="w-full text-center pb-12">
      {/* Full-width Image */}
      <div className="w-full">
        <Image
          alt="Join the HellDads banner"
          className="w-full h-auto object-cover rounded-5g max-h-[250px] sm:max-h-[350px] md:max-h-[720px]"
          height={600}
          src="/assets/join-the-helldads.webp"
          width={1920}
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl my-12 md:text-5xl font-bold">
        Join the HellDads!
      </h1>

      {/* 3-Column Teaser Section */}
      <div className="drop-shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {/* Card 1: Reddit */}
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-1 sm:col-span-1"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Reddit
            </p>
            <h4 className="text-white font-medium text-2xl">r/HellDads</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="HellDads Headquarter at the Democracy Space Station"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/assets/helldads-dss.webp"
          />
          <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-left text-medium">
                Community Center
              </p>
              <p className="text-black text-left text-tiny">
                Democracy Space Station
              </p>
            </div>
            <Button
              isExternal
              as={Link}
              className="text-large bg-[#fc4301]"
              color="danger"
              href={siteConfig.links.reddit}
              radius="md"
              size="lg"
            >
              <RedditIcon /> Reddit
            </Button>
          </CardFooter>
        </Card>
        {/* Card 2: Discord */}
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-1 sm:col-span-1"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Discord
            </p>
            <h4 className="text-white font-medium text-2xl">HellDads</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="HellDads communication between super destroyers with a beautiful aurora"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/assets/helldads-aurora.webp"
          />
          <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-left text-medium">Communication</p>
              <p className="text-black text-left text-tiny">
                Chat & Voice Squads
              </p>
            </div>
            <Button
              isExternal
              as={Link}
              className="text-large bg-[#5865F2] text-white"
              //              color="#5865F2"
              href={siteConfig.links.discord}
              radius="md"
              size="lg"
            >
              <DiscordIcon /> Discord
            </Button>
          </CardFooter>
        </Card>
        {/* Card 3: Youtube */}
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-1 sm:col-span-1"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              YouTube
            </p>
            <h4 className="text-white font-medium text-2xl">HellDadsHQ</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="HellDads Headquarter at the Democracy Space Station"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="/assets/helldads-return-of-the-mech.webp"
          />
          <CardFooter className="absolute bg-white/50 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-left text-medium">
                Highlights &amp; Clips
              </p>
              <p className="text-black text-left text-tiny">Featured Videos</p>
            </div>
            <Button
              isExternal
              as={Link}
              className="text-large bg-red-600"
              color="danger"
              href={siteConfig.links.youtube}
              radius="md"
              size="lg"
            >
              <YoutubeIcon /> YouTube
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 2-Column Teaser Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <Card className="col-span-1">
          <CardHeader className="flex gap-3">
            <Image
              alt="HellDads Logo"
              height={50}
              radius="none"
              src={siteConfig.logo}
              width={50}
            />
            <div className="flex flex-col text-left">
              <p className="text-md">HellDads</p>
              <p className="text-small text-default-500">
                Helldivers 2 Community
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/about">Learn more</Link>
          </CardFooter>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex gap-3">
            <ChartBarIcon className="" size={50} />
            <div className="flex flex-col text-left">
              <p className="text-md">Statistics</p>
              <p className="text-small text-default-500">
                <span aria-label="Estimated">Est.</span> 29th Oct. 2024
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex h-24">
              <div className="w-24 flex-none my-auto items-center text-center">
                <div className="relative inline-flex shrink-0">
                  <RedditIcon fill="#fc4301" size={64} />
                </div>
              </div>
              <div className="w-32 flex-1 text-center my-auto font-semibold text-4xl">
                2004
              </div>
              <div className="w-64 flex-1 text-left my-auto font-light text-xl">
                Redditors
              </div>
            </div>
            <div className="flex h-24">
              <div className="w-24 flex-none my-auto items-center text-center">
                <Badge
                  aria-label="104 members currently online"
                  color="danger"
                  content="104"
                  size="md"
                >
                  <DiscordIcon fill="#5865F2" size={64} />
                </Badge>
              </div>
              <div className="w-32 flex-1 text-center my-auto font-semibold text-4xl">
                506
              </div>
              <div className="w-64 flex-1 text-left my-auto font-light text-xl">
                Discordians
              </div>
            </div>
            <div className="flex h-24">
              <div className="w-24 flex-none my-auto items-center text-center">
                <div className="relative inline-flex shrink-0">
                  <UserIcon size={64} />
                </div>
              </div>
              <div className="w-32 flex-1 text-center my-auto font-semibold text-4xl">
                7
              </div>
              <div className="w-64 flex-1 text-left my-auto font-light text-xl">
                Mods
              </div>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <p className="text-small text-default-500">
              <CalendarIcon className="inline" /> Last updated 2025-02-26
              03:00am
            </p>
          </CardFooter>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex gap-3">
            <Image
              alt="Freedom Alliance Logo"
              radius="none"
              src="/assets/freedom-alliance-logo.webp"
              width={38}
            />
            <div className="flex flex-col text-left">
              <p className="text-md">The Freedom Alliance</p>
              <p className="text-small text-default-500">
                Active Member &amp; Contributor
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>
              The HellDads have earned recognition from the prestigious Freedom
              Alliance, a recipient of the{" "}
              <span className="italic font-bold">
                Medal for Excellence in Patriotism
              </span>
              . The Freedom Alliance is a coalition of players, clans, creators,
              and community leaders dedicated to uniting the Helldivers
              community. They produce high-quality trailers, promotional
              graphics, immersive in-world news broadcasts, and large-scale
              community events that connect multiple subreddits and Discord
              servers.
            </p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              color="primary"
              href="https://www.freedomalliance.gg/"
            >
              Visit the Freedom Alliance
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
