import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";

import backgroundImage from "../../public/assets/helldads-embrace-science.webp";

import { siteConfig } from "@/config/site";
import HeroHeader from "@/components/heroHeader";
import {
  DiscordIcon,
  PhotoIcon,
  RedditIcon,
  TextDocumentIcon,
  TikTokIcon,
  VideoIcon,
  YoutubeIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About HellDads",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div>
      <HeroHeader
        backgroundImage={{ src: backgroundImage.src }}
        title={String(metadata.title ?? "")}
      />

      <div className="max-w-5xl mx-auto mt-12 px-6">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center justify-center">
          <div className="flex flex-col col-span-12 lg:col-span-8">
            <p className="leading-relaxed mt-4 text-xl">
              HellDads is a global, family‑friendly community where gaming and
              family life unite. We welcome all kinds of parents, relatives, and
              like‑minded Helldivers who juggle real‑life responsibilities with
              the thrill of serving Super Earth whenever time allows. No one
              here needs to apologise for stepping away to make a bottle, change
              a diaper, or taking care of their beloved ones &ndash; because
              here at the Parental Corps, family always comes first.
            </p>
            <h2 className="leading-relaxed mt-4 helldads-title">
              Does this sound like you?
            </h2>
            <ul className="list-[square] pl-5 mb-6">
              <li>You only get fourty minutes of drop time a month.</li>
              <li>
                You just play with one half of the headset over your ears.
              </li>
              <li>You go AFK to make a bottle or put the kids back to bed.</li>
              <li>You whisper on the mic.</li>
              <li>You play between the hours of 8 pm and 11 pm.</li>
              <li>
                You can never seem to be on the same schedule as fellow
                Helldivers.
              </li>
              <li>
                <strong>
                  But when you drop… you drop hard. Those fourty minutes are
                  pure democracy!
                </strong>
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              If you nodded along, then you’re probably one of us.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <Card
              isBlurred
              className="border-none bg-background/60 dark:bg-default-100/50"
              shadow="sm"
            >
              <CardBody>
                <div className="grid gap-6 lg:gap-0 sm:grid-cols-3 lg:grid-cols-1 items-center">
                  <div className="flex justify-center">
                    <Image
                      alt="HellDads community logo"
                      className="mx-auto w-72"
                      src="/assets/helldads-logo-textured.webp"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <h2 className="mb-4 helldads-title text-left">
                      Our Mission
                    </h2>
                    <p className="text-2xl font-thin">
                      Raising the next generation of Helldivers and building the
                      most supportive family‑driven community of Super Earth.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

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
          by{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/Dispenser-of-Liberty/"
          >
            u/Dispenser-of-Liberty
          </Link>{" "}
          on <time dateTime="2024-10-29">October 29, 2024</time>, in the
          Helldivers 2 Subreddit. Sharing the challenges of gaming while
          parenting, he struck a chord with fellow Helldivers. The response was
          overwhelming, sparking the creation of a dedicated space for parents
          in the Helldivers community.
        </p>
        <p className="leading-relaxed mt-4">
          When{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/r-volk/"
          >
            u/r-volk
          </Link>{" "}
          offered to help establish a subreddit, the{" "}
          <Link isExternal showAnchorIcon href={siteConfig.links.reddit}>
            HellDads
          </Link>{" "}
          were officially born. What started with a handful of members quickly
          grew to include parents, grandparents, aunts and uncles, and
          supportive allies from around the world. Early moderators like{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/Asherjade/"
          >
            u/Asherjade
          </Link>{" "}
          and
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/Potential_Chicken_58/"
          >
            u/Potential_Chicken_58
          </Link>{" "}
          joined from related subreddits, helping steer the community in the
          early days. With the help of{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/Nemesis-0529/"
          >
            u/Nemesis-0529
          </Link>
          , our Discord server soon followed, providing real‑time communication
          for in‑game coordination and casual conversation. Nowadays, we have
          many more volunteers who stepped up for leading our sub-factions or
          taking care of other tasks, helping to foster our community.
        </p>
        <h2 className="text-2xl font-semibold mt-12">
          A Community Built on Family Values
        </h2>
        <p className="leading-relaxed mt-4">
          Our <Link href="/code-of-conduct">Code of Conduct</Link> ensures that
          all members can do their part without guilt or judgement when family
          duties come first. This has created a supportive, inclusive space
          where everyone is welcome.
        </p>

        <Image
          isBlurred
          alt="HellDads are celebrating 1000 members after only six weeks!"
          className="mt-12 leading-relaxed"
          src="/assets/helldads-1000-members.webp"
        />

        <h3 className="text-1xl font-extrabold mt-12 mb-6">
          Milestones We Achieved Together In The First 6 Weeks:
        </h3>

        <ul className="space-y-4 mt-4">
          <li className="flex gap-4">
            <RedditIcon />
            <div className="text-left">
              <strong>Surpassing 1,000 members</strong> on Reddit.
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
              <strong>The Dadtionary</strong> a living glossary for our
              community which later became the{" "}
              <Link href="/essentials">Essentials</Link> Guide.
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

        <p className="leading-relaxed mt-4">
          Shortly after we joined the Freedom Alliance, the Illuminate fleet
          launched a surprise attack on Super Earth in December. In the face of
          that threat, more Helldivers joined our ranks and new contributors
          brought fresh energy, creativity, and organisation to the Parental
          Corps.
        </p>

        <h2 className="text-2xl font-semibold mt-12">
          Founding of Official Divisions
        </h2>
        <p className="leading-relaxed mt-4">
          To help our members represent their favourite ways of playing
          Helldivers, we founded our first four divisions end of{" "}
          <time dateTime="2025-02">February&apos;25</time>:
        </p>
        <ul className="space-y-4 mt-4">
          <li className="flex gap-4">
            <Image
              className="inline"
              height="24"
              src="/assets/helldads-logo-diaper-division.svg"
              width="24"
            />
            <div className="text-left">
              <strong>44th S.H.T.</strong> &ndash;{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://discord.com/channels/1301285072896266252/1345040640949489674/1345091078411518025"
              >
                “Diaper Division”
              </Link>
            </div>
          </li>
          <li className="flex gap-4">
            <Image
              className="inline"
              height="24"
              src="/assets/helldads-logo-baldzerkers.svg"
              width="24"
            />
            <div className="text-left">
              <strong>101st B.A.L.D.</strong> &ndash;{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://discord.com/channels/1301285072896266252/1345040640949489674/1345091078411518025"
              >
                “Baldzerkers”
              </Link>
            </div>
          </li>
          <li className="flex gap-4">
            <Image
              className="inline"
              height="24"
              src="/assets/helldads-logo-science-team.svg"
              width="24"
            />
            <div className="text-left">
              <strong>HellDads R&amp;D</strong> &ndash;{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://discord.com/channels/1301285072896266252/1345040640949489674/1345091078411518025"
              >
                “Science Team”
              </Link>
            </div>
          </li>
          <li className="flex gap-4">
            <Image
              className="inline"
              height="24"
              src="/assets/helldads-logo-crayon-commandos.svg"
              width="24"
            />
            <div className="text-left">
              <strong>31st R.E.A.P.</strong> &ndash;{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://discord.com/channels/1301285072896266252/1345040640949489674/1345091078411518025"
              >
                “Crayon Commandos”
              </Link>{" "}
            </div>
          </li>
          <li className="flex gap-4">
            <Image
              className="inline"
              height="24"
              src="/assets/helldads-logo-snack.svg"
              width="24"
            />
            <div className="text-left">
              <strong>103rd L.D.D.</strong> &ndash;{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://discord.com/channels/1301285072896266252/1345040640949489674/1345091078411518025"
              >
                “S.N.A.C.K. Division” (Est.{" "}
                <time dateTime="2025-07">July&apos;25</time>)
              </Link>
            </div>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12">Our Video Channels</h2>
        <p className="leading-relaxed mt-4">
          With more people united, Reddit and Discord filled with awesome clips
          and highlights. That momentum created the demand for a dedicated
          YouTube and Tiktok channels to showcase community moments — from
          battlefield diaries and shorts to community submissions and Freedom
          Alliance events. These channels have been steadily growing ever since.
        </p>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl shadow-md"
          src="/assets/helldads-one-true-flag-planting.mp4"
          title="HellDads planting a flag and doing the chest bumb emote."
        />

        <div className="flex gap-2 items-center mt-4">
          <Button
            isExternal
            as={Link}
            className="text-large bg-[#CD201F] text-white border-neutral-50"
            href={siteConfig.links.youtube}
            radius="md"
            size="lg"
            variant="bordered"
          >
            <YoutubeIcon /> YouTube
          </Button>
          <Button
            isExternal
            as={Link}
            className="text-large bg-black text-white border-neutral-50"
            href={siteConfig.links.tiktok}
            radius="md"
            size="lg"
            variant="bordered"
          >
            <TikTokIcon /> TikTok
          </Button>
        </div>

        <h2 className="text-2xl font-semibold mt-12">Community Events</h2>
        <p className="leading-relaxed my-4">
          Our first community event,{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/r/HellDads/comments/1j7etfj/helldads_operation_iron_veil_march_1417th/"
          >
            Operation Iron Veil
          </Link>
          , was a huge success. It included a dedicated teaser and an aftermath
          video, and it even caught the attention of some{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://n4g.com/articles/helldivers-2-we-are-born-for-war-helldads-present-operation-iron-veil-their-first-community-event/"
          >
            gaming news blogs
          </Link>
          , bringing more visibility and growth to our humble community.
        </p>

        <div className="relative aspect-video">
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/raB7vjOirtM?modestbranding=1&showinfo=0&rel=0&controls=1&disablekb=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1&color=white&theme=dark"
            title="OPERATION: IRON VEIL"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-12">Helldivers 2 Builds</h2>
        <p className="leading-relaxed mt-4">
          The most visible content outside our community took off when{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/SES-SpearofDemocracy/"
          >
            u/SES-SpearofDemocracy &quot;Quifoo&quot;
          </Link>
          joined the video team and began publishing{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.youtube.com/playlist?list=PLKnnPdtXz2FHPsjVy3r2N4p0KynMc72oE"
          >
            Helldivers 2 Builds
          </Link>
          . What started as an experiment &quot;one build per day for 30
          days&quot; quickly became a reliable foundation for further growth.
          Today we have over <strong>50+</strong> builds covering a wide range
          of loadouts and playstyles for every kind of Helldiver.
        </p>
        <Button
          as={Link}
          className="text-large mt-4"
          color="primary"
          href="/builds"
          radius="md"
          size="lg"
        >
          <TextDocumentIcon /> Open Builds
        </Button>

        <h2 className="text-2xl font-semibold mt-12">Our Website</h2>

        <p className="leading-relaxed mt-4">
          In <time dateTime="2025-02">February 2025</time>, the HellDads website
          was created as a gift to the community by{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/r-volk/"
          >
            u/r-volk
          </Link>
          , launching in parallel with our YouTube channel. It became our home
          base, creating visibility for the community and bridging the gap
          between Reddit, Discord, and YouTube.
        </p>

        <p className="leading-relaxed mt-4">
          In <time dateTime="2025-08">August 2025</time>,{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://www.reddit.com/user/Winged_Strainer/"
          >
            u/Winged_Strainer
          </Link>{" "}
          joined the web development team. With joint forces we expanded the
          site even further: we released the{" "}
          <Link href="/essentials">Essentials</Link> guide packed with helpful
          tips and tricks as part of our{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://discord.com/channels/1301285072896266252/1409613376090538099"
          >
            HellDads Academy
          </Link>{" "}
          programme, and we launched the <Link href="/builds">Builds</Link> page
          to showcase the many beautiful loadouts that <strong>Quifoo</strong>{" "}
          and the wider community have crafted over time.
        </p>

        <Image
          isBlurred
          alt="HellDads are celebrating 1000 members after only six weeks!"
          className="mt-12 leading-relaxed"
          src="/assets/helldads-anniversary-2025.webp"
        />

        <h2 className="text-2xl font-semibold mt-12">
          One Year of Freedom, Family, and Friendship
        </h2>
        <p className="leading-relaxed mt-4">
          The 29th October 2025 marked our first anniversary, and we want to
          take a moment to thank every member of this community. When the
          HellDads were founded in 2024, we started as a small group of
          overtired parents looking for a place to share our love for Helldivers
          and our struggles with the daily realities of family life. Since then,
          we have grown into one of the largest and most supportive
          family‑driven communities in the Freedom Alliance, reaching over
          11,111 members on Reddit and nearly 2,222 members on Discord.
        </p>
        <h2 className="leading-relaxed mt-4 helldads-title pb-2">
          To celebrate our anniversary, we introduced two new highlights:
        </h2>
        <ol className="space-y-2 list-decimal list-inside">
          <li>
            <strong>Official HellDads Merch</strong>: In collaboration with our
            original HellDad Chechin, the Creative Director of the Freedom
            Alliance, we prepared an exclusive pre-launch access to his upcoming{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://www.themostwantedmerch.com/helldads/"
            >
              Most Wanted Merch Store
            </Link>
            . You can now order official HellDads T-Shirts to show your support
            while spreading Managed Democracy in the real world. We receive no
            financial benefit from these sales but are proud to give back to
            someone who has contributed so much to the community.
          </li>
          <li>
            <strong>HellDads Spotify Channel</strong>: We launched music
            playlists on{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://open.spotify.com/user/31dfjdrxpeqnesgngqqfpgqttevm"
            >
              HellDads Spotify
            </Link>
            , moderated via the{" "}
            <Link
              isExternal
              showAnchorIcon
              href="https://discord.com/channels/1301285072896266252/1424668772664479764"
            >
              #📻-libertea-radio
            </Link>{" "}
            channel on Discord. Everyone is welcome to share their favourite
            songs to help build the ultimate playlist for diving and parenting.
          </li>
        </ol>

        <p className="leading-relaxed mt-4">
          Behind all these achievements are the people who make this community
          special. From those who simply enjoy a few missions with friends to
          those who create and share content to help others, your contributions
          make the HellDads experience what it is.
        </p>
        <p className="leading-relaxed mt-4">
          On behalf of all moderators, commanders, and founding members:{" "}
          <strong>THANK YOU</strong> for being part of this journey. We are
          proud to stand beside you and deeply grateful for the kindness,
          humour, and dedication that keep this community thriving.
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
        <p className="leading-relaxed italic text-center mt-6">
          From a handful of parents to a 10k+ community with engaging events,
          helpful content and amazing people. Thank You All!
        </p>
        <Divider className="my-12" />
      </div>
    </div>
  );
}
