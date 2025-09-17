import { Build } from "../builds";

export const demolitionistBuild: Build = {
  slug: "demolitionist-build",
  title: "Demolitionist Build",
  slogan: "Bringer of the booms!",
  description: [
    `You are the Demolitionist, the bringer of the booms. Your main focus is Objectives. Is there a Nest or a Base? You are the one to close the Holes and the Fabricators while your team lays down cover fire. With the Grenade Launcher in your hands and a Supply Pack on your back, you have enough explosives to bring down the house. Once the Objective is clear, back up your team with some explosive crowd clearing capabilities. Your 120 will help you Demo medium and small bases, while your 380 will help you Demo large ones. If there is no base to dismantle, the 120 and 380 make a great counter to any breach / drop that decides to get in your way. Throw in a couple of clips from your Grenade Launcher and that breach or drop is gone. Wen you come across some Elites, like Bile Titans or Factory Striders, your Ultimatum makes quick work of them, for the standard Heavies like Chargers and Hulks, you have Thermite. And when those little guys get too close a simple Primary like the Dominator or Blitzer should be more then enough. Engineering Armor allows you to control the recoil of the Grenade Launcher better and gives you 2 more Thermite for even more booms. Now go, show the enemies of democracy why you are called, The Demolitionist.`
  ],
  weakness: `You have no anti Air, Gunships and Shriekers will be annoying. Also, your only AT is Thermite and the Ultimatum, if you get a map with a lot of Hulks or Chargers and other Heavies, its going to be a bid tedious, luckily you have that Supply Pack.`,
  image: "/assets/builds/demolitionist-build.jpg",
  tags: ["demolitionist", "grenade-launcher", "supply-pack", "ultimatum", "thermite", "engineering-armor", "dominator", "blitzer"],
  loadout: [
    // Armor
    {
      assetId: "CE-27",
      note: "Engineering Armor helps you control the Grenade Launchers recoil and gives you 2 more Thermite for those Heavies",
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
      note: "Used on Chargers, Hulks, and any other Heavies that need blowing up.",
    },
    // Stratagems
    {
      assetId: "GL-21",
      note: "Cant be the Demolitionist without the Grenade Launcher. Will obliterate everything under Heavies in waves.",
    },
    {
      assetId: "B-1",
      note: "Supply Pack keeps your Grenade Launcher fed and turns it into a never ending stream of explosions. Not to mention all the free Ultimatums and Thermite.",
    },
    {
      assetId: "O120HB",
      note: "120 is your Medium sized demolition cooldown. Use this on Medium or Small bases, or pair it with 380 for a quick stop to breaches or bot drops.",
    },
    {
      assetId: "O380HB",
      note: "380 is the biggest of Booms! This will absolutely eliminate a large base or Bot Drop / Bug Breach to include all of the heavies (usually).",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
