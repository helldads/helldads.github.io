import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {
  DiscordIcon,
  PhotoIcon,
  RedditIcon,
  VideoIcon,
  TextDocumentIcon,
} from "@/components/icons";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About the HellDads</h1>
      <p className="leading-relaxed mt-4">
        HellDads is a global, family‑friendly community where gaming and family
        life unite. We welcome all kinds of parents, relatives, and like‑minded
        Helldivers who juggle real‑life responsibilities with the thrill of
        serving Super Earth whenever time allows. No one here needs to apologise
        for stepping away to make a bottle, change a diaper, or taking care of
        their beloved ones &ndash; because here at the Parental Corps, family
        always comes first.
      </p>
      <Card className="mt-6">
        <CardBody className="leading-relaxed text-center">
          <h2 className="font-semibold">Our Mission</h2>
          Raising the next generation of Helldivers and building<br></br>the
          most supportive family‑driven community of Super Earth.
        </CardBody>
      </Card>
      <p className="leading-relaxed mt-2 font-medium text-center "></p>
      <Image
        isBlurred
        alt="HellDads saluting the community logo"
        className="my-12 leading-relaxed"
        height="414"
        src="/assets/helldads-salute-logo.webp"
        width="736"
      />
      <p className="leading-relaxed mt-4">
        <strong>Does this sound like you?</strong>
        <ul className="list-[square] pl-5 mb-6">
          <li>You only get fourty minutes of drop time a month.</li>
          <li>You play with one half of the headset over your ears.</li>
          <li>You go AFK to make a bottle or put the kids back to bed.</li>
          <li>You whisper on the mic.</li>
          <li>You play between the hours of 8 pm and 11 pm.</li>
          <li>
            You can never seem to be on the same schedule as fellow Helldivers.
          </li>
          <li>
            <strong>
              But when you drop… you drop hard. Those fourty minutes are pure
              democracy!
            </strong>
          </li>
        </ul>
        If you nodded along, then you’re probably one of us.
      </p>
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
        Subreddit. Sharing the challenges of gaming while parenting, he struck a
        chord with fellow Helldivers. The response was overwhelming, sparking
        the creation of a dedicated space for parents in the Helldivers
        community.
      </p>
      <p className="leading-relaxed mt-4">
        When u/r-volk offered to help establish a subreddit, the{" "}
        <Link isExternal showAnchorIcon href={siteConfig.links.reddit}>
          HellDads
        </Link>{" "}
        were officially born. What started with a handful of members quickly
        grew to include parents, grandparents, aunts and uncles, and supportive
        allies from around the world. Early moderators like u/Asherjade and
        u/Potential_Chicken_58 joined from related subreddits, helping steer the
        community in the early days. With the help of u/Nemesis-0529, our
        Discord server soon followed, providing real‑time communication for
        in‑game coordination and casual conversation. Nowadays, we have many
        more volunteers who stepped up for leading our sub-factions or taking
        care of other tasks, helping to foster our community.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        A Community Built on Family Values
      </h2>
      <p className="leading-relaxed mt-4">
        Our <Link href="/code-of-conduct">Code of Conduct</Link> ensures that
        all members can do their part without guilt or judgement when family
        duties come first. This has created a supportive, inclusive space where
        everyone is welcome.
      </p>

      <Image
        isBlurred
        alt="HellDads are celebrating 1000 members after only six weeks!"
        className="mt-12 leading-relaxed"
        height="414"
        src="/assets/helldads-1000-members.webp"
        width="736"
      />

      <h3 className="text-1xl font-extrabold mt-12 mb-6">
        Milestones We Achieved Together:
      </h3>

      <ul className="space-y-4 mt-4">
        <li className="flex gap-4">
          <RedditIcon />
          <div className="text-left">
            <strong>Surpassing 1,000 members</strong> in just six weeks.
          </div>
        </li>
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
            </strong>{" "}
            a living glossary for our community.
          </div>
        </li>
        <li className="flex gap-4">
          <DiscordIcon />
          <div className="text-left">
            <strong>
              Establishing our vibrant{" "}
              <Link isExternal showAnchorIcon href={siteConfig.links.discord}>
                Discord server
              </Link>
            </strong>{" "}
            for voice chat and realtime communication.
          </div>
        </li>
        <li className="flex gap-4">
          <VideoIcon />
          <div className="text-left">
            <strong>Earning recognition</strong> from{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://www.reddit.com/r/HellDads/comments/1h11xh3/hello_helldads_hellmoms_i_cover_the_war_like_an/"
            >
              Frontline News
            </Link>{" "}
            and a special feature from{" "}
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

      <h2 className="text-2xl font-semibold mt-12">
        Joining the Freedom Alliance
      </h2>
      <p className="leading-relaxed mt-4">
        Joining the{" "}
        <Link isExternal showAnchorIcon href="https://www.freedomalliance.gg">
          Freedom Alliance
        </Link>{" "}
        marked a major milestone. As the Parental Corps of Super Earth, we
        started collaborating with other factions to protect freedom and
        democracy. We participate in joint operations, complete community
        orders, and contribute to the broader Helldivers 2 events.
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
