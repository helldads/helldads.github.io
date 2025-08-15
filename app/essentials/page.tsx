import { Avatar } from "@heroui/avatar";
import { Accordion, AccordionItem } from "@heroui/accordion";

import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { DiscordIcon } from "@/components/icons";

const CONTRIB = {
  avatar: "/assets/emoji-helldad.png",
  name: "Community Tipline",
  note: "Got a great tip? Share it on Discord to get it added here.",
  ctaHref: siteConfig.links.discord,
};

const TIPS = [
  {
    name: "Offensive",
    color: "danger",
    items: [
      "Calling extraction while the team pulls agro somewhere else, can make the rest of the mission much easier.",
      "The Pelican can hover and give you air support, when no Helldiver is in the extraction zone once the countdown has finished and he’s on his final approach.",
      "You can shoot the broadcast tower from a distance with explosive weapons, you don’t have to use the terminal.",
      "The Commando will attempt to guide the rockets into the last marked position of your laser, but it doesn't work with moving targets.",
      "All flame throwing weapons deal the same damage, only the fuel tank has different capacity.",
      "The Crossbow is a silent weapon, enemies will get only drawn to the explosion if they don’t see you shooting it.",
      "The Dynamite has a timer which can be adjusted through the weapon wheel, up to 60 seconds.",
      "The Ballistic Shield also blocks melee attacks, perfect in combination with melee weapons.",
      "The kick emote “this is democracy” is doing melee damage and gets boosted by the peak physique armor passive.",
    ],
  },
  {
    name: "Defensive",
    color: "primary",
    items: [
      "The shield backpack also protects you from weather effects and melee attacks.",
      "You can get accidentally killed by EMS mortar shells, when they hit your head.",
      "Dive down to put out flames.",
      "Being prone reduces explosive damage you receive by 90%.",
      "Diving in any direction already counts as being prone, even before you hit the ground.",
      "You can hide in bushes to reduce visibility, best go prone.",
      "Enemy patrols won’t spawn during extraction, if you cleared all bases and the map border is closer than 80m, which is the minimum distance from where enemies can spawn.",
      "Use the shield backpack to attach sentry stratagems to it and drop it close to a wall / rock, which allows you to position your sentries in non-sticky elevated areas.",
    ],
  },
  {
    name: "Movement",
    color: "secondary",
    items: [
      "You can throw your stratagems further by diving forward while throwing.",
      "You can do a kneeing reload midair while using the jump pack.",
      "You can start unlocking the four rocket silo locks already, as soon as the terminal has been activated.",
      "It’s common practice to drop all samples at extraction, so you don’t risk losing them during the rest of the mission.",
      "Practice dropping your backpack, especially when you wear a shield and a stratagem ball gets attached to it.",
      "You can reload your Guard Dog by calling it back, using the backpack button, it will drop the current magazine and pick up a fresh one when you start it again.",
      "You can drive the FRV while holding mission items (e.g. SSSD), but you have to get in on the passenger side and then switch to the driving seat.",
      "The experimental Warp Backpack can teleport you through bunker doors, so you don’t need a buddy to open it.",
      "You can reload while using the Warp Backpack.",
      "You can stick the One True Flag to your rover backpack on the ground, then pick it up again.",
    ],
  },
  {
    name: "Gameplay",
    color: "success",
    items: [
      "Calling in extraction doesn't end the mission, boarding the Pelican does. Don’t board the Pelican until your team is ready for extraction.",
      "Map icons indicating a POI show as a diamond as long loot is available, it turns into a kite symbol once looted.",
      "Samples are shared across the team after extraction, it’s irrelevant who carries them.",
      "The samples icon on the map has three different states, indicating how many samples it contains.",
      "Dial in a stratagem code and hold it in your hands, right before the mission timer runs out, you can still throw it after the Super Destroyers have left.",
      "Hold reload to access the weapon settings, for example to change the firerate.",
      "All explosive weapons can be used to open containers, not only grenades.",
      "The Laser Cannon can open containers as well.",
      "All resources like medals, super credits, requisition slips found during a mission are equally shared with the squad immediately, no need for a successful extraction.",
    ],
  },
  {
    name: "Automatons",
    color: "danger",
    items: [
      "You can destroy fabricators from all sites with explosive damage, hitting the vents just makes it easier when you’re in front of it.",
      "The Detector Tower can’t see you, when you’re prone on the ground.",
      "You can destroy the Detector Towers with an Orbital Gas Strike on direct hit, also works with Orbital EMS Strike.",
      "You can kill gunships with the Senator, aim for the rear thrusters, which have less health.",
      "You can trick cannon turrets to shoot at you, while positioning behind a stratagem jammer to let them take it out for you.",
      "The vents of big fabricators have the same weakness like the little ones, only their outside armor is higher to protect from explosive damage.",
      "You can kill a War Strider with a single EAT-17 shot to his crotch.",
    ],
  },
  {
    name: "Therminids",
    color: "warning",
    items: [
      "Gas grenades can close bug holes.",
      "You can use any hellpod strategem to close titan holes.",
      "Auto Cannon Flak rounds (shrapnels) are highly efficient against spore towers and shrieker nests.",
      "Mechs can close bug holes with a melee stomp.",
      "Killing a bile titan in front of a titan hole, will close it when he collapses.",
    ],
  },
  {
    name: "Illuminates",
    color: "primary",
    items: [
      "Being prone prevents you from being detected by watchers.",
      "Orbital Gatling Barrage can destroy shielded warp ships.",
      "Thermite grenades can burn through shields of warpships, aiming for the tail fin / engine part will always take them out, even on repel invasion missions.",
      "Killing a watcher above a warp ship, will result in destroying it when he falls down on it.",
      "Orbital Gas Strikes can destroy landed warp ships.",
      "A single Pyro grenade can take out Harvesters, when positioned between his legs.",
      "The Eagle Strafing Run can kill a Leviathan in a single flyby, but at least two-third of the shots need to hit.",
    ],
  },
];

