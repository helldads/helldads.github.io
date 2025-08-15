import { title } from "@/components/primitives";

export default function EssentialsPage() {
  return (
    <div>
      <h1 className={title()}>Essentials</h1>
      <p className="my-6">
        Welcome to the HellDads Essentials, a quick, fun guide for everyone to
        understand all the wild gaming lingo and game mechanics, which might not
        that obvious to figure out! Whether you&apos;re new to the battlefront
        or just need a refresher, we&apos;ve got you covered with easy
        explanations that&apos;ll keep you going.
      </p>

      <h2 className="text-2xl font-semibold mt-12">
        Common Chat Abbreviations
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

      <h2 className="text-2xl font-semibold mt-12">Common Game Terms</h2>
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
