import { Metadata } from "next";

import { getBuildExplorerItems } from "../../data/builds";
import backgroundImage from "../../public/assets/helldads-salute-city-from-top-of-the-hill.jpg";

import BuildsExplorer from "./BuildsExplorer";

import HeroHeader from "@/components/heroHeader";

export const metadata: Metadata = {
  title: "Builds",
  alternates: {
    canonical: "/builds",
  },
};

export default function BuildsPage() {
  const builds = getBuildExplorerItems(); // static at build time

  return (
    <div>
      <HeroHeader
        backgroundImage={{ src: backgroundImage.src }}
        title={String(metadata.title ?? "")}
      />

      <BuildsExplorer builds={builds} />
    </div>
  );
}
