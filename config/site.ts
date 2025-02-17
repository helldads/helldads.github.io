import { isExternal } from "util/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "HellDads | Helldivers 2 Community",
  description:
    "Welcome to HellDads: The Parental Corps of Super Earth! Balancing the duty to spread managed democracy with caring for family or loved ones is no easy task. Late-night lullabies, diaper changes, or going AFK for those who need you—we understand the struggle. HellDads is for anyone juggling life’s responsibilities with a passion for Helldivers 2, we’re united by our commitment to those we care for—even if it’s after bedtime.",
  url: "https://helldads.github.io",
  logo: "/assets/helldads-logo.svg",
  navItems: [
    {
      label: "Dadtionary",
      href: "/dadtionary",
    },
    {
      label: "Code of Conduct",
      href: "/code-of-conduct",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Reddit",
      href: "https://reddit.com/r/HellDads",
      isExternal: true,
    },
    {
      label: "Discord",
      href: "https://discord.gg/7rbdFMmGCz",
      isExternal: true,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@HellDadsHQ",
      isExternal: true,
    },
    {
      label: "Dadtionary",
      href: "/dadtionary",
    },
    {
      label: "Code of Conduct",
      href: "/code-of-conduct",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://helldads.github.io",
    reddit: "https://reddit.com/r/HellDads",
    docs: "https://reddit.com/r/HellDads/wiki",
    discord: "https://discord.gg/7rbdFMmGCz",
    youtube: "https://www.youtube.com/@HellDadsHQ",
  },
};
