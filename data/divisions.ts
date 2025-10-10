import { z } from "zod";

// Import divisions here and below at the ALL_DIVISIONS array
import { summonerBuild } from "./divisions/summoner-build";

const ALL_DIVISIONS: Division[] = [
  summonerBuild,
];

const DIVISIONS_MAP: Record<string, Division> = Object.fromEntries(
  ALL_DIVISIONS.map((b) => [b.slug, b]),
);


export type LoadoutEntry = {
  assetId?: string;
  note?: string;
};

export type DivisionLinks = {
  full?: string; // long-form video
  highlights?: string; // short highlights video
  reddit?: string;
  discord?: string;
};

export type Division = {
  slug: string; // keep explicit slug to allow renames of keys later
  title: string;
  slogan?: string;
  description?: string | string[]; // markdown or array of paragraphs
  weakness?: string;
  image?: string; // path under /public
  tags?: string[];
  loadout?: LoadoutEntry[];
  links?: DivisionLinks;
};

export const DivisionsSchema = z.object({
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

export function getAllDivisions(): Division[] {
  return ALL_DIVISIONS;
}

export function getDivisionBySlug(slug: string): Division | undefined {
  return DIVISIONS_MAP[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(DIVISIONS_MAP);
}
