"use client"; // This makes it a Client Component

import { Badge } from "@heroui/badge";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/react";
import { Spinner } from "@heroui/spinner";

import useStats from "@/lib/useStats";
import { siteConfig } from "@/config/site";
import {
  CalendarIcon,
  ChartBarIcon,
  DiscordIcon,
  RedditIcon,
  YoutubeIcon,
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
            <Link href={siteConfig.links.reddit}>
              <Badge
                aria-label={
                  stats.reddit.active_user_count + " members currently online"
                }
                color="danger"
                content={stats.reddit.active_user_count}
                size="md"
                title={
                  stats.reddit.active_user_count + " members currently online"
                }
              >
                <RedditIcon fill="#fc4301" size={64} />
              </Badge>
            </Link>
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
            <Link href={siteConfig.links.discord}>
              <Badge
                aria-label={
                  stats.discord.approximate_presence_count +
                  " members currently online"
                }
                color="danger"
                content={stats.discord.approximate_presence_count}
                size="md"
                title={
                  stats.discord.approximate_presence_count +
                  " members currently online"
                }
              >
                <DiscordIcon fill="#5865F2" size={64} />
              </Badge>
            </Link>
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
            <Link href={siteConfig.links.youtube}>
              <Badge
                aria-label={stats.youtube.video_count + " videos available"}
                color="danger"
                content={stats.youtube.video_count}
                size="md"
                title={stats.youtube.video_count + " videos available"}
              >
                <YoutubeIcon fill="#CD201F" size={64} />
              </Badge>
            </Link>
          </div>
          <div className="w-32 flex-1 text-center my-auto font-semibold text-4xl">
            {stats.youtube.subscriber_count}
          </div>
          <div className="w-64 flex-1 text-left my-auto font-light text-xl">
            Subscribers
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
