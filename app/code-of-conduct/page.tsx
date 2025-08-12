import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Code } from "@heroui/code";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { DiscordIcon } from "@/components/icons";

export default function CodeOfConductPage() {
  return (
    <div>
      <h1 className={title()}>Code of Conduct</h1>
      <p className="my-6">
        The HellDads community exists to bring together parenting Helldivers,
        like‑minded gamers, and supportive allies. Whether on Reddit, Discord,
        or in‑game, we follow a single Code of Conduct to keep our spaces safe,
        family‑friendly, and welcoming.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        1. Uphold Good Parenthood Values
      </h2>
      <p className="my-6">
        Keep things family‑friendly, constructive, and civil. We are a global
        community with members from different countries, cultures, and time
        zones, so be mindful and respectful of diverse perspectives and
        communication styles. No harassment, insults, racism, trolling, or
        inappropriate language.
      </p>
      <h2 className="text-2xl font-semibold mt-12">2. Real Life Comes First</h2>
      <p className="my-6">
        You should never feel guilty for prioritising your family or other
        things which require your immediate attention. Step away mid‑game, skip
        events, or go AFK when needed. Communicate when you can, but real life
        always comes first.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        3. We&apos;re a Community, Not a Clan
      </h2>
      <p className="my-6">
        We are not a competitive clan, and everybody — including non‑parents —
        are welcome. We’re a supportive space that makes it easier to dive with
        like‑minded people, share experiences, and enjoy the game together
        without pressure to meet activity quotas.
      </p>

      <h2 className="text-2xl font-semibold mt-12">
        4. Protect Privacy &ndash; Especially Children’s
      </h2>
      <p className="my-6">
        As Super Earth citizen, we lead by example. Do not post personal
        details, addresses, or any media of children without blurring their
        faces. Be mindful of protecting those who cannot protect themselves. Do
        not share personal information.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        5. Respect Other Communities
      </h2>
      <p className="my-6">
        We are a bit like Switzerland when it comes to other Helldivers
        communities and clans. As members of the Freedom Alliance, we follow
        their etiquette, do not bad‑mouth other groups, and stay out of drama.
        Many of our members participate in multiple groups, so consider HellDads
        a neutral, safe haven for all.
      </p>
      <h2 className="text-2xl font-semibold mt-12">6. Keep Content Relevant</h2>
      <p className="my-6">
        Posts and comments should relate to Helldivers or the life of gaming
        grown‑ups. Humour, parenting struggles, mission stories, all is welcome,
        but irrelevant or off‑topic content may be removed. Cross‑posts and
        links to other servers are also fine, if they are relevant and add value
        to our community. We may remove posts that are low effort,
        karma‑farming, or otherwise not meaningful. Do not share personal
        information. Report suspicious accounts, hacked users, or spam bots to
        moderators. We will remove such users and their content.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        7. Use Discord to Find Dive Partners
      </h2>
      <p className="my-6">
        Use our #looking‑for‑group channel and join audio channels with up to
        four members to build squads. If you don’t use Discord, you can also
        post on Reddit to find dive partners, but keep in mind that Reddit is a
        public space, and your player name may end up being indexed by Google or
        other search engines. Discord is the recommended option, which also has
        a better audio quality than the in game voice communication.
      </p>
      <p className="my-6">
        <DiscordIcon className="inline" /> Discord is supported cross-platform
        on PC and PlayStation 5:
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
            href="https://www.playstation.com/en-us/support/games/discord-voice-chat/"
          >
            https://www.playstation.com/en-us/support/games/discord-voice-chat/
          </Link>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-12">
        8. No Self‑Promotion, Unauthorised Sales, or Spam
      </h2>
      <p className="my-6">
        Any commercial or affiliated promotions, including posts with the goal
        of generating income or containing affiliate links, must be reviewed and
        approved by the moderators before being posted. Sales of branded items
        require explicit approval from the copyright owners. As a creator, you
        are welcome to share your own work as long as there is no profit
        intention, as long as you engage with the community beyond promoting
        your own content.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        9. Give Credit Where It&apos;s Due & Avoid Copyright Violations
      </h2>
      <p className="my-6">
        Always credit the original creator with a source link. Any content that
        violates international copyright laws will be deleted, this is
        especially important for videos containing music or other copyrighted
        material. Posts that steal and reupload content without permission will
        be removed. Content created with the help of AI is not prohibitit, as
        long as it is clearly marked as AI‑generated. No content theft, piracy,
        or unlicensed use of copyrighted material is tolerated and we have to
        enforce the Terms of Service of related services. Any violations must be
        reported.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        10.No NSFW Content / Language
      </h2>
      <p className="my-6">
        This is a family-friendly community. While you may use NSFW (Not Safe
        For Work) tags for posts with graphic gameplay or loud laughter moments,
        we do not allow pornography, profanity, nudity, slurs, or other
        disturbing material. This content will be removed at moderator
        discretion. This also applies for voice-channels, keep it civil.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        11. Honor the AFK Mission Etiquette
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
      <h2 className="text-2xl font-semibold mt-12">
        12. Conflict Resolution and Mod Support
      </h2>
      <p className="my-6">
        In the HellDads community, respect and support come first. We’re all
        balancing the challenges of gaming and family life, so if a disagreement
        arises, we encourage open and respectful conversation to clear things up
        directly whenever possible. Should a conflict remain unresolved, or if
        you feel uncomfortable addressing it, the moderators are here to help.
        Simply reach out to us through a private message, and we’ll work with
        you to find a fair solution.
      </p>
      <p className="my-6">
        Our moderators are committed to keeping HellDads a welcoming,
        family-friendly community for everyone. Whether you need assistance with
        a conflict, have concerns about behavior, or just need some guidance,
        don’t hesitate to reach out—your experience and comfort matter to us.
      </p>
      <p className="my-6">
        <Button
          isExternal
          showAnchorIcon
          as={Link}
          color="danger"
          href="https://www.reddit.com/message/compose?to=r/HellDads"
        >
          Message Mods
        </Button>
      </p>
      <Card className="mt-6 max-w-[460px]">
        <CardBody className="leading-relaxed text-center">
          <h2 className="font-semibold">Help in Discord</h2>
          You can also use the following command of our discord Dadbot, to start
          a private chat with the moderators:
          <Code className="inline">/modhelp</Code>
        </CardBody>
      </Card>

      <h2 className="text-2xl font-semibold mt-12">13. Becoming a Volunteer</h2>
      <p className="my-6">
        Our HellDads mods are all dedicated volunteers, managing their roles
        while balancing full-time jobs, family responsibilities, and the demands
        of daily life. We’re always grateful for any help from community members
        to keep HellDads the most family-friendly space for Helldivers. Whether
        you’re a Reddit whiz, a Discord pro, a content creator or simply have
        great ideas to share, your contribution is welcome!
      </p>
      <p className="my-6">
        If you’d like to apply for a voluntary role or contribute in any other
        way, please reach out to one of the mods. Every bit of support helps us
        build and maintain this community we’re all proud of, and we’d love to
        hear from you!
      </p>
      <h2 className="text-2xl font-semibold mt-12">14. Consequences</h2>
      <p className="my-6">
        Abide by Reddit, Discord, and game Terms of Service at all times.
        Violations of these rules or the Code of Conduct may result in timeouts,
        bans, or reporting to platform administrators. Super Earth High Command
        will not tolerate behaviour that risks termination of our community or
        servers.
      </p>
      <p className="my-12">
        We are here to support each other in balancing gaming and family life.
        Ask questions, share experiences, and remember: when we drop, we drop
        hard.
      </p>
    </div>
  );
}
