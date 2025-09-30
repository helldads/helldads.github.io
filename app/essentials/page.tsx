import { Metadata } from "next";

import EssentialsPageClient from "./EssentialsPageClient";

export const metadata: Metadata = {
  title: "Essentials",
  alternates: {
    canonical: "/essentials",
  },
};

export default function EssentialsPage() {
  return <EssentialsPageClient />;
}
