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
        title={metadata.title}
        backgroundImage={{ src: backgroundImage.src }}
      />
      <p className="my-6">PLACEHOLDER</p>
    </div>
  );
}
