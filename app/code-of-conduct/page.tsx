import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

import {
  DiscordIcon,
  PhotoIcon,
  VideoIcon,
  TextDocumentIcon,
} from "@/components/icons";

export default function CodeOfConductPage() {
  return (
    <div>
      <h1 className={title()}>Code of Conduct</h1>
      <p className="my-6">
        <Button
          as={Link}
          color="primary"
          isExternal
          showAnchorIcon
          href="https://www.reddit.com/r/HellDads/wiki/code-of-conduct/"
        >
          Open the Code of Conduct in the Reddit Wiki
        </Button>
      </p>
    </div>
  );
}
