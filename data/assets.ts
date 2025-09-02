// Reuse your roles
export const LoadoutRole = {
  Armor: "armor",
  Primary: "primary",
  Secondary: "secondary",
  Throwable: "throwable",
  Stratagem: "stratagem",
} as const;
export type LoadoutRole = (typeof LoadoutRole)[keyof typeof LoadoutRole];

export type Asset = {
  role: LoadoutRole;
  name: string; // display name
  image?: string; // under /public
  description?: string;
  wiki?: string;
};

// Use slug keys to avoid spaces/punctuation issues
export const ASSETS = {
  "BP-77": {
    role: LoadoutRole.Armor,
    name: "BP-77 Grand Juror",
    image: "/assets/armor/",
    description:
      "Each gilded detail is polished to perfection by re-educated dissidents, as part of the Lifelong Post-Infraction Atonement Program.",
    wiki: "https://helldivers.wiki.gg/wiki/BP-77_Grand_Juror",
  },
  "SG-225SP": {
    role: LoadoutRole.Primary,
    name: "SG-225SP Breaker Spray&Pray",
    image: "/assets/primary/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },
  "P-92": {
    role: LoadoutRole.Secondary,
    name: "P-92 Warrant",
    image: "/assets/secondary/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },
  "G-4": {
    role: LoadoutRole.Throwable,
    name: "G-4 Gas",
    image: "/assets/secondary/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },
  "M-102": {
    role: LoadoutRole.Stratagem,
    name: "M-102 Fast Reconnaissance Vehicle",
    image: "/assets/stratagem/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },
  "B-100": {
    role: LoadoutRole.Stratagem,
    name: "B-100 Portable Hellbomb",
    image: "/assets/stratagem/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },

  "LAS-98": {
    role: LoadoutRole.Stratagem,
    name: "LAS-98 Laser Cannon",
    image: "/assets/stratagem/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },

  OPS: {
    role: LoadoutRole.Stratagem,
    name: "Orbital Precision Strike",
    image: "/assets/stratagem/",
    description: "",
    wiki: "https://helldivers.wiki.gg/wiki/",
  },
} as const;

// Helpful types
export type AssetId = keyof typeof ASSETS;
export function getAsset(id: AssetId): Asset {
  return ASSETS[id];
}
