// npm i zod (optional but recommended for runtime validation during dev)
import { z } from "zod";

export const LoadoutRole = {
  Armor: "armor",
  Primary: "primary",
  Secondary: "secondary",
  Throwable: "throwable",
  Stratagem: "stratagem",
} as const;
export type LoadoutRole = (typeof LoadoutRole)[keyof typeof LoadoutRole];

export type LoadoutItem = {
  role: LoadoutRole;
  asset: string;
  description?: string;
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
  description?: string;
  weakness?: string;
  image?: string; // path under /public
  tags?: string[];
  loadout?: LoadoutItem[];
  links?: BuildLinks;
};

export const BuildSchema = z.object({
  //slug: z.string().min(1),
  title: z.string().min(1),
  slogan: z.string().optional(),
  description: z.string().optional(),
  weakness: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  loadout: z
    .array(
      z.object({
        role: z.enum(
          Object.values(LoadoutRole) as [LoadoutRole, ...LoadoutRole[]],
        ),
        asset: z.string(),
        description: z.string().optional(),
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
