import { Build } from "../builds";

export const mechDriverBuild: Build = {
  slug: "mech-driver-build",
  title: "Mech Driver Build",
  slogan: "Mech Cavalry of your team!",
  description: [
    `You are the Mech Cavalry of your team. Your job is to pilot the Mech and provide either cover fire, or be the tip of the spear, assaulting a location. In order to make this work you will need a team, or need to communicate the plan to your team of Randoms and get them to cooperate. You will bring one Mech (I prefer Patriot for Bugs and Squids and Emancipator for Bots), and then bring 1 gun for each of your teammates (whichever they would normally bring themselves). In turn, they will bring one Mech for you. When you land, you call in your Mech, and the 3 Guns for your team. Your teammates *DO NOT* call in their Mechs. When your Mech dies, or runs out of ammo have the next teammate in line call in their Mech for you to pilot. You do this down the line, until your Mech is off CD and it is your turn again. On a planet with the DSS, you can theoretically call in a Mech every 92 SECONDS! You can’t even use all the ammo that fast! That means you can have a brand new Mech for every single Objective and Side Objective, and still have some left over for accidental deaths. On a non DSS planet the time between Mechs is only 142 Seconds (2min 22 seconds). Short enough to still fully utilize the Mech and immediately get into another one. And that’s it! Full uptime on a Mech for your team! Even when things get heated, you can blow all of your ammo as fast as possible and call in another Mech right away. Its almost impossible to go through all of the Mechs.`,
  ],
  weakness: `This is Team reliant. If you don’t have a team, or Randoms don’t want to participate you can’t really do this build. You can still play in a Mech and it is still powerful (especially with DSS CD) but you will not be able to spend the entire mission in a Cockpit.`,
  image: "/assets/builds/The_Mech_Driver_Build.jpg",
  tags: [
    "mech",
    "patriot",
    "emancipator",
    "team",
    "supply-pack",
    "ultimatum",
    "jar-5",
    "blitzer",
    "street-armor",
    "thermite",
  ],
  loadout: [
    // Armor
    {
      assetId: "SR-24",
      note: "The armor is completely up to you. I chose Street Scout just in case I had to use my primary",
    },
    // Primary
    {
      assetId: "JAR-5",
      note: "Primary is completely up to you! I chose the JAR-5 Dominator for Bots and the ARC-12 Blitzer for Bugs & Illuminate since it handles everything.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "Secondary is completely up to you! I chose the GP-20 Ultimatum in case I needed to deal with heavies or Objectives",
    },
    // Throwable
    {
      assetId: "G-123",
      note: "Grenade is completely up to you! I chose G-123 Thermite to deal with any heavies",
    },
    // Stratagems
    {
      assetId: "EXO-45",
      note: "This is what you will be in the ENTIRE mission. Patriot for Bugs & Squids, Emancipator for Bots (or whichever you like). Call yours in first, then have your Teammates call them in 1 at a time when you run out of ammo.",
    },
    {
      assetId: "EXO-49",
      note: "Alternate Mech: Emancipator for Bots. Use whichever you like.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1kcamz8/build_a_day_day_20/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=il12sho2FFY",
    discord: "https://discord.com/channels/1301285072896266252/1367232110620049508",
  },
};
