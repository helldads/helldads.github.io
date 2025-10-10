import { Metadata } from "next";

import backgroundImage from "../../public/assets/helldads-embrace-science.webp";

import HeroHeader from "@/components/heroHeader";

export const metadata: Metadata = {
  title: "Divisions",
  alternates: {
    canonical: "/divisions",
  },
};

export default function DivisionsPage() {
  return (
    <div>
      <HeroHeader
        backgroundImage={{ src: backgroundImage.src }}
        title={String(metadata.title ?? "")}
      />
      <p className="my-6">PLACEHOLDER</p>
    </div>
  );
}
