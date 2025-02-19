import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
  DiscordIcon,
  PhotoIcon,
  VideoIcon,
  TextDocumentIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <p className="leading-relaxed mt-4">
        HellDads is an open, family-friendly community where gaming and family
        life intersect. We unite those balancing the demands of being a parent
        with the thrill of being a Helldiver. Whether it’s wearing only one half
        of the headset over our ears, whispering into the mic, going AFK for a
        quick bottle-making session, or stepping away for diaper duty, we got
        you covered! HellDads is a space where no one needs to apologise for
        prioritising their family needs. Together, we are committed to raising
        the next generation of Helldivers—stronger, smarter, and ready to
        protect what we love.
      </p>
      <Image
        isBlurred
        alt="HellDads saluting the community logo"
        className="mt-12 leading-relaxed"
        height="414"
        src="/assets/helldads-salute-logo.webp"
        width="736"
      />

      <h2 className="text-2xl font-semibold mt-12">
        History of Our Founding and Early Days
      </h2>
      <p className="leading-relaxed mt-4">
        The HellDads community began with a simple{" "}
        <Link
          isExternal
          showAnchorIcon
          href="https://www.reddit.com/r/helldivers2/comments/1geo2k3/dad_divers_the_struggle/"
        >
          post
        </Link>{" "}
        by u/Dispenser-of-Liberty on October 29, 2024, in the Helldivers 2
        Subreddit. Struggling to game as a father, he shared his experience of
        combining gameplay with parenting duties. The community response was
        overwhelmingly positive, and the idea to create a dedicated space for
        parents in the Helldivers community quickly took root. When u/r-volk
        offered to help create a sub, u/Dispenser-of-Liberty made it a reality,
        and the HellDads were born.
      </p>
      <p className="leading-relaxed mt-4">
        What started with a handful of parenting Helldivers rapidly expanded,
        attracting passionate members from all walks of life—fathers, mothers,
        grandparents, and like minded caretakers. Early moderators like
        u/Asherjade and u/Potential_Chicken_58 joined from related subreddits,
        helping steer the community towards its growth. The need for a dedicated
        space for these parents extended beyond Reddit, and so, with the help of
        u/Nemesis-0529, our Discord server was established.
      </p>
      <Divider className="my-4" />
      <h2 className="text-2xl font-semibold mt-12">
        A Community Built on Family Values
      </h2>
      <p className="leading-relaxed mt-4">
        Our community was built on the understanding that being a parent comes
        with unique needs. Our Code of Conduct reflects this, ensuring that no
        one ever needs to apologise for caring for their family. This has
        cultivated a supportive, inclusive environment where everyone is
        welcome.
      </p>
      <h3 className="text-1xl font-semibold mt-12">
        Milestones we achieved together
      </h3>

      <p className="leading-relaxed mt-4">
        In just six weeks, the HellDads grew to over 1,000 active members. We’ve
        achieved so much in this short time:
      </p>
      <ul className="space-y-4 mt-4">
        <li className="flex gap-4">
          <PhotoIcon />
          <div className="text-left">
            <strong>A community logo</strong> designed by{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://www.reddit.com/user/djchechin/"
            >
              u/djchechin
            </Link>
            , symbolising our shared experiences and struggles.
          </div>
        </li>
        <li className="flex gap-4">
          <TextDocumentIcon />
          <div className="text-left">
            <strong>
              <Link href="/dadtionary">The Dadtionary</Link>
            </strong>
            —a glossary created by and for our community members.
          </div>
        </li>
        <li className="flex gap-4">
          <DiscordIcon />
          <div className="text-left">
            <strong>
              Our vibrant{" "}
              <Link isExternal showAnchorIcon href={siteConfig.links.discord}>
                Discord server
              </Link>
            </strong>
            , where real-time connection and in-game communication thrive.
          </div>
        </li>
        <li className="flex gap-4">
          <VideoIcon />
          <div className="text-left">
            <strong>Recognition</strong> from{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://www.reddit.com/r/HellDads/comments/1h11xh3/hello_helldads_hellmoms_i_cover_the_war_like_an/"
            >
              Frontline News
            </Link>{" "}
            and a special short from{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://www.reddit.com/r/HellDads/comments/1h50i9k/super_earth_salute_features_helldads/"
            >
              Super Earth Salute
            </Link>
            .
          </div>
        </li>
        <li className="flex gap-4">
          <Image
            alt="Freedom Alliance Logo"
            height={24}
            radius="none"
            src="/assets/freedomalliance-logo.webp"
            width={24}
          />
          <div className="text-left">
            <strong>
              Joining the{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://www.freedomalliance.gg"
              >
                Freedom Alliance
              </Link>
            </strong>{" "}
            and completing our first community orders.
          </div>
        </li>
      </ul>
      <Divider className="my-4" />
      <h2 className="text-2xl font-semibold mt-12">
        Joining the Freedom Alliance
      </h2>
      <p className="leading-relaxed mt-4">
        One of the most significant milestones was our participation in the{" "}
        <Link isExternal showAnchorIcon href="https://www.freedomalliance.gg">
          Freedom Alliance
        </Link>
        . This has allowed us to serve as the Parental Corps of Super Earth,
        working alongside other factions to further the goals of the Helldivers
        community. Today, our Reddit and Discord communities are tightly
        integrated with the Freedom Alliance, making contributions and community
        orders an essential part of our mission.
      </p>
      <Divider className="my-12" />
      <div className="flex flex-col items-center text-center justify-center">
        <Image
          isBlurred
          alt="HellDads Logo"
          height={150}
          src={siteConfig.logo}
          width={150}
        />
        <div className="text-lg font-semibold">Patres inferni!</div>
        <div className="italic text-xs">
          (Latin for &quot;Fathers of Hell&quot;)
        </div>
      </div>
    </div>
  );
}
