import { z } from "zod";
import { threeSwordStyleBuild } from "./builds/3-sword-style-build";
import { judgeDreddBuild } from "./builds/judge-dredd-build";
import { squidSlayerBuild } from "./builds/squid-slayer-build";

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
				assetId: z.string().optional(),
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
	judgeDreddBuild,
	squidSlayerBuild,
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
