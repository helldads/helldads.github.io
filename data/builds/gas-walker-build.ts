import { Build } from "../builds";

export const gasWalkerBuild: Build = {
  slug: "gas-walker-build",
  title: "Gas Walker Build",
  slogan: "Reaper of the fields, shadow in the mist.",
  description: [
    `You are the gas walker, the reaper of the fields, the shadow in the mist, the bane of your enemies. Your objective is to litter the location with gas (gas mines, and an Orbital) and then walk into the fields and scorch your enemies to a burnt crisp. The Flamer can kill EVERYTHING in the game, Devastators, Alpha Commanders, Chargers, Bile Titans (their belly), Tanks (The back vent between the treds), Hulks, Factory Striders (their belly), Cannons, AA Guns, Mortars, Anti Personel Turrets, Impalers. The Gas gives you the cover you need to walk right up to your target and nuke them with Fire, EXCECPT....for Bile Titans and Factory Striders and Tanks. You need to be a little more sneaky with them, close the gap, get up under them, and cook baby cook. Even on bots (or should I say, ESPECIALLY on BOTS) the gas gives enough confusion for you to close the gap needed to let the Flamer do what it does best. Gas Mines should go down on any base you are assaulting or any bot drop you are defending. Any area not covered by mines gets the Orbital Gas. Any enemies still out of range of that get Gas Grenades as well as any patrol you run across. If for some reason there are still any enemies not High on your gas, your dog will make sure they are tout suite. Gas lasts 10 seconds after they leave the cloud (or after your dog smokes them) which gives you PLENTY of time to walk around torching things. Xbow is used just to close Fabricators and Bug Holes and to shoot the random enemy that you dont feel like waddling over to burn to a crisp (too far away in that chunky armor amirite?), and the Ultimatum is mainly for Titan bug holes or Objectives.`,
  ],
  weakness: `This build takes some tact, some preparation, and some planning. While it is absolute democracy to run around and burn everything while walking through clouds of poisonous gas, you will have to plan out your assaults and get your gas in place to make it work. Unexpected bot drops on your head, or Rambo charging into bases will not end well. If your Gas is on CD and you are out of Gas Grenades you will also find yourself in a pinch, so with that heavy armor and reliance on gas you are going to have to take it a bit slower. Xbow can kill gunships, but its a little tough.`,
  image: "/assets/builds/gas-walker-build.jpg",
  tags: [
    "flamer",
    "doggo",
    "gas-mine",
    "orbital-gas",
    "gas-grenade",
    "xbow",
    "ultimatum",
    "gas-immune-armor",
  ],
  loadout: [
    // Armor
    {
      assetId: "AF-50",
      note: "Makes you immune to gas. Essential for walking through your own clouds.",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "Used for closing bug holes/fabricators and picking off distant enemies.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "Mainly for closing Titan bug holes or objectives.",
    },
    // Throwable
    {
      assetId: "G-4",
      note: "Keep the gas flowing. Use for patrols and filling gaps in your gas field.",
    },
    // Stratagems
    {
      assetId: "MD-8",
      note: "Biggest area of gas. Deploy when assaulting or defending positions.",
    },
    {
      assetId: "AX/TX-13",
      note: "Best doggo for cleaning up stragglers and helping with small units.",
    },
    {
      assetId: "OGS",
      note: "Orbital gas for covering large areas not protected by mines.",
    },
      {
      assetId: "FLAM-40",
      note: "Flamethrower: Kills everything. Use for all enemy types, aim for weak spots on heavies.",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
