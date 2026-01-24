import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Metadata } from "next";

import { DiscordIcon, TextDocumentIcon } from "@/components/icons";

const highlightsVideoId = "boA4MXg-7v0";
const discordChannel =
  "https://discord.com/channels/1301285072896266252/1464700721684545607";

export const metadata: Metadata = {
  title: "HellBall Tournament",
  alternates: {
    canonical: "/hellball",
  },
};

export default function HellballPage() {
  return (
    <div className="space-y-10 max-w-7xl px-6 mx-auto mt-2">
      <div className="relative aspect-video">
        <iframe
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full h-full rounded-xl"
          id="ytplayer"
          referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube.com/embed/${highlightsVideoId}?cc_load_policy=0&fs=0&iv_load_policy=1&enablejsapi=1&loop=0&origin=https%3A%2F%2Fwww.helldads.org&rel=1&widget_referrer=https%3A%2F%2Fwww.helldads.org`}
          title={`HellBall Tournament`}
        />
      </div>
      <div className="grid grid-cols-12 gap-6 lg:gap-8  justify-center">
        <div className="flex flex-col col-span-12 lg:col-span-8">
          <header>
            <h1 className="text-4xl font-semibold">HellBall Tournament</h1>
            <p className="opacity-80 text-2xl mt-2">
              14th - 22nd February 2186
            </p>
          </header>
          <p className="leading-relaxed mt-4">
            This HellBall Tournament<sup>STM</sup> marks the first official
            event of this competitive format. While active participation
            requires affiliation with a HellDads Division, the event itself is
            fully public, and all citizens of Super Earth are encouraged to
            follow the tournament through our{" "}
            <Link isExternal showAnchorIcon href={discordChannel}>
              official channels and live streams
            </Link>
            .
          </p>
          <h2 className="leading-relaxed mt-4 font-semibold text-2xl">
            Goal of the Game
          </h2>
          <p className="text-2xl font-light">
            Score points by causing the accidental death of your opponents,
            preferably by using melee attacks against their active shield.
          </p>
          <h3 className="leading-relaxed mt-6 text-xl font-semibold">Rules</h3>
          <ol className="list-[number] pl-5 my-4">
            <li>
              Players compete in teams of two (2 vs 2) for one mission (match).
              Both players on a team must wear the same cape. Flip a coin to
              select a mission and difficulty.
            </li>
            <li>
              Players may only engage other players while wearing a shield
              backpack (SH-32 Shield Generator Pack).
            </li>
            <li>
              Any direct damage to another player’s health is a foul, including
              offensive stratagems. However, melee attacks against an active
              shield are explicitly allowed!
            </li>
            <li>
              Death of an opposing player caused by direct damage, results in an
              immediate disqualification.
            </li>
            <li>
              A disqualified player must drop their shield backpack and remain
              in the match until the end. They may no longer actively
              participate.
            </li>
            <li>
              Deliberately playing for time is not allowed, players must
              reinforce others and re-equip their shield backpack as quickly as
              possible.
            </li>
            <li>
              In all fairness, when technical issues occur, restart or
              reschedule the match.
            </li>
          </ol>
          <Button
            isExternal
            as={Link}
            className="text-large bg-[#5865F2] text-white mt-4 max-w-min"
            color="danger"
            href="/assets/events/HellDads-Event-HellBall-Tournament-Official-Rules-v1.0.pdf"
            radius="md"
            size="lg"
          >
            <TextDocumentIcon /> Download Official Rules (PDF)
          </Button>
          <p className="leading-relaxed mt-4 font-medium">
            Rule violations result in a yellow card as a warning. A second
            violation results in a red card, with immediate disqualification.
            Any disqualification leads to an exclusion from the following match.
            The team may replace disqualified players in the next match.
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
                    src="/assets/hellball-tournament-logo.webp"
                  />
                </div>
                <div className="sm:col-span-2">
                  {/*<h2 className="mb-4 helldads-title text-left">History</h2>*/}
                  <p className="font-light pt-2 ">
                    In 2084, in an attempt to control violence among deep space
                    Helldivers, the{" "}
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://helldivers.wiki.gg/wiki/Super_Earth_Armed_Forces"
                    >
                      Super Earth Armed Forces
                    </Link>{" "}
                    legalized no-holds-bared fighting.{" "}
                    <Link
                      isExternal
                      showAnchorIcon
                      href="https://helldivers.wiki.gg/wiki/Permacura"
                    >
                      PermaCura Corporation
                    </Link>
                    , working with the SEAF, established a series of leagues and
                    bloody public exhibitions. The fight&apos;s popularity grew
                    with their brutality. Soon, PermaCura discovered that the
                    public matches were their most profitable enterprise.
                  </p>
                  <p className="font-light pt-2 ">
                    The professional league was formed; a cabal of the most
                    democratic and skilled Helldivers throughout the Galaxy,
                    selected to fight in a Grand Tournament. Now it is 2186, 100
                    years have passed since founding of the death match. Profits
                    from the Tournament number in the hundreds of billions.{" "}
                  </p>
                  <p className="font-light pt-2 ">
                    You have been selected to fight in the professional league
                    organized by the HellDads Parental Corps. Your strength and
                    courage are legendary. The time has come to prove you are
                    the best, to crush your enemies, to win the Tournament.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mt-12">Tournament</h2>
        <p className="leading-relaxed">
          This tournament is open to all HellDads Divisions; each will assemble
          a team of players during the qualification rounds and select their
          best lineup to participate in the upcoming matches.
        </p>
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <Card
            isBlurred
            className="border-none bg-background/60  col-span-12 sm:col-span-6 lg:col-span-4  dark:bg-default-100/50"
            shadow="sm"
          >
            <CardHeader className="text-xl">
              <h3 className="font-semibold w-full">Qualification</h3>
              <div className="font-light ml-1 text-right">
                Weekend, 14th&nbsp;/&nbsp;15th&nbsp;Feb
              </div>
            </CardHeader>
            <CardBody>
              The goal of the qualification rounds is to provide each division
              the opportunity to practice the game and develop a strategy to win
              the tournament. You can play as many qualification games as you
              like in preparation of the event, their outcome is not relevant
              for the statistics, but allows you to address essential questions
              before it gets serious.
              <Button
                isExternal
                as={Link}
                className="text-large bg-[#5865F2] text-white mt-4 max-w-min mx-auto"
                color="danger"
                href={discordChannel}
                radius="md"
                size="lg"
              >
                <DiscordIcon /> Enroll now
              </Button>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-default-100/50"
            shadow="sm"
          >
            <CardHeader className="text-xl">
              <h3 className="font-semibold w-full">Group Matches</h3>
              <div className="font-light ml-1 text-right">
                Friday &amp; Saturday, 20th&nbsp;/&nbsp;21st&nbsp;Feb
              </div>
            </CardHeader>
            <CardBody>
              Each division will play against each other to qualify for the
              finals. We have five divisions, which means that each division
              will play four matches. The total score of all matches will
              qualify two teams for the finals. The lineup can be changed before
              a match, but not during a match.
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60  col-span-12 lg:col-span-4  dark:bg-default-100/50"
            shadow="sm"
          >
            <CardHeader className="text-xl">
              <h3 className="font-semibold w-full">The Finals</h3>
              <div className="font-light ml-1 text-right">
                Sunday, 22nd&nbsp;February
              </div>
            </CardHeader>
            <CardBody>
              The two teams with the highest total score qualify for the finals,
              the most prestigious of all matches in this tournament. The best
              of the best will compete in a head to head race for the title of
              becoming the new Super HellBall Champion of the HellDads in 2186!
            </CardBody>
          </Card>
        </div>
        <h3 className="text-xl font-semibold mt-12">Scoring</h3>
        <p className="leading-relaxed">
          Every death counts regardless of whether it was caused by a foul or a
          rightful accidental kill; the team with the lowest total number of
          deaths wins the match. A team with two disqualified players
          automatically loses the match. A screenshot of the mission statistics
          screen on the Super Destroyer is mandatory for reporting the results.
        </p>
        <p className="leading-relaxed text-center font-medium">
          Winning = 3 points | Draw = 1 point | Losing = 0 points
        </p>
        <p className="leading-relaxed mt-4">
          <span className="font-medium">Important:</span> There must be a clear
          and unambiguous winner; in the event of a draw in the finals, an
          additional match must be played to determine the winner.
        </p>

        <h2 className="text-2xl font-semibold mt-12">Event Channel</h2>
        <p className="leading-relaxed">
          Please follow our dedicated event channel for the HellBall Tournament
          <sup>STM</sup> on{" "}
          <Link isExternal showAnchorIcon href={discordChannel}>
            Discord
          </Link>
          . Here we will make all major announcements, coordinate the matches
          and have our team of organizers and judges ready to ensure a fair and
          competitive tournament.
        </p>
        <p className="leading-relaxed">
          Our goal is to provide live-stream coverage, allowing everyone to
          watch and follow the matches in real time. Instructions for players
          and viewers will be shared in this channel.
        </p>
      </div>

      <div className="space-y-4 text-small uppercase opacity-60 max-w-2xl text-justify mx-auto my-20">
        <h2 className="font-bold">
          Terms of Service &amp; Participation Agreement
        </h2>
        <p>
          By participating in, observing, being adjacent to, or being aware of
          the existence of the HellBall Tournament<sup>STM</sup> (“the Event”),
          the participant (“the Participant”) confirms that participation is
          voluntary, intentional, and undertaken with full acceptance of all
          known, unknown, foreseeable, unforeseeable, accidental, intentional,
          and statistically inevitable consequences. The Event is conducted
          under the unified authority of Super Earth through the Ministry of
          Unity.
        </p>
        <p>
          The Participant acknowledges that HellBall<sup>STM</sup> constitutes a
          high-risk competitive activity and agrees that any injury, loss,
          damage, psychological impact, reputational harm, or untimely demise
          occurring before, during, or after participation shall not be
          considered the responsibility of the Ministry of Unity, Super Earth,
          the HellDads Parental Corps, or any affiliated ministries, councils,
          representatives, sentries, contractors, observers, or statistically
          uninvolved parties. All outcomes, including but not limited to
          falling, crushing, burning, drowning, friendly accidents, delayed
          reinforcements, or acts of sudden heroism, are accepted as integral to
          the Event.
        </p>
        <p>
          The Event is sponsored by PermaCura, a subsidiary of the Ministry of
          Unity and manufacturer of medical stims for the Super Earth Armed
          Forces (SEAF). Sponsorship by PermaCura shall not be interpreted as an
          endorsement of any gameplay decisions, tactical approaches,
          participant behaviour, survival outcomes, or medical expectations.
          Medical assistance, where provided, is supplied as-is, without
          warranty, implied safety, or promise of effectiveness.
        </p>
        <p>
          The Participant accepts full and exclusive responsibility for their
          actions and decisions during the Event and agrees to indemnify and
          hold harmless the Ministry of Unity and all associated entities from
          any claims, liabilities, costs, losses, or inquiries arising from
          participation. The Ministry of Unity explicitly declines
          responsibility for whether the Participant returns in whole, in part,
          or at all, and retains the right to remain unimpressed by complaints
          to the contrary.
        </p>
        <p>
          All rules governing HellBall<sup>STM</sup> are mandatory, final, and
          subject to immediate reinterpretation or enforcement at the discretion
          of authorized personnel or circumstances. Failure to comply,
          deliberate misinterpretation, or creative rule bending may result in
          penalties, disqualification, or administrative disappointment. Matches
          may be recorded, streamed, archived, reviewed, edited, reused, or
          repurposed for entertainment, education, propaganda, or dispute
          resolution, and participation constitutes irrevocable consent to such
          use.
        </p>
        <p>
          Difficulty selection, mission choice, biome selection, and
          environmental awareness are the sole responsibility of the
          Participant. Environmental hazards are intentional. Failure to notice
          them is not. Choosing difficulty 1 may reduce alien interference but
          may also affect how the Participant is remembered.
        </p>
        <p>
          This agreement shall be considered binding upon being read, partially
          read, skimmed, ignored, or existing within reasonable proximity to
          this document. The Ministry of Unity reserves the right to amend,
          replace, or retroactively enforce these terms at any time, with or
          without notice, justification, or explanation.
        </p>
        <p>
          &quot;HellBall&quot; is a proud Super Trademark (STM) of Super Earth,
          protected under the vigilant oversight of the Ministry of Unity and
          the HellDads Parental Corps. Any unauthorized use, replication, or
          deviation is considered an act of treason and will be dealt with
          accordingly.
        </p>
        <p>
          This event is a non-commercial fan project maintained by volunteers of
          the HellDads gaming community, it is not affiliated with Arrowhead
          Game Studios or Sony Interactive Entertainment.
        </p>
      </div>
    </div>
  );
}
