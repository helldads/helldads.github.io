import type { Metadata } from "next";
import type { Build } from "@/data/builds";

import { siteConfig } from "@/config/site";

const socialSiteName = "HellDads";
const socialDescriptionMaxLength = 155;
const minimumUsefulTextLength = 90;

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
  type: string;
};

export const defaultSocialImage: SocialImage = {
  url: "/assets/og/helldads.webp",
  width: 1200,
  height: 630,
  alt: "HellDads community banner",
  type: "image/webp",
};

export function createSocialMetadata({
  title,
  description,
  pathname,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: SocialImage;
}): Metadata {
  const imageMetadata = image ? { images: [image] } : {};

  return {
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: socialSiteName,
      locale: "en_US",
      type: "website",
      ...imageMetadata,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...imageMetadata,
    },
  };
}

export function getBuildSocialMetadata(build: Build): Metadata {
  return createSocialMetadata({
    title: `${build.title} - HellDads Build`,
    description: getBuildSocialDescription(build),
    pathname: `/builds/${build.slug}`,
    image: build.image
      ? {
          url: `/assets/og/builds/${build.slug}.webp`,
          width: 1200,
          height: 630,
          alt: `${build.title} social preview card`,
          type: "image/webp",
        }
      : undefined,
  });
}

export function getBuildSocialDescription(build: Build): string {
  const description =
    typeof build.description === "string"
      ? build.description
      : build.description?.find(Boolean);
  const firstDescriptionSentence = getFirstSentence(description);
  const text = [build.slogan, firstDescriptionSentence]
    .map(cleanSocialText)
    .filter(Boolean)
    .join(" ");

  return truncateSocialText(
    text || `A Helldivers 2 loadout from the ${socialSiteName} community.`,
  );
}

function getFirstSentence(value?: string): string {
  const text = cleanSocialText(value);
  const match = text.match(/^.*?[.!?](?=\s|$)/);

  return match?.[0] ?? text;
}

function cleanSocialText(value?: string): string {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function truncateSocialText(text: string): string {
  const cleanText = cleanSocialText(text);

  if (cleanText.length <= socialDescriptionMaxLength) {
    return cleanText;
  }

  const preview = cleanText.slice(0, socialDescriptionMaxLength + 1);
  const sentenceEnds = Array.from(preview.matchAll(/[.!?](?=\s|$)/g));
  const lastSentenceEnd = sentenceEnds[sentenceEnds.length - 1]?.index;

  if (
    lastSentenceEnd !== undefined &&
    lastSentenceEnd >= minimumUsefulTextLength
  ) {
    return preview.slice(0, lastSentenceEnd + 1).trim();
  }

  const wordEnd = preview.lastIndexOf(" ");
  const end =
    wordEnd >= minimumUsefulTextLength ? wordEnd : socialDescriptionMaxLength;

  return `${preview.slice(0, end).trim()}...`;
}

export const siteSocialMetadata = createSocialMetadata({
  title: siteConfig.name,
  description: siteConfig.shortDescription,
  pathname: "/",
  image: defaultSocialImage,
});
