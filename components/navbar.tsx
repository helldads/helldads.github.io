import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  RedditIcon,
  YoutubeIcon,
} from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="HellDads Logo"
              className="w-12"
              src="/assets/helldads-logo.svg"
              width={48}
              height={48}
            />
            <p className="font-semibold text-2xl">HellDads</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <Link
            isExternal
            aria-label="Open YouTube channel"
            href={siteConfig.links.youtube}
          >
            <YoutubeIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            aria-label="Join Discord"
            href={siteConfig.links.discord}
          >
            <DiscordIcon className="text-default-500" />
          </Link>
          {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NavbarItem className="hidden sm:flex">
          <Button
            isExternal
            as={Link}
            className="font-semibold text-sm"
            color="danger"
            href={siteConfig.links.reddit}
            startContent={<RedditIcon />}
            variant="shadow"
          >
            Join us on Reddit
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Link
          isExternal
          title="YouTube"
          aria-label="Open YouTube channel"
          href={siteConfig.links.youtube}
        >
          <YoutubeIcon className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Join Discord server"
          href={siteConfig.links.discord}
        >
          <DiscordIcon className="text-default-500" />
        </Link>
        <Link
          isExternal
          aria-label="Goto Reddit community"
          href={siteConfig.links.reddit}
        >
          <RedditIcon className="text-default-500" />
        </Link>{" "}
        {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={item.isExternal ? "danger" : "foreground"}
                href={item.href}
                showAnchorIcon={item.isExternal}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
