import { Build } from "../builds";

export const falloutBuild: Build = {
  slug: "fallout-build",
  title: "Fallout Build",
  slogan: "War. War never changes.",
  description: [
    `Welcome to the Apocalypse. When its time for the Nukes to drop, you are locked and loaded with your own! You are going to turn every enemy world into a wasteland by dropping Nuke after Nuke. But how do we survive the fallout? Especially with enemies danger close?`,
    `The new G/SH-39 Shield. Drop that bad boy at your feet, and lob the nuke at the closest enemies. Doesn't matter what you launch, the shield will absorb the hit and you will be standing amongst the rubble, unharmed. For maximum fallout we bring the Solo Silo, Hellbomb Backpack, EAT-411 Leveler, and the CQC-20 Breaching Hammer. Grab your hammer, Grab the Hellbomb and get to runnin.`,
    `When you run into a base, or a drop / breach. Plop down the Silo and the Leveler and let the bombs fly. Our secondary is also going to be the Ultimatum, obviously. More nukes is alway better. For our Primary, you can bring whatever you'd like. You need something for Chaff as the hammer will cover the Heavies: Our armor is also up to you. I chose Engineering Kit for more Shields to throw down.`,
  ],
  weakness: `This build does not have much anti-air for the Bot / Squid fronts. Unless you bring a Medium Pen Primary to deal with them. It also struggles with bug holes. If you are the only one closing holes you are going to have to use PODs and waste big explosions just to close a few.`,
  image: "/assets/builds/Fallout_Build.webp",
  tags: ["all-factions", "medium", "assault", "explosive", "energy"],
  loadout: [
    // Armor
    {
      assetId: "CE-74",
      note: "Any Armor can be used, I prefer more Grenades.",
    },
    // Primary
    {
      assetId: "LAS-13",
      note: "Any Primary you want! I was using the new Trident.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: 'We bring the Ultimatum as a mini "Fatman". Can\'t go wrong with more nukes.',
    },
    // Throwable
    {
      assetId: "G-SH-39",
      note: "G/SH-39 Shield is the clutch item in this build. Drop it at your feet and you can now survive that Hellbomb or Leveler going off.",
    },
    // Stratagems and other items
    {
      assetId: "CQC-20",
      note: "CQC-20 Breaching Hammer is what we carry with us. Destroys Fabricators and heavies like nobodies business.",
    },
    {
      assetId: "B-100",
      note: "Hellbomb backpack gets carried with our hammer. Whenever you need to eradicate an area, just push the button and drop the bomb.",
    },
    {
      assetId: "EAT-411",
      note: "EAT-411 Leveler is our Fatman, our handheld Nuke launcher. If you need more big booms, drop it down and fire away.",
    },
    {
      assetId: "MS-11",
      note: "MS-11 Solo Silo is one of our Nukes. Need some heavy firepower? Drop this and lauch.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1r09xpk/build_62_fallout_build/",
    full: "https://www.youtube.com/watch?v=Z4UyckeRnvk",
    highlights: "https://www.youtube.com/watch?v=nMasJNe7_0w",
    discord:
      "https://discord.com/channels/1301285072896266252/1470161271746728017",
  },
};
