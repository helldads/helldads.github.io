import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          /*"min-h-screen  bg-[url('/assets/helldads-aurora.webp')] bg-cover bg-fixed bg-center;",*/
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />

            <main className="container mx-auto max-w-7xl px-6 flex-grow w-full">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <p className="text-default-600 text-center italic">
                &copy; HellDads {new Date().getFullYear()}, non-commercial fan
                project, all rights reserved.{" "}
                <Link href="/legal">Legal information</Link>
              </p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
