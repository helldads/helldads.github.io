export const CONTRIB = {
  avatar: "/assets/emoji-helldad.png",
  name: "Community Tipline",
  note: "Got a great tip? Share it on Discord to get it added here.",
  ctaHref: "discord", // This will need to be updated to use siteConfig.links.discord in the component
};

export const TIPS = [
  {
    name: "Offensive",
    color: "danger" as const,
    items: [
      "Calling extraction while the team pulls agro somewhere else, can make the rest of the mission much easier.",
      "The Pelican can hover and give you air support, when no Helldiver is in the extraction zone once the countdown has finished and he's on his final approach.",
      "You can shoot the broadcast tower from a distance with explosive weapons, you don't have to use the terminal.",
      "The Commando will attempt to guide the rockets into the last marked position of your laser, but it doesn't work with moving targets.",
      "All flame throwing weapons deal the same damage, only the fuel tank has different capacity.",
      "The Crossbow is a silent weapon, enemies will get only drawn to the explosion if they don't see you shooting it.",
      "The Dynamite has a timer which can be adjusted through the weapon wheel, up to 60 seconds.",
      "The Ballistic Shield also blocks melee attacks, perfect in combination with melee weapons.",
      `The kick emote "this is democracy" is doing melee damage and gets boosted by the peak physique armor passive.`,
      "Enemies prioritise sentries over Helldivers, drop one to distract them.",
      "You can intercept melee attacks with your own melee if timed right (e.g. jumping Hunters, Overseers with staffs).",
      "Enemies can be affected by multiple DoT (Damage of Time) effects at the same time, e.g. fire and gas.",
    ],
  },
  {
    name: "Defensive",
    color: "primary" as const,
    items: [
      "The shield backpack also protects you from weather effects and melee attacks.",
      "You can get accidentally killed by EMS mortar shells, when they hit your head.",
      "Dive down to put out flames.",
      "Being prone reduces explosive damage you receive by 90%.",
      "Diving in any direction already counts as being prone, even before you hit the ground.",
      "You can hide in bushes to reduce visibility, best go prone.",
      "Enemy patrols won't spawn during extraction, if you cleared all bases and the map border is closer than 80m, which is the minimum distance from where enemies can spawn.",
      "Use the shield backpack to attach sentry stratagems to it and drop it close to a wall / rock, which allows you to position your sentries in non-sticky elevated areas.",
      "Scout armor's passive reduces detection range by 30%, during storms you gain another 60% making you nearly undetectable.",
      "Tesla towers ignore civilians and SEAF troops, but will still kill them if the arc jumps over.",
    ],
  },
  {
    name: "Movement",
    color: "secondary" as const,
    items: [
      "You can throw your stratagems further by diving forward while throwing.",
      "You can do a kneeling reload midair while using the jump pack.",
      "You can start unlocking the four rocket silo locks already, as soon as the terminal has been activated.",
      "It's common practice to drop all samples at extraction, so you don't risk losing them during the rest of the mission.",
      "Practice dropping your backpack, especially when you wear a shield and a stratagem ball gets attached to it.",
      "You can reload your Guard Dog by calling it back, using the backpack button, it will drop the current magazine and pick up a fresh one when you start it again.",
      "You can drive the FRV while holding mission items (e.g. SSSD), but you have to get in on the passenger side and then switch to the driving seat.",
      "The experimental Warp Backpack can teleport you through bunker doors, so you don't need a buddy to open it.",
      "You can reload while using the Warp Backpack.",
      "You can stick the One True Flag to your rover backpack on the ground, then pick it up again.",
      "The warp pack can also open containers when teleporting next to them.",
      "You can use an exosuit to get into bunkers, when no buddy is around, position it with the back to the door and get out, you'll be inside the bunker and also can climb back in.",
      "Storms reduce not only your vision, enemies' detection range drops by 60%.",
      "Turning the lidar antenna beeps once when aligned correctly.",
      "Pinging the lidar terminal tells your squad in which directing it needs to be aligned.",
      "Getting on top of things is fun, but some spots are off-limits, stepping onto the rooftop hangar door at the civilian extraction site kills you.",
    ],
  },
  {
    name: "Gameplay",
    color: "success" as const,
    items: [
      "Calling in extraction doesn't end the mission, boarding the Pelican does. Don't board the Pelican until your team is ready for extraction.",
      "Map icons indicating a POI show as a diamond as long loot is available, it turns into a kite symbol once looted.",
      "Samples are shared across the team after extraction, it's irrelevant who carries them.",
      "The samples icon on the map has three different states, indicating how many samples it contains.",
      "Dial in a stratagem code and hold it in your hands, right before the mission timer runs out, you can still throw it after the Super Destroyers have left.",
      "Hold reload to access the weapon settings, for example to change the firerate.",
      "All explosive weapons can be used to open containers, not only grenades.",
      "The Laser Cannon can open containers as well.",
      "All resources like medals, super credits, requisition slips found during a mission are equally shared with the squad immediately, no need for a successful extraction.",
      "Samples, requisition slips and medals have a cap, spend or donate them to the DSS so they don't go to waste.",
      "The squad leader gets all the credits for kills from Eagle storms, SEAF artillery, and SAM sites — don't be discouraged.",
      "Kill count doesn't affect player level progression, only completed missions and side objectives do.",
      "You only need few missions to collect super samples, but you need many more rare samples for your ship upgrades, so collect them from early on.",
      "Samples and sample containers make distinct sounds when you're nearby.",
      "Enemies only react to red stratagem call-ins, not blue ones.",
      `Ping a marked target once to acknowledge "I'll take it." or hold the button to reject with "Not needed."`,
      "Reload and heal before picking up supplies.",
      "Supply drops contain four boxes, one per Helldiver. Ask before calling it in and before taking more than one.",
      "Grabbing supplies from a resupply also restores one use of the supply backpack.",
    ],
  },
  {
    name: "Automatons",
    color: "danger" as const,
    items: [
      "You can destroy fabricators from all sites with explosive damage, hitting the vents just makes it easier when you're in front of it.",
      "The Detector Tower can't see you, when you're prone on the ground.",
      "You can destroy the Detector Towers with an Orbital Gas Strike on direct hit, also works with Orbital EMS Strike.",
      "You can kill gunships with the Senator, aim for the rear thrusters, which have less health.",
      "You can trick cannon turrets to shoot at you, while positioning behind a stratagem jammer to let them take it out for you.",
      "The vents of big fabricators have the same weakness like the little ones, only their outside armor is higher to protect from explosive damage.",
      "You can kill a War Strider with a single EAT-17 shot to his crotch.",
      "Bots are inaccurate under suppressive fire, but deadly accurate if unchallenged.",
      "Bots will fire suppressively where they last saw you. Stay liquid!",
    ],
  },
  {
    name: "Terminids",
    color: "warning" as const,
    items: [
      "Gas grenades can close bug holes.",
      "You can use any hellpod strategem to close titan holes.",
      "Auto Cannon Flak rounds (shrapnels) are highly efficient against spore towers and shrieker nests.",
      "Mechs can close bug holes with a melee stomp.",
      "Killing a bile titan in front of a titan hole, will close it when he collapses.",
      "Chargers destroy bug holes when they step into them.",
      "Bugs detect vibrations and will investigate, even if they can't see you (smoke, storms).",
    ],
  },
  {
    name: "Illuminates",
    color: "primary" as const,
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

export const ABBREVIATIONS = [
  {
    abbr: "AFK",
    full: "Away From Keyboard",
    description: "When you step away from the game for a moment.",
  },
  {
    abbr: "BRB",
    full: "Be Right Back", 
    description: "A quick heads-up that you'll be away but not for long.",
  },
  {
    abbr: "CU / CYA",
    full: "See You Around",
    description: "A casual farewell that suggests you'll catch up later.",
  },
  {
    abbr: "GG / GD",
    full: "Good Game / Good Dive",
    description: "A friendly way to say, \"Well played!\" or \"Good job!\" to everyone after a mission, win or lose.",
  },
  {
    abbr: "GTG",
    full: "Got To Go",
    description: "When real life pulls you away for good.",
  },
  {
    abbr: "GN / GN8",
    full: "Good Night",
    description: "A simple way to say \"good night\".",
  },
  {
    abbr: "LOL / ROFL",
    full: "Laughing Out Loud / Rolling On Floor Laughing",
    description: "For funny moments when you can't stop laughing.",
  },
  {
    abbr: "o7 / ¡O",
    full: "Helldivers Salute",
    description: "This is a quick way to show respect for a fellow Helldiver!",
  },
  {
    abbr: "TL;DR",
    full: "Too Long; Didn't Read",
    description: "Commonly used to indicate very long texts ahead.",
  },
];

export const GAMING_TERMS = [
  {
    term: "Aggro",
    description: "When you accidentally (or intentionally) annoy the enemy so much that they come straight for you.",
  },
  {
    term: "Buff",
    description: "A boost to a player's abilities or weapons, like an improvement.",
  },
  {
    term: "Camp",
    description: "To stay in one spot, waiting for something to happen, likely waiting to ambush someone.",
  },
  {
    term: "Damage Per Second (DPS)",
    description: "The measure of how much damage you can deal over time.",
  },
  {
    term: "Drop In / Drop Out",
    description: "Commonly used for joining or leaving a game or voice channel.",
  },
  {
    term: "Experience Points (XP)",
    description: "Points that help you level up.",
  },
  {
    term: "Farming / Grind",
    description: "Repeating an activity over and over to achieve something, like collecting samples to unlock upgrades or super credits for the store.",
  },
  {
    term: "Hit Points / Health Points (HP)",
    description: "This is how much \"life\" your character or enemies have.",
  },
  {
    term: "Heads-Up Display (HUD)",
    description: "All the overlay info on-screen during a game.",
  },
  {
    term: "Lag",
    description: "That frustrating delay between action and response, often related to a poor network connection.",
  },
  {
    term: "1337 (Leet)",
    description: "This is gamer speak for \"elite,\" with numbers replacing letters.",
  },
  {
    term: "Loot",
    description: "Things you can pick up along the way, also commonly known as Samples, Super Credits and Medals. Not to be confused with the loadout from your fallen squad members.",
  },
  {
    term: "Loot Ninja",
    description: "Squad member (you know who you are!) who grabs all the goodies on the battlefield before anybody else has the chance. Good thing is, that most loot is evenly shared with the whole squad anyway, such as Super Credits, Requisition Slits, Medals and Samples.",
  },
  {
    term: "Meta",
    description: "The \"Most Effective Tactic Available.\", also used to describe the best gear in the game.",
  },
  {
    term: "Nerf",
    description: "When an ability or weapon is made weaker, often to balance the game.",
  },
  {
    term: "Non-Player Character (NPC)",
    description: "These are computer-controlled characters in the game on your Super Destroyer, SEAF troops or civilians.",
  },
  {
    term: "Noob / Newbie",
    description: "A new or inexperienced player.",
  },
  {
    term: "Overpowered (OP)",
    description: "When a character or item is ridiculously strong.",
  },
  {
    term: "Player vs Environment / Player vs Player (PvE / PvP)",
    description: "PvE is going up against in-game challenges; PvP is when you face off against other players. All Helldivers hopefully play PvE like HellDads do and don't team kill each other!",
  },
  {
    term: "Respawn / Reinforcement",
    description: "Getting back into action, after being reinforced and stepping out of your hellpod. Another dive, another life!",
  },
  {
    term: "Tank",
    description: "The player who absorbs all the damage and takes the hits for the team.",
  },
  {
    term: "Team Kill (TK)",
    description: "This refers to a player accidentally (or sometimes deliberately) taking out a teammate in-game.",
  },
];