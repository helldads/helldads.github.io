"use client"; // This makes it a Client Component

import { Spinner } from "@heroui/spinner";
import { Image } from "@heroui/image";
import { Badge } from "@heroui/badge";
import { Divider } from "@heroui/divider";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";

import useStats from "@/lib/useStats";
import {
  CalendarIcon,
  ChartBarIcon,
  DiscordIcon,
  RedditIcon,
} from "@/components/icons";

export default function StatsCard() {
  const stats = useStats();

  if (!stats) {
    return (
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
          <div className="my-auto text-center items-center">
            <Spinner />
            <p className="text-center">Loading stats...</p>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-small text-default-500">
            <CalendarIcon className="inline" /> Last updated: ...
          </p>
        </CardFooter>
      </Card>
    );
  }

  return (
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
            {stats.reddit.subscribers}
          </div>
          <div className="w-64 flex-1 text-left my-auto font-light text-xl">
            Redditors
          </div>
        </div>
        <div className="flex h-24">
          <div className="w-24 flex-none my-auto items-center text-center">
            <Badge
              aria-label={
                stats.discord.approximate_presence_count +
                " members currently online"
              }
              color="danger"
              content={stats.discord.approximate_presence_count}
              size="md"
            >
              <DiscordIcon fill="#5865F2" size={64} />
            </Badge>
          </div>
          <div className="w-32 flex-1 text-center my-auto font-semibold text-4xl">
            {stats.discord.approximate_member_count}
          </div>
          <div className="w-64 flex-1 text-left my-auto font-light text-xl">
            Discordians
          </div>
        </div>
        <div className="flex h-24">
          <div className="w-24 flex-none my-auto items-center text-center">
            <div className="relative inline-flex shrink-0">
              {/* <UserIcon size={64} /> */}
              <Image
                aria-label="Emoji of a overtired HellDad"
                height={64}
                src="/assets/emoji-helldad.png"
              />
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
          <CalendarIcon className="inline" /> Last updated:{" "}
          {new Date(stats.lastUpdated).toLocaleString()}
        </p>
      </CardFooter>
    </Card>
  );
}
