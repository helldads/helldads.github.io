import { Metadata } from "next";

import { title } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Divisions",
  alternates: {
    canonical: "/divisions",
  },
};

export default function DivisionsPage() {
  return (
    <div>
      <h1 className={title()}>Divisions</h1>
      <p className="my-6">PLACEHOLDER</p>
    </div>
  );
}
