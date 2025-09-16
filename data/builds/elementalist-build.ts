import { Build } from "../builds";

export const elementalistBuild: Build = {
  slug: "elementalist-build",
  title: "The Elementalist Build",
  slogan: "Master of Elements and King of Area Denial!",
  description: [
    `You are the Elementalist, Master of Elements and King of Area Denial! Your job is absolute battlefield control. Is your team holding a position and being surrounded by enemies? Surround yourself with fire and gas and prevent the enemies advance! Is that a breach? Not any more! Gas Mines and an Orbital Napalm Barrage will make sure that 50sq meters is inaccessible. Got a couple of patrols wandering your way? A quick Orbital Gas and Eagle Napalm will make sure they cannot pass. No matter the situation, your role is to deny enemy movement by pairing Gas and Fire. For smaller engagements, Orbital Gas and Eagle Napalm pair great together. For those really big fights, Gas Mines and Orbital Napalm Barrage go together. And for itty bitty groups like POIs, Gas Mines and your Breaker Incendiary should do just fine. Wherever you go, you put up walls of Fire and Gas to keep your team safe, this will eliminate all threats under Heavies. You bring an Ultimatum for those times when you cannot escape a Heavy, but most Heavies should be left to your team. There is flexibility in the pairings, as the Cooldowns don’t line up perfectly. So if Gas Mines are up but ONB is not, throw an Eagle in there. Got Eagle Napalm but no Orbital Gas? Throw some Gas Grenades. Mix and Match, but make sure to pair Gas and Fire for the confusion plus double DOT damage.`
  ],
  weakness: `This build is Pure Chaff clear and Area Denial. You do not have an answer for heavies. It is advised to follow your AT Helldiver and protect them with your awesome Fire and Gas power.`,
  image: "/assets/builds/elementalist-build.jpg",
  tags: ["elementalist", "area-denial", "gas", "fire", "ultimatum", "breaker-incendiary", "engineering-armor", "gas-grenades"],
  loadout: [
    // Armor
    { assetId: "ENGINEERING", note: "Engineering Armor gives you 2 more Gas Grenades. We use them a lot, and the +2 goes a long way." },
    // Primary
    { assetId: "BREAKER-INCENDIARY", note: "Breaker Incendiary is your main weapon. Use it to sweep the battlefield and light enemies who are in your Gas on Fire. One pass will take out a pack of Hunter or Shriekers" },
    // Secondary
    { assetId: "ULTIMATUM", note: "Ultimatum for those times when you cannot escape a Heavy, but most Heavies should be left to your team." },
    // Throwable
    { assetId: "GAS-GRENADE", note: "Gas Grenades get used a lot to fill gaps in Gas Cooldowns, and to handle any small engagements." },
    // Stratagems
    { assetId: "EAGLE-NAPALM", note: "This is your Medium Area Denial for the Fire Element. Pair this with Orbital Gas or Gas Grenades to cut off Patrols or enemies in Objectives" },
    { assetId: "ORBITAL-GAS", note: "This is your Medium Area Denial for the Gas Element. Pair this with Eagle Napalm" },
    { assetId: "ONB", note: "This is your Large Area Denial for the Fire Element. Use this mainly for Breaches. Pair this with Gas Mines." },
    { assetId: "GAS-MINES", note: "This is your Large Area Denial for the Gas Element. Use this on Breaches, or for other large spaces that need Gas" },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
