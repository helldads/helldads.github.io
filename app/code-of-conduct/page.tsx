import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Code } from "@heroui/code";
import { Divider } from "@heroui/divider";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { DiscordIcon, LinkIcon, RedditIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Code of Conduct",
  alternates: {
    canonical: "/code-of-conduct",
  },
};

import backgroundImage from "../../public/assets/helldads-embrace-science.webp";
import HeroHeader from "@/components/heroHeader";

export default function CodeOfConductPage() {
  return (
    <div>
      <HeroHeader
        title="Code of Conduct"
        backgroundImage={{ src: backgroundImage.src }}
      />
      
      {/* Page Content */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <p className="my-6">
          The HellDads community exists to bring together parenting Helldivers,
          like‑minded gamers, and supportive allies. Whether on Reddit, Discord,
          or in‑game, we follow a single Code of Conduct. Our moderators are
          committed to keeping HellDads a welcoming, family-friendly community for
          everyone. Whether you need assistance with a conflict, have concerns
          about behavior, or just need some guidance, don’t hesitate to reach out,
          your experience and comfort matter to us.
        </p>

        <div className="drop-shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-6xl mx-auto">
          <Card className="w-full col-span-1 sm:col-span-1">
            <CardHeader className="font-semibold">
              <RedditIcon className="inline mr-2" /> Help on Reddit
            </CardHeader>
            <CardBody className="leading-relaxed">
              You can use the following button to open Reddit and write a Mod
              Mail:
              <Button
                isExternal
                showAnchorIcon
                as={Link}
                className="my-6"
                color="danger"
                href="https://www.reddit.com/message/compose?to=r/HellDads"
              >
                Message Mods
              </Button>
            </CardBody>
          </Card>
          <Card className="w-full col-span-1 sm:col-span-1">
            <CardHeader className="font-semibold text-center">
              <DiscordIcon className="inline mr-2" /> Help on Discord
            </CardHeader>
            <CardBody className="leading-relaxed">
              You can use the following command to start a private chat with the
              moderators on
              <Link isExternal showAnchorIcon href={siteConfig.links.discord}>
                Discord
              </Link>
              <Code className="inline my-4">/modhelp</Code>
            </CardBody>
          </Card>
        </div>

        <Divider className="mt-12" />

        <h2
          className="text-2xl font-semibold mt-12"
          id="1-uphold-good-parenthood-values"
        >
          1. Uphold Good Parenthood Values
          <Link
            aria-hidden
            className="ml-1.5"
            href="#1-uphold-good-parenthood-values"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Keep things family‑friendly, constructive, and civil. We are a global
          community with members from different countries, cultures, and time
          zones, so be mindful and respectful of diverse perspectives and
          communication styles. No harassment, insults, racism, trolling, or
          inappropriate language.
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="2-real-life-comes-first">
          2. Real Life Comes First
          <Link aria-hidden className="ml-1.5" href="#2-real-life-comes-first">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          You should never feel guilty for prioritising your family or other
          things which require your immediate attention. Step away mid‑game, skip
          events, or go AFK when needed. Real life always comes first &ndash; no
          apologies required!
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="3-were-a-community-not-a-clan"
        >
          3. We&apos;re a Community, Not a Clan
          <Link
            aria-hidden
            className="ml-1.5"
            href="#3-were-a-community-not-a-clan"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          We are not a competitive clan, and everybody &ndash; including
          non‑parents &ndash; are welcome. We’re a supportive space that makes it
          easier to dive with like‑minded people, share experiences, and enjoy the
          game together without pressure to meet activity quotas. Get some rest
          and enjoy a hot cup of Liber-Tea!
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="4-protect-privacy">
          4. Protect Privacy &ndash; Especially Children’s
          <Link aria-hidden className="ml-1.5" href="#4-protect-privacy">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          As Super Earth citizen, we lead by example. Do not post personal
          details, addresses, or any media of children without blurring their
          faces. Be mindful of protecting those who cannot protect themselves. Do
          not share personal information.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="5-respect-other-communities"
        >
          5. Respect Other Communities
          <Link
            aria-hidden
            className="ml-1.5"
            href="#5-respect-other-communities"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          We are a bit like Switzerland when it comes to other Helldivers
          communities and clans. As members of the Freedom Alliance, we follow
          their etiquette, do not bad‑mouth other groups, and stay out of drama.
          Many of our members participate in multiple groups, so consider HellDads
          a neutral, safe haven for all.
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="6-use-discord">
          6. Use Discord to Find Dive Partners
          <Link aria-hidden className="ml-1.5" href="#6-use-discord">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Use our{" "}
          <Link
            isExternal
            showAnchorIcon
            href="https://discord.com/channels/1301285072896266252/1301290839661875202"
          >
            #looking‑for‑group
          </Link>{" "}
          channel to find a squad of up to four Helldivers, or join one of the
          many voice channels to meet and play with others.
        </p>
        <p className="my-6">
          <DiscordIcon className="inline" /> Discord is supported cross-platform
          on PC, PlayStation 5 and Xbox Series X|S:
        </p>
        <ul className="list-disc list-outside my-6 pl-6">
          <li className="mb-2">
            <strong>PC:</strong> You can simply install{" "}
            <Link isExternal showAnchorIcon href={siteConfig.links.discord}>
              Discord
            </Link>{" "}
            on your PC or join via browser.
          </li>
          <li className="mb-2">
            <strong>PS5: </strong>
            <Link
              isExternal
              showAnchorIcon
              className="truncate"
              href="https://www.playstation.com/en-us/support/games/discord-voice-chat/"
            >
              https://www.playstation.com/../discord-voice-chat/
            </Link>
          </li>
          <li className="mb-2">
            <strong>Xbox: </strong>
            <Link
              isExternal
              showAnchorIcon
              className="truncate"
              href="https://support.xbox.com/en-US/help/friends-social-activity/parties-chat/using-discord-with-xbox"
            >
              https://support.xbox.com/../using-discord-with-xbox
            </Link>
          </li>
        </ul>
        <p className="my-6">
          If you don’t use Discord, you can also post on Reddit to find dive
          partners, but keep in mind that Reddit is a public space, and your
          player name may end up being indexed by Google or other search engines.
          Discord is the recommended option, which also has a better audio quality
          than the in game voice communication.
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="7-keep-content-relevant">
          7. Keep Content Relevant
          <Link aria-hidden className="ml-1.5" href="#7-keep-content-relevant">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Our community is about Helldivers and the life of gaming grown-ups. To
          keep things clear and welcoming, please follow these guidelines:
        </p>
        <ul className="list-disc list-outside my-6 pl-6">
          <li className="mb-2">
            <strong>Stay on topic:</strong> Posts and comments should relate to
            Helldivers or gaming as parents. Humour, parenting struggles, and
            mission stories are all welcome. Off-topic content may be removed.
          </li>
          <li className="mb-2">
            <strong>Avoid divisive real-world topics:</strong> Please do not post
            about politics, religion, sports, or other non-gaming subjects that
            risk creating conflict. Our focus is on Helldivers 2 and maintaining
            the immersion of a supportive, family-driven community as the Parental
            Corps of Super Earth.
          </li>
          <li className="mb-2">
            <strong>No spoilers:</strong> Posting upcoming content mined or
            extracted from the game is not permitted. Many members prefer to
            discover new content when it is officially released.
          </li>
          <li className="mb-2">
            <strong>Cross-posting and links:</strong> Sharing content or links to
            other servers is fine if it is relevant and adds value to the
            community.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12" id="8-no-self-promotion">
          8. No Self-Promotion or Recruitment
          <Link aria-hidden className="ml-1.5" href="#8-no-self-promotion">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Members may share their own creations only if there is no profit
          intention and they actively participate in the community beyond growing
          their followers. Links, posts, or invitations with the purpose of
          recruiting members (such as other Discord servers, subreddits, or gaming
          groups) are not permitted without prior approval.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="9-no-sales-funcraising-donations-soliciting-money"
        >
          9. No Sales, Fundraising, Donations or Soliciting Money
          <Link
            aria-hidden
            className="ml-1.5"
            href="#9-no-sales-funcraising-donations-soliciting-money"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Commercial promotions, affiliate links, sales of merchandise,
          fundraising, donations or begging for money are strictly prohibited. Any
          exceptions, including sales of branded items, require prior written
          approval from the moderators.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="10-no-spam-or-low-effort-content"
        >
          10. No Spam or Low-Effort Content
          <Link
            aria-hidden
            className="ml-1.5"
            href="#10-no-spam-or-low-effort-content"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Posts designed for spam, karma farming, click-bait, rage-bait, or other
          low-effort engagement are not permitted. All contributions should add
          meaningful value to the community. AI-generated content, or content with
          AI-assisted elements, must be clearly marked as such. Low-effort AI
          content (AI slop) without artistic value creation, curation, or creative
          intent is not welcome.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="11-no-nsfw-content-language"
        >
          11. No NSFW Content / Language
          <Link
            aria-hidden
            className="ml-1.5"
            href="#11-no-nsfw-content-language"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          This is a family-friendly community. While you may use NSFW (Not Safe
          For Work) tags for posts with graphic gameplay or loud laughter moments,
          we do not allow pornography, profanity, nudity, slurs, or other
          disturbing material. This content will be removed at moderator
          discretion. This also applies for voice-channels, recordings and videos,
          keep it civil.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="12-give-credit-where-its-due"
        >
          12. Give Credit Where It&apos;s Due & Avoid Copyright Violations
          <Link
            aria-hidden
            className="ml-1.5"
            href="#12-give-credit-where-its-due"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Always credit the original creator with a source link. Any content that
          violates international copyright laws will be deleted, this is
          especially important for videos containing music or other copyrighted
          material. Posts that steal and reupload content without permission of
          the copyright holder will be removed. No content theft, piracy, or
          unlicensed use of copyrighted material is tolerated and we have to
          enforce the Terms of Service of related services. Any violations must be
          reported.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="13-honor-the-afk-mission-etiquette"
        >
          13. Honor the AFK Mission Etiquette
          <Link
            aria-hidden
            className="ml-1.5"
            href="#13-honor-the-afk-mission-etiquette"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          During drop time, life calls! To keep our missions flowing, HellDads
          agree to:
        </p>
        <ul className="list-disc list-outside my-6 pl-6">
          <li className="mb-2">
            <strong>Drop mission-critical resources (like samples)</strong> before
            stepping away, ensuring the squad can proceed.
          </li>
          <li className="mb-2">
            <strong>Announce your AFK</strong> (Away from Keyboard or Controller)
            via in game chat or voice communication if possible.
          </li>
          <li className="mb-2">
            <strong>Allow a Kick if Needed</strong> if your squad needs to
            extract, can’t reinforce anymore because you’re the last survivor, or
            starts a new mission while you’re AFK, we agree to being kicked and
            rejoining later, so that the mission/operation can proceed.
          </li>
          <li className="mb-2">
            <strong>
              As host, change your matchmaking mode to friends or invite only,
            </strong>{" "}
            enabling easy rejoining for your squad, so that no strangers join the
            game in the meanwhile if someone drops. (PlayStation users usually
            disconnect after 10 min automatically due to inactivity!)
          </li>
          <li className="mb-2">
            <strong>Try to hide while being AFK</strong> being prone in bushes or
            other corners where it’s unlikely to be killed.
          </li>
          <li className="mb-2">
            <strong>Protect your AFK squad members</strong> especially when their
            motionless body is at risk, of course only if the situation allows it.
          </li>
          <li className="mb-2">
            <strong>Be mindful about your reinforcement budget,</strong> which is
            limited, try to wait for their return or if you have to reinforce,
            throw the beacon far away from the heat of the battle to increase
            their chance of survival.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12" id="14-conflict-resolution">
          14. Conflict Resolution and Mod Support
          <Link aria-hidden className="ml-1.5" href="#14-conflict-resolution">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          In the HellDads community, respect and support come first. We’re all
          balancing the challenges of gaming and family life, so if a disagreement
          arises, we encourage open and respectful conversation to clear things up
          directly whenever possible. Should a conflict remain unresolved, or if
          you feel uncomfortable addressing it, the moderators are here to help.
          Simply reach out to us through{" "}
          <Code className="inline my-4">/modhelp</Code> on discord, and we’ll work
          with you to find a fair solution.
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="15-becoming-a-volunteer">
          15. Becoming a Volunteer
          <Link aria-hidden className="ml-1.5" href="#15-becoming-a-volunteer">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Our HellDads contributors are all dedicated volunteers, managing their
          roles while balancing full-time jobs, family responsibilities, and the
          demands of daily life. We’re always grateful for any help from community
          members to keep HellDads the most family-friendly space for Helldivers.
          Whether you’re a Reddit whiz, a Discord pro, a content creator or simply
          have great ideas to share, your contribution is welcome!
        </p>
        <p className="my-6">
          If you’d like to apply for a voluntary role or contribute in any other
          way, please reach out via discord to our mods team (enter{" "}
          <Code className="inline my-4">/modhelp</Code> in Discord). Every bit of
          support helps us build and maintain this community we’re all proud of,
          and we’d love to hear from you!
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="16-scope-of-the-code-of-conduct"
        >
          16. Scope of the Code of Conduct
          <Link
            aria-hidden
            className="ml-1.5"
            href="#16-scope-of-the-code-of-conduct"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          These rules apply across all HellDads platforms, including Reddit,
          Discord, Voice Chats, YouTube, TikTok, In-Game and any other official
          channels. They also apply whenever members represent the HellDads
          community outside our platforms. By participating, you agree to uphold
          this Code of Conduct in all community-related spaces.
        </p>

        <h2
          className="text-2xl font-semibold mt-12"
          id="17-report-suspicious-accounts"
        >
          17. Report Suspicious Accounts or Cheating Behaviour
          <Link
            aria-hidden
            className="ml-1.5"
            href="#17-report-suspicious-accounts"
          >
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Report suspicious accounts, hacked users, cheaters, or spam bots to the
          moderators using the <Code className="inline my-4">/modhelp</Code>{" "}
          command in Discord. Such users and their content will be removed to
          protect the community.
        </p>
        <p className="my-6">
          Strictly cosmetic modifications for Helldivers are not forbidden. Any
          non-cosmetic modifications intended to gain undemocratic advantages
          &ndash; also known as cheats &ndash; will result in a ban and be
          reported to Arrowhead.
        </p>

        <h2 className="text-2xl font-semibold mt-12" id="18-consequences">
          18. Consequences
          <Link aria-hidden className="ml-1.5" href="#18-consequences">
            <LinkIcon className="" />
          </Link>
        </h2>
        <p className="my-6">
          Abide by Reddit, Discord, and game Terms of Service at all times.
          Violations of these rules or the Code of Conduct may result in timeouts,
          bans, or reporting to platform administrators. Super Earth High Command
          will not tolerate behaviour that risks termination of our community or
          servers.
        </p>
        <Divider className="mt-12" />
        <p className="my-12 italic text-center">
          We are here to support each other in balancing gaming and family life.
          Ask questions, share experiences, and remember: when we drop, we drop
          hard.
        </p>
      </div>
    </div>
  );
}
