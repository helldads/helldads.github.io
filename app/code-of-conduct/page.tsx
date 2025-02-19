import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { DiscordIcon } from "@/components/icons";

export default function CodeOfConductPage() {
  return (
    <div>
      <h1 className={title()}>Code of Conduct</h1>
      <p className="my-6">
        In the service of Super Earth and our squad mates, the HellDads
        community believes in balancing our commitment to family and the
        mission. This Code of Conduct outlines how we respect each other’s time,
        needs, and support each other through both gaming challenges and
        parenthood duties. We serve the mission best when we support each other
        both on and off the battlefield.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        We prioritize family needs—no apologies required
      </h2>
      <p className="my-6">
        Squad members should always feel free to step away for family needs
        without concern. Whether for bottle-making, bedtime routines, or
        quieting a fuss, HellDads get it. Take a Tactical Timeout whenever you
        need it, and we’ll keep the line of communication open. If you’ll be a
        while, please let the squad know, so they can manage the mission as
        needed.
      </p>
      <h2 className="text-2xl font-semibold mt-12">Gender and Diversity</h2>
      <p className="my-6">
        While we proudly call ourselves HellDads, our community welcomes
        everyone—not just dads! Whether you’re a mother, step-parent,
        grandparent, soon-to-be parent, or anyone interested in supporting and
        sharing our values, you have a place here. We’re a community built on
        family-friendly, inclusive principles that go beyond any specific role,
        gender, or family status. Everyone who values teamwork, respect, and
        support is welcome to join our ranks, to dive into the action, and share
        in the experience of being part of something bigger!
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        Join Voice Channels and In-Game Friends List
      </h2>
      <p className="my-6">
        For smooth teamwork, HellDads should aim to join a Discord voice channel
        during gameplay. It’s a quick way to give updates, celebrate wins, and
        manage AFK notifications. Adding squad members as friends in-game also
        helps with quick rejoining if disconnected, preserving the mission.
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
        Uphold Mission Goals and Respect the Squad&apos;s Playstyle
      </h2>
      <p className="my-6">
        We encourage all HellDads to respect the overall mission objectives,
        whether your team is after a clean sweep or simply there to enjoy the
        run. Play as a team and support each other, especially when balancing
        gameplay with family priorities.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        Honor the AFK Mission Etiquette (Away from Keyboard or Controller)
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
          <strong>Announce your AFK</strong> via in game chat or voice
          communication.
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
        Maintain a Friendly, Family-First Atmosphere
      </h2>
      <p className="my-6">
        We encourage every HellDad to help maintain a welcoming, family-friendly
        environment. Check in with your squad, share a laugh, and have fun.
        Remember, we’re all here because we share the same values—gaming,
        family, and camaraderie in the face of anything the battlefield throws
        at us.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        When the Going Gets Tough, Ask for Help
      </h2>
      <p className="my-6">
        Everyone’s new at some point, and as HellDads, we share tips and offer
        guidance on both gameplay and parenting. Have a question about balancing
        family and gaming? Ask away! We’re here to help and support our fellow
        Helldivers, no matter the experience level.
      </p>
      <h2 className="text-2xl font-semibold mt-12">
        Conflict Resolution and Mod Support
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
      <h2 className="text-2xl font-semibold mt-12">Becoming a Volunteer</h2>
      <p className="my-6">
        Our HellDads mods are all dedicated volunteers, managing their roles
        while balancing full-time jobs, family responsibilities, and the demands
        of daily life. We’re always grateful for any help from community members
        to keep HellDads the most family-friendly space for Helldivers. Whether
        you’re a Reddit whiz, a Discord pro, or simply have great ideas to
        share, your contribution is welcome!
      </p>
      <p className="my-6">
        If you’d like to apply for a voluntary role or contribute in any other
        way, please reach out to one of the mods. Every bit of support helps us
        build and maintain this community we’re all proud of, and we’d love to
        hear from you!
      </p>
    </div>
  );
}
