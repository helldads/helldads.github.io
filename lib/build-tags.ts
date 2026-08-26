export const BUILD_TAG_GROUPS = [
  {
    label: "Factions",
    tags: ["all-factions", "terminids", "automatons", "illuminate"],
  },
  {
    label: "Class",
    tags: ["light", "medium", "heavy"],
  },
  {
    label: "Role",
    tags: ["assault", "mechanic", "stealth", "support", "sniper"],
  },
  {
    label: "Damage",
    tags: [
      "projectiles",
      "explosive",
      "gas",
      "fire",
      "arc",
      "energy",
      "plasma",
      "control",
    ],
  },
] as const;

export const BUILD_TAG_LABELS: Record<string, string> = {
  "all-factions": "All factions",
  arc: "Arc",
  assault: "Assault",
  automatons: "Automatons",
  control: "Control",
  energy: "Energy",
  explosive: "Explosive",
  fire: "Fire",
  gas: "Gas",
  heavy: "Heavy",
  illuminate: "Illuminate",
  light: "Light",
  mechanic: "Mechanic",
  medium: "Medium",
  plasma: "Plasma",
  projectiles: "Projectiles",
  sniper: "Sniper",
  stealth: "Stealth",
  support: "Support",
  terminids: "Terminids",
};

export function getBuildTagLabel(tag: string): string {
  return (
    BUILD_TAG_LABELS[tag] ??
    tag
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  );
}

export function getBuildTagSearchTerms(tag: string): string[] {
  if (tag === "all-factions") {
    return [
      "all-factions",
      "all factions",
      "terminids",
      "automatons",
      "illuminate",
    ];
  }

  return [tag, getBuildTagLabel(tag)];
}
