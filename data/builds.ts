import { z } from "zod";

// Import builds here and below at the ALL_BUILDS array
import { spellswordBuild } from "./builds/spellsword-build";
import { anniversaryCelebrationBuild } from "./builds/anniversary-celebration-build";
import { threeSwordStyleBuild } from "./builds/3-sword-style-build";
import { judgeDreddBuild } from "./builds/judge-dredd-build";
import { squidSlayerBuild } from "./builds/squid-slayer-build";
import { exterminatorBuild } from "./builds/exterminator-build";
// import { salamanderBuild } from "./builds/salamander-build"; // salamandar is missing the image. I can't find it on reddit or discord
import { summonerBuild } from "./builds/summoner-build";
import { airTrafficControllerBuild } from "./builds/air-traffic-controller-build";
import { antiPredatorStrainBuild } from "./builds/anti-predator-strain-build";
import { reinhardtBuild } from "./builds/reinhardt-build";
import { heavyGunnerBuild } from "./builds/heavy-gunner-build";
import { laserPointerBuild } from "./builds/laser-pointer-build";
import { emplacementJockeyBuild } from "./builds/emplacement-jockey-build";
import { doomSlayerBuild } from "./builds/doom-slayer-build";
import { fortyMmOfFreedomBuild } from "./builds/40mm-of-freedom-build";
import { gasWalkerBuild } from "./builds/gas-walker-build";
import { ghostBuild } from "./builds/ghost-build";
import { babyDriverBuild } from "./builds/baby-driver-build";
import { spaceCowboyBuild } from "./builds/space-cowboy-build";
import { expendablesBuild } from "./builds/expendables-build";
import { elementalistBuild } from "./builds/elementalist-build";
import { demolitionistBuild } from "./builds/demolitionist-build";
import { mechDriverBuild } from "./builds/mech-driver-build";
import { sniperBuild } from "./builds/sniper-build";

// testing stratagems build
// import { allStratagemsBuild } from "./builds/all-stratagems-build"; // remember to uncomment in the ALL_BUILDS array below

export type LoadoutEntry = {
  assetId?: string;
  note?: string;
};

export type BuildLinks = {
  full?: string; // long-form video
  highlights?: string; // short highlights video
  reddit?: string;
  discord?: string;
};

export type Build = {
  slug: string; // keep explicit slug to allow renames of keys later
  title: string;
  slogan?: string;
  description?: string | string[]; // markdown or array of paragraphs
  weakness?: string;
  image?: string; // path under /public
  tags?: string[];
  loadout?: LoadoutEntry[];
  links?: BuildLinks;
};

export const BuildSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  slogan: z.string().optional(),
  description: z.union([z.string(), z.array(z.string())]).optional(),
  weakness: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  loadout: z
    .array(
      z.object({
        assetId: z.string(),
        note: z.string().optional(),
      }),
    )
    .optional(),
  links: z
    .object({
      reddit: z.union([z.literal(""), z.string().trim().url()]),
      full: z.union([z.literal(""), z.string().trim().url()]),
      highlights: z.union([z.literal(""), z.string().trim().url()]),
      discord: z.union([z.literal(""), z.string().trim().url()]),
    })
    .optional(),
});

const ALL_BUILDS: Build[] = [
  spellswordBuild,
  anniversaryCelebrationBuild,
  threeSwordStyleBuild,
  judgeDreddBuild,
  squidSlayerBuild,
  exterminatorBuild,
  summonerBuild,
  // salamanderBuild,
  airTrafficControllerBuild,
  antiPredatorStrainBuild,
  reinhardtBuild,
  spaceCowboyBuild,
  expendablesBuild,
  elementalistBuild,
  demolitionistBuild,
  mechDriverBuild,
  sniperBuild,
  heavyGunnerBuild,
  laserPointerBuild,
  emplacementJockeyBuild,
  doomSlayerBuild,
  fortyMmOfFreedomBuild,
  gasWalkerBuild,
  ghostBuild,
  babyDriverBuild,
  // allStratagemsBuild, // testing stratagems build
];

const BUILDS_MAP: Record<string, Build> = Object.fromEntries(
  ALL_BUILDS.map((b) => [b.slug, b]),
);

export function getAllBuilds(): Build[] {
  return ALL_BUILDS;
}

export function getBuildBySlug(slug: string): Build | undefined {
  return BUILDS_MAP[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(BUILDS_MAP);
}
