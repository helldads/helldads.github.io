import type { AssetId } from "./assets";

// npm i zod (optional but recommended for runtime validation during dev)
import { z } from "zod";

export type LoadoutEntry = {
  assetId: AssetId; // reference into ASSETS
  note?: string; // optional per-build note/override
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
      reddit: z.string().url().optional(),
      full: z.string().url().optional(),
      highlights: z.string().url().optional(),
      discord: z.string().url().optional(),
    })
    .optional(),
});
