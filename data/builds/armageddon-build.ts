import { Build } from "../builds";

export const armageddonBuild: Build = {
  slug: "armageddon-build",
  title: "Armageddon Build",
  slogan: "Let’s Have a Blast!",
  description: [
    `You are Armageddon, the end of the world for our enemies. As you approach, their worlds burn. Is there a breach? Then throw a 380, 120, Napalm and Walking. A bug base? Then throw a 380, 120, Napalm and Walking. That Mega Nest? Then throw a 380, 120, Napalm and Walking. When they are off Cooldown you are ready to unload the full force of Super Earth. When they are all on Cooldown your Blitzer (Jar 5 bots) will do all of the heavy lifting for all bugs under Chargers / Hulks. Thermites take care of Chargers, Hulks, and Tanks. The Ultimatum takes out Impalers and Bile Titans and Factory Striders. Show our enemies why they should fear the might of managed democracy.`,
  ],
  weakness:
    "You have no anti Air and longish CDs (although if you save them for breaches and big bases you should have the firepower each time). In between Uses you will have to rely on your Primary, Secondary and Grenades (and of course your team).",
  image: "/assets/builds/Armageddon_Build.jpg",
  tags: [
    "bugs",
    "bots",
    "medium",
    "assault",
    "projectiles",
    "explosions",
    "fire",
  ],
  loadout: [
    // Armor
    {
      assetId: "SC-37",
      note: "No real Armor requirement for this build. I find the extra throw distance to be helpful.",
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
      assetId: "O120HB",
      note: "120 is the quickest CD you have at 180 seconds. If you have a Medium base or objective, or even a Breach or Bot drop this will still thin the herds quite well.",
    },
    {
      assetId: "O380HB",
      note: "380 is the biggest of Booms! This will absolutely eliminate a large base or Bot Drop / Bug Breach to include all of the heavies (usually).",
    },
    {
      assetId: "OWB",
      note: "The 380s weird wandering brother. Same 380 shells but now they slowly march forward. Usually good for fortresses or for leading the charge into a base.",
    },
    {
      assetId: "ONB",
      note: "Orbital Napalm Barrage is the ultimate area denial. It will shut down all Bot Drops and Breaches leaving only heavies to be mopped up. If you don’t want to deal with something for a while, throw this at it",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1n3hxyy/build_4_armageddon_build/",
    full: "https://www.youtube.com/watch?v=_AqHX5dE4EY",
    highlights: "https://www.youtube.com/watch?v=2RKdboNygdA",
    discord:
      "https://discord.com/channels/1301285072896266252/1442904115272220723",
  },
};