export default function EssentialsPage() {
  return (
    <div>
      {/* Intro */}
      <section className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className={title()}>Essentials</h1>
            <p className="my-6 max-w-2xl text-justify">
              Welcome to the HellDads Essentials, a quick, fun guide for
              everyone to understand all the wild game mechanics and gaming
              lingo, which might not be that obvious to figure out! Whether
              you&apos;re fresh from the academy or just need a refresher,
              we&apos;ve got you covered with the combined knowledge of the
              HellDads. Proudly curated by the R&amp;D Science Team.
            </p>
          </div>
          <Card className="w-full max-w-md md:w-[420px]">
            <CardHeader className="flex items-center gap-3">
              <Image className="mr-auto" width={64} src={CONTRIB.avatar} />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{CONTRIB.name}</span>
                <span className="text-xs text-foreground/60">
                  {CONTRIB.note}
                </span>
              </div>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button
                as="a"
                href={CONTRIB.ctaHref}
                color="primary"
                size="sm"
                endContent={<DiscordIcon />}
              >
                Share a Tip
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link href="#tips">
            <Chip radius="sm" size="lg" variant="bordered">
              Tips &amp; Tricks
            </Chip>
          </Link>
          {TIPS.map((c, n) => (
            <Link key={n} href={"#" + c.name}>
              <Chip radius="sm" size="lg" variant="faded">
                {c.name}
              </Chip>
            </Link>
          ))}
        </div>
        <div className="flex my-2 gap-2 flex-wrap">
          <Link href="#abbreviations">
            <Chip radius="sm" size="lg" variant="bordered">
              Chat Abbreviations
            </Chip>
          </Link>
          <Link href="#terms">
            <Chip radius="sm" size="lg" variant="bordered">
              Gaming Terms
            </Chip>
          </Link>
        </div>
      </section>

      <Divider className="my-6" />

      {/* Tips & Tricks */}
      <section id="tips" className="mx-auto max-w-6xl py-10 md:py-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tips &amp; Tricks
          </h2>
        </div>

        {TIPS.map((c, n) => (
          <div key={n} id={c.name} className="scroll-mt-24">
            <h3 className="my-6 flex items-center gap-2 text-lg font-semibold">
              {c.name}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.items.map((t, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex items-center gap-3 font-light">
                    {t}
                  </CardHeader>
                  <CardFooter className="pt-0 text-sm text-foreground/80">
                    <Chip size="sm" variant="flat">
                      {c.name}
                    </Chip>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Divider className="my-6" />

      {/* Abbreviations */}
      <h2 id="abbreviations" className="text-2xl font-semibold mt-12">
        Chat Abbreviations
      </h2>
      <p className="my-6">
        Abbreviations commonly used in chats every HellDad should know:
      </p>
      <ul className="list-disc list-outside my-6 pl-6">
        <li className="mb-2">
          <strong>AFK (Away From Keyboard):</strong> When you step away from the
          game for a moment.
        </li>
        <li className="mb-2">
          <strong>BRB (Be Right Back):</strong> A quick heads-up that
          you&apos;ll be away but not for long.
        </li>
        <li className="mb-2">
          <strong>CU / CYA (See You Around):</strong> A casual farewell that
          suggests you&apos;ll catch up later.
        </li>
        <li className="mb-2">
          <strong>GG / GD (Good Game / Good Dive):</strong> A friendly way to
          say, &quot;Well played!&quot; or &quot;Good job!&quot; to everyone
          after a mission, win or lose.
        </li>
        <li className="mb-2">
          <strong>GTG (Got To Go):</strong> When real life pulls you away for
          good.
        </li>
        <li className="mb-2">
          <strong>GN / GN8 (Good Night):</strong> A simple way to say &quot;good
          night&quot;.
        </li>
        <li className="mb-2">
          <strong>
            LOL (Laughing Out Loud) / ROFL (Rolling On Floor Laughing):
          </strong>{" "}
          For funny moments when you can&apos;t stop laughing.
        </li>
        <li className="mb-2">
          <strong>o7 / ¡O (Helldivers Salute):</strong> This is a quick way to
          show respect for a fellow Helldiver!
        </li>
      </ul>

      <Divider className="my-6" />

      {/* Gaming Terms */}
      <h2 id="terms" className="text-2xl font-semibold mt-12">
        Gaming Terms
      </h2>
      <ul className="list-disc list-outside my-6 pl-6">
        <li className="mb-2">
          <strong>Aggro:</strong> When you accidentally (or intentionally) annoy
          the enemy so much that they come straight for you.
        </li>
        <li className="mb-2">
          <strong>Buff:</strong> A boost to a player&apos;s abilities or
          weapons, like an improvement.
        </li>
        <li className="mb-2">
          <strong>Camp:</strong> To stay in one spot, waiting for something to
          happen, likely waiting to ambush someone.
        </li>
        <li className="mb-2">
          <strong>Damage Per Second (DPS):</strong> The measure of how much
          damage you can deal over time.
        </li>
        <li className="mb-2">
          <strong>Drop In / Drop Out:</strong> Commonly used for joining or
          leaving a game or voice channel.
        </li>
        <li className="mb-2">
          <strong>Experience Points (XP):</strong> Points that help you level
          up.
        </li>
        <li className="mb-2">
          <strong>Farming / Grind:</strong> Repeating an activity over and over
          to achieve something, like collecting samples to unlock upgrades or
          super credits for the store.
        </li>
        <li className="mb-2">
          <strong>Hit Points / Health Points (HP):</strong> This is how much
          &quot;life&quot; your character or enemies have.
        </li>
        <li className="mb-2">
          <strong>Heads-Up Display (HUD):</strong> All the overlay info
          on-screen during a game.
        </li>
        <li className="mb-2">
          <strong>Lag:</strong> That frustrating delay between action and
          response, often related to a poor network connection.
        </li>
        <li className="mb-2">
          <strong>1337 (Leet):</strong> This is gamer speak for
          &quot;elite,&quot; with numbers replacing letters.
        </li>
        <li className="mb-2">
          <strong>Loot:</strong> Things you can pick up along the way, also
          commonly known as Samples, Super Credits and Medals. Not to be
          confused with the loadout from your fallen squad members.
        </li>
        <li className="mb-2">
          <strong>Loot Ninja:</strong> Squad member (you know who you are!) who
          grabs all the goodies on the battlefield before anybody else has the
          chance. Good thing is, that most loot is evenly shared with the whole
          squad anyway, such as Super Credits, Requisition Slits, Medals and
          Samples.
        </li>
        <li className="mb-2">
          <strong>Meta:</strong> The &quot;Most Effective Tactic
          Available.&quot;, also used to describe the best gear in the game.
        </li>
        <li className="mb-2">
          <strong>Nerf:</strong> When an ability or weapon is made weaker, often
          to balance the game.
        </li>
        <li className="mb-2">
          <strong>Non-Player Character (NPC):</strong> These are
          computer-controlled characters in the game on your Super Destroyer,
          SEAF troops or civilians.
        </li>
        <li className="mb-2">
          <strong>Noob / Newbie:</strong> A new or inexperienced player.
        </li>
        <li className="mb-2">
          <strong>Overpowered (OP):</strong> When a character or item is
          ridiculously strong.
        </li>
        <li className="mb-2">
          <strong>Player vs Environment / Player vs Player (PvE / PvP):</strong>{" "}
          PvE is going up against in-game challenges; PvP is when you face off
          against other players. All Helldivers hopefully play PvE like HellDads
          do and don&apos;t team kill each other!
        </li>
        <li className="mb-2">
          <strong>Respawn / Reinforcement:</strong> Getting back into action,
          after being reinforced and stepping out of your hellpod. Another dive,
          another life!
        </li>
        <li className="mb-2">
          <strong>Tank:</strong> The player who absorbs all the damage and takes
          the hits for the team.
        </li>
        <li className="mb-2">
          <strong>Team Kill (TK):</strong> This refers to a player accidentally
          (or sometimes deliberately) taking out a teammate in-game.
        </li>
        <li className="mb-2">
          <strong>Too Long; Didn&apos;t Read (TL;DR):</strong> Commonly used to
          indicate very long texts ahead.
        </li>
      </ul>
    </div>
  );
}
