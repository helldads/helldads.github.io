import { Build } from "../builds";

export const exterminatorBuild: Build = {
  slug: "exterminator-build",
  title: "The Exterminator Build",
  slogan:
    "You are the Exterminator! Bring your Gas and put those bugs to rest!",
  description: [
    `This is a Quasi Support Build, and as such you will be following your team around keeping those nasty bugs gassed up and confused! Gas does 25 dmg per second, and lasts for 10 seconds. That means with 1 pass you can kill all hunters and below. Just spray and forget. We also bring the Torcher Primary to light things on fire. Fire lasts about 3 seconds and does 50 dmg per second (for a total of 150 dmg) and the Torcher does 375 dmg per second.. This means with one pass of gas and one pass of fire we can let all Warriors, Hive Guards, and Stalkers melt to death. Alpha Commanders will take some concentrated fire to their head, or a couple of passes. For Chargers, Impalers, and Bile Titans we bring Thermite. Gas the Chargers, chuck a Thermite and forget about them. To help keep up with the flood of Chargers we are going to bring the Engineering Kit for a total of 5 Thermite. When the Bile Titans are especially annoying, and all you want to do is gas bugs, throw a Orbital Rail Cannon Strike so you don’t have to stop your Crowd Controlling. If you find enemies coming from more than one direction, that’s when we can bust out the Orbital Gas Strike. Throw that bad boy in one direction while you go spray the other. Your team will be protected in a bubble of beautiful green gas. And for the biggest of infestations we throw out the Gas Mines for the biggest cloud of gas you’ve ever seen. Between the Mines, the Gas Strike, and your Sterilizer, you can cover all directions for your team to make sure no bug goes un-gassed. And to help out even further, we will be bringing the Grenade Pistol as our secondary. If you are alone, or your team is swamped, we can take it upon ourselves to close those bug holes. Gas anything in your way as you weave through a nest and pop those holes closed one after another. When your teammates are overwhelmed, they’ll be praising your arrival as you peel all the bugs off of them as, The Exterminator.`,
  ],
  weakness: `This is a Quasi Support build, you have tools to help you deal with just about everything, but you will perform much better supporting teammates. The AT is lacking with this (and Bile Titans and Impalers can’t be Crowd Controlled) so you will be relying on your team to kill them, while you keep everything else Dazed and Confused.`,
  image: "/assets/builds/The_Exterminator_Build.jpg",
  tags: ["support", "crowd-control", "bugs", "gas", "fire", "dot"],
  loadout: [
    // Armor
    {
      assetId: "CE-27",
      note: "Engineering Kit Armor is used to give us the most Thermite to deal with the swarms of Chargers.",
    },
    // Primary
    {
      assetId: "FLAM-66",
      note: "Torcher is used to double dip on DOT (damage over time) damage. Gas them up then light them on fire (if your teammates aren’t their to gun them down).",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "Grenade Pistol is used to close Bug Holes, just be sure to gas those bugs first.",
    },
    // Throwable
    {
      assetId: "G-123",
      note: "Thermite is our AT option, mainly for the Chargers. Gas them up, stick em with Thermite and forget about them.",
    },
    // Stratagems and other items
    {
      assetId: "TX-41",
      note: "Sterilizer is our Main Weapon. We will be running around making sure everything has a heavy dose of Gas. If everything looks confused we can swap to the Torcher to add some fire.",
    },
    {
      assetId: "MD-8",
      note: "Gas Mines are our big Anti-Breach Gas ability. Throw them down for every breach to make sure everything coming out is dazed and confused.",
    },
    {
      assetId: "OGS",
      note: "Orbital Gas Strike is there to help us Crowd Control 2 different directions. Throw Gas Strike one way, go spray the other.",
    },
    {
      assetId: "ORS",
      note: "Orbital Rail Cannon Strike is our best bet against Bile Titans. We aren’t the teams AT, but we can assist when needed. Take out a particularly annoying BT or just save yourself from one if alone.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1kkaxf9/build_a_day_day_30/",
    full: "https://www.youtube.com/watch?v=sYU1UPP3me8",
    highlights: "https://www.youtube.com/watch?v=f5h4q01B-EA",
    discord: "https://discord.com/channels/1301285072896266252/1371226411389423647",
  },
};
