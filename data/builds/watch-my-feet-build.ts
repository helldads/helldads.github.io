import { Build } from "../builds";

export const watchMyFeetBuild: Build = {
  slug: "watch-my-feet-build",
  title: "Watch My Feet Build",
  slogan: "MINES! Everywhere MINES!!!",
  description: [
    `MINES! Everywhere MINES!!! 2 Min CD lets you chuck these things ALL the time. For the most optimal play, stagger them every 30 sec. One set of mines can usually handle just about anything under a breach or drop. Chuck one into a base, let it do some work, then go mop up. At an Objective and waiting for stuff to load? Chuck some mines to distract the patrols. Got a Breach or Drop? Chuck the mines.`,
    `Its best to spread them out (if possible vertically as the enemies will be spawning and walking towards you). We want to minimize the mines blowing each other up. With that said, Gas and Fire go well together, and even if set off they still provide area denial for quite some time. (Think of it as a faster, poor mans Orbital Napalm).`,
    `AP Mines can handle quite a lot on their own and will actually take down chargers with a few explosions under their guts. Oddly enough, the AT mines are the hit or miss. Given how few their are and their spread its kinda difficult to pop a charger or hulk with them, BTs are almost impossible, and if you back up enough you can lure tanks and Impalers into them. But they do quite well against the Med and chaff as Alphas and Rocket Striders count as heavies and will set them off (taking everything else out with them).`,
    `Another tactic is to shoot the mines (at BTs feet) to cause the explosion to take out the behemoth. You may not kill every single thing during a breach or drop (or you might), but you will definitely thin the herd significantly. When dropped thoughtfully you will notice a significantly easier mission.`,
  ],
  weakness:
    "No Anti Air, No real firepower. This is more of a support build. You lay the trap to weaken the enemy for your team to mop up after. Placement can be difficult, but once you get the hang of it it becomes second nature to know where to lay them down. Timing can also be difficult. It does take a moment for the mines to come down and then deploy. If theres a breach right on top of you, it may be difficult to get the mines out where they will do the most damage. And yes Team Killing. Although by pinging the mines / pods and letting your team know to watch their feet, ive found many divers can actually handle mines on the map quite well. There will absolutely be the few who keep dying and raging over the mines, but their the same ones walking into OBN barrages and 380s or standing next to 500kgs or in front of turrets. Natural Selection will take its course.",
  image: "/assets/builds/Watch_My_Feet_Build.jpg",
  tags: [
    "all-factions",
    "light",
    "mechanic",
    "support",
    "explosive",
    "gas",
    "fire",
  ],
  loadout: [
    // Armor
    {
      assetId: "SC-37",
      note: "No real Armor requirement for this build. I find the extra throw distance to be helpful in spreading out the mines more.",
    },
    // Primary
    {
      assetId: "JAR-5",
      note: "Any Primary will do. You need something to do some heavy lifting. I like Jar 5 on bots, or Blitzer on bugs. They can handle everything hunder Heavies",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "Used for Bile Titans, Factory Striders, and any Objectives that needer bigger firepower",
    },
    // Throwable
    {
      assetId: "G-123",
      note: "Used on Chargers, Hulks, Fabricators and Bug Holes mainly, and then any other Heavies that need blowing up.",
    },
    // Stratagems
    {
      assetId: "APM",
      note: "AP Mines will kill everything Chargers and under. Chargers can be killed by these as the explosion is underneath. Usually takes 4-5 mines. These are the most dangerous to Divers",
    },
    {
      assetId: "IM",
      note: "Incendiary Mines are great long term area denial. These will kill everything under Alpha Commanders and are a quicker / cheaper Orbital Napalm",
    },
    {
      assetId: "MD-8",
      note: "Gas Mines are arguably the best mines. Least deadly to Divers, strong, long lasting CC, and will kill everything under Alpha Commanders.",
    },
    {
      assetId: "ATM",
      note: "AT mines are generally better on Bots, but can kill heavies on Bugs. 3-4 sets of mines will stop a Factory Strider Convoy without you even being there. Will not kill Divers unless detonated.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1rgm60w/build_65_watch_my_feet_build/",
    full: "https://www.youtube.com/watch?v=WagvLNDrFGY",
    highlights: "https://www.youtube.com/watch?v=KqzqIcJdJa0",
    discord:
      "https://discord.com/channels/1301285072896266252/1442901791351246888",
  },
};
