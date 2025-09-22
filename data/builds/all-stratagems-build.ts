import { Build } from "../builds";
import { ASSETS } from "../assets";

export const allStratagemsBuild: Build = {
  slug: "all-stratagems-build",
  title: "All Stratagems Build",
  slogan: "Every loadout item in the game.",
  description: [
    "A build containing every loadout items available in the game. Use this for reference or testing."
  ],
  weakness: "No practical use in real missions. Intended for reference only.",
  image: "/assets/builds/all-stratagems-build.jpg",
  tags: ["stratagems", "reference", "all-items"],
  loadout: Object.entries(ASSETS)
    // .filter(([_, asset]) => asset.role === "Armor")
    // .filter(([_, asset]) => asset.role === "Primary")
    // .filter(([_, asset]) => asset.role === "Secondary")
    // .filter(([_, asset]) => asset.role === "Throwable")
    // .filter(([_, asset]) => asset.role === "Stratagem")
    .map(([assetId, asset]) => ({
      assetId,
      note: asset.name,
    })),
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
