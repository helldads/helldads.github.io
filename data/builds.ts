import type { Asset } from "./assets";

import { z } from "zod";

// Import builds here and below at the ALL_BUILDS array
import { ASSETS } from "./assets";
import { fortyMmOfFreedomBuild } from "./builds/40mm-of-freedom-build";
import { threeSwordStyleBuild } from "./builds/3-sword-style-build";
import { airTrafficControllerBuild } from "./builds/air-traffic-controller-build";
import { anniversaryCelebrationBuild } from "./builds/anniversary-celebration-build";
import { antiPredatorStrainBuild } from "./builds/anti-predator-strain-build";
import { armageddonBuild } from "./builds/armageddon-build";
import { babyDriverBuild } from "./builds/baby-driver-build";
import { bobaFettBuild } from "./builds/boba-fett-build";
import { chkChkBoomBuild } from "./builds/chk-chk-boom-build";
import { deadSilentBuild } from "./builds/dead-silent-build";
import { demolitionistBuild } from "./builds/demolitionist-build";
import { doomSlayerBuild } from "./builds/doom-slayer-build";
import { elementalistBuild } from "./builds/elementalist-build";
import { emplacementJockeyBuild } from "./builds/emplacement-jockey-build";
import { exterminatorBuild } from "./builds/exterminator-build";
import { expendablesBuild } from "./builds/expendables-build";
import { falloutBuild } from "./builds/fallout-build";
import { gasWalkerBuild } from "./builds/gas-walker-build";
import { ghostBuild } from "./builds/ghost-build";
import { heavyGunnerBuild } from "./builds/heavy-gunner-build";
import { holdTheLineBuild } from "./builds/hold-the-line-build";
import { judgeDreddBuild } from "./builds/judge-dredd-build";
import { laserPointerBuild } from "./builds/laser-pointer-build";
import { mechDriverBuild } from "./builds/mech-driver-build";
import { missionImpossibleBuild } from "./builds/mission-impossible-build";
import { overwatchBuild } from "./builds/overwatch-build";
import { paladinBuild } from "./builds/paladin-build";
import { reinhardtBuild } from "./builds/reinhardt-build";
// import { salamanderBuild } from "./builds/salamander-build"; // salamandar is missing the image. I can't find it on reddit or discord
import { smokeWalkerBuild } from "./builds/smoke-walker-build";
import { sniperBuild } from "./builds/sniper-build";
import { spaceCowboyBuild } from "./builds/space-cowboy-build";
import { spartanBuild } from "./builds/spartan-build";
import { spellswordBuild } from "./builds/spellsword-build";
import { squidSlayerBuild } from "./builds/squid-slayer-build";
import { summonerBuild } from "./builds/summoner-build";
import { watchMyFeetBuild } from "./builds/watch-my-feet-build";

// testing stratagems build
// import { allStratagemsBuild } from "./builds/all-stratagems-build"; // remember to uncomment in the ALL_BUILDS array below

const ASSETS_BY_ID: Record<string, Asset | undefined> = ASSETS;

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

export type BuildExplorerItem = {
  slug: string;
  title: string;
  slogan?: string;
  image?: string;
  tags: string[];
  filterTags: string[];
  searchText: string;
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
  threeSwordStyleBuild,
  fortyMmOfFreedomBuild,
  airTrafficControllerBuild,
  // allStratagemsBuild, // testing stratagems build
  anniversaryCelebrationBuild,
  antiPredatorStrainBuild,
  armageddonBuild,
  babyDriverBuild,
  bobaFettBuild,
  chkChkBoomBuild,
  deadSilentBuild,
  demolitionistBuild,
  doomSlayerBuild,
  elementalistBuild,
  emplacementJockeyBuild,
  exterminatorBuild,
  expendablesBuild,
  falloutBuild,
  gasWalkerBuild,
  ghostBuild,
  heavyGunnerBuild,
  holdTheLineBuild,
  judgeDreddBuild,
  // salamanderBuild,
  laserPointerBuild,
  mechDriverBuild,
  missionImpossibleBuild,
  overwatchBuild,
  paladinBuild,
  reinhardtBuild,
  smokeWalkerBuild,
  sniperBuild,
  spaceCowboyBuild,
  spartanBuild,
  spellswordBuild,
  squidSlayerBuild,
  summonerBuild,
  watchMyFeetBuild,
];

const BUILDS_MAP: Record<string, Build> = Object.fromEntries(
  ALL_BUILDS.map((b) => [b.slug, b]),
);

export function getAllBuilds(): Build[] {
  return ALL_BUILDS;
}

function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function uniqueValues(values: Array<string | undefined>): string[] {
  return Array.from(new Set(values.filter(Boolean) as string[]));
}

function getBuildAssets(build: Build) {
  return uniqueValues(build.loadout?.map((entry) => entry.assetId) ?? []).map(
    (assetId) => ({
      assetId,
      asset: ASSETS_BY_ID[assetId],
    }),
  );
}

export function getBuildExplorerItems(): BuildExplorerItem[] {
  return ALL_BUILDS.map((build) => {
    const buildAssets = getBuildAssets(build);
    const tags = build.tags ?? [];
    const assetNames = buildAssets.map(({ asset }) => asset?.name);
    const assetRoles = buildAssets.map(({ asset }) => asset?.role);
    const assetWarbonds = buildAssets.map(({ asset }) => asset?.warbond);
    const assetIds = buildAssets.map(({ assetId }) => assetId);
    const filterTags = tags;
    const searchText = normalizeSearchText(
      [
        build.title,
        build.slogan,
        ...tags,
        ...assetIds,
        ...assetNames,
        ...assetRoles,
        ...assetWarbonds,
      ]
        .filter(Boolean)
        .join(" "),
    );

    return {
      slug: build.slug,
      title: build.title,
      slogan: build.slogan,
      image: build.image,
      tags,
      filterTags,
      searchText,
    };
  });
}

export function getBuildBySlug(slug: string): Build | undefined {
  return BUILDS_MAP[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(BUILDS_MAP);
}
