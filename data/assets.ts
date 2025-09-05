// Reuse your roles
export const LoadoutRole = {
  Armor: "Armor",
  Primary: "Primary",
  Secondary: "Secondary",
  Throwable: "Throwable",
  Stratagem: "Stratagem",
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
    image: "/assets/armor/BP-77_Grand_Juror_Body_Icon.png",
    description:
      "Each gilded detail is polished to perfection by re-educated dissidents, as part of the Lifelong Post-Infraction Atonement Program.",
    wiki: "https://helldivers.wiki.gg/index.php?curid=12788",
  },
  "SG-225SP": {
    role: LoadoutRole.Primary,
    name: "SG-225SP Breaker Spray&Pray",
    image: "/assets/primary/SG-225SP_Breaker_Spray&Pray_Primary_Weaponry.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/wiki/SG-225SP_Breaker_Spray%26Pray",
  },
  "P-92": {
    role: LoadoutRole.Secondary,
    name: "P-92 Warrant",
    image: "/assets/secondary/P-92_Warrant_Secondary_Render.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/index.php?curid=13115",
  },
  "G-4": {
    role: LoadoutRole.Throwable,
    name: "G-4 Gas",
    image: "/assets/throwable/G-4_Gas_Throwable_Weaponry.png",
    description: "",
    wiki: "https://helldivers.wiki.gg/index.php?curid=7435",
  },
  "M-102": {
    role: LoadoutRole.Stratagem,
    name: "M-102 Fast Reconnaissance Vehicle",
    image: "/assets/stratagem/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png",
    description: "",
    wiki: "https://helldivers.wiki.gg/index.php?curid=9079",
  },
  "B-100": {
    role: LoadoutRole.Stratagem,
    name: "B-100 Portable Hellbomb",
    image: "/assets/stratagem/Portable_Hellbomb_Stratagem_Icon.png",
    description: "",
    wiki: "https://helldivers.wiki.gg/index.php?curid=10360",
  },
  "LAS-98": {
    role: LoadoutRole.Stratagem,
    name: "LAS-98 Laser Cannon",
    image: "/assets/stratagem/Laser_Cannon_Stratagem_Icon.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/index.php?curid=2987",
  },

  OPS: {
    role: LoadoutRole.Stratagem,
    name: "Orbital Precision Strike",
    image: "/assets/stratagem/Orbital_Precision_Strike_Stratagem_Icon.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/index.php?curid=3085",
  },
} as const;

// Helpful types
export type AssetId = keyof typeof ASSETS;
export function getAsset(id: AssetId): Asset {
  return ASSETS[id];
}
