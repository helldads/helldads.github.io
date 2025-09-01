import { BUILDS } from "./builds-data";
import { Build, BuildSchema } from "./builds";

export function getAllBuilds(): Build[] {
  const list = Object.values(BUILDS);

  // runtime validation in dev
  if (process.env.NODE_ENV !== "production") {
    for (const b of list) BuildSchema.parse(b);
  }

  return list;
}

export function getBuildBySlug(slug: string): Build | undefined {
  const b = BUILDS[slug];

  // runtime validation in dev
  if (process.env.NODE_ENV !== "production" && b) {
    BuildSchema.parse(b);
  }

  return b;
}

export function getAllSlugs(): string[] {
  return Object.keys(BUILDS);
}
