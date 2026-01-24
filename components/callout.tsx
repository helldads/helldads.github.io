"use client";

import React from "react";
import Link from "next/link";
import { Card, CardBody, Button } from "@heroui/react"; // HeroUI

export default function Callout({
  title = "Title",
  subtitle = "Subtitle",
  href = "/",
  cta = "View event",
  thumbnailSrc = "/assets/",
  thumbnailAlt = "Alt",
}) {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Card
        shadow="lg"
        radius="lg"
        className={[
          // Fixed size across all breakpoints (no responsive sizing)
          "w-[320px] h-[96px]",
          // Styling
          "border border-default-200 bg-background/90 backdrop-blur",
          "overflow-hidden",
        ].join(" ")}
      >
        <CardBody className="p-0">
          <div className="relative flex h-full w-full items-center gap-3 px-3">
            {/* Whole card clickable */}
            <Link
              href={href}
              className="absolute inset-0 z-10"
              aria-label={`${title} – open event page`}
            />

            {/* Thumbnail */}
            <div className="relative z-20 h-[64px] w-[64px] shrink-0 overflow-hidden rounded-md border border-default-200">
              {/* Use next/image if you prefer; plain img keeps this drop-in simple */}
              <Link href={href}>
                <img
                  src={thumbnailSrc}
                  alt={thumbnailAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Text */}
            <div className="relative z-20 min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-foreground">
                {title}
              </div>
              <div className="truncate text-xs text-foreground/70">
                {subtitle}
              </div>

              {/* Optional CTA button (still same fixed size overall) */}
              <div className="mt-2">
                <Button
                  as={Link}
                  className="h-7 px-3 text-xs"
                  color="primary"
                  href={href}
                  size="sm"
                  variant="flat"
                >
                  {cta}
                </Button>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                // Prevent the overlay Link from triggering navigation
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="relative z-20 ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 hover:bg-default-100 hover:text-foreground"
              aria-label="Dismiss callout"
              title="Dismiss"
            >
              <span className="text-lg leading-none" aria-hidden="true">
                ×
              </span>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
