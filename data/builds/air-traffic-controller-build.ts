import { Build } from "../builds";

export const airTrafficControllerBuild: Build = {
  slug: "air-traffic-controller-build",
  title: "Air Traffic Controller Build",
  slogan: "Show Eagle-1 the way, she never misses.",
  description: [
    `This build is the Eagle-1 version of the Apocalypse Build, but instead of throwing all Orbitals, you are throwing all Eagles! Instead of shooting your guns, you will be telling Eagle-1 where to shoot her guns! You will have 16 total Eagles every 2 min, and will have an Eagle answer for every problem. Got a patrol walking towards you in a line? Eagle Strafe. Got a breach, or large group? Eagle Cluster. Got a Charger, Impaler, or Bile Titan? Eagle 110's. Got a Nest, group of Chargers, or Bile Titans? Eagle 500kg. No, you cannot throw them all at the same time, but with a ~ 6 sec CD between uses, it doesn’t matter. Just answer the current problem with an Eagle, and you will have another Eagle for the next problem. If everything is quiet, go ahead and manual rearm so you can have all 16 Eagles back and ready to roll for the next engagement. Your team will thank you when you are dropping an Eagle every 6 seconds for almost 2 min straight. Because we mainly focus on throwing Eagles at all of our problems, the Armor, Primary, Secondary and Grenade are all Flex. These are my choices. For Grenade, I chose Stun Grenades, they help line up your 110's on those slippery Chargers, and help buy time when Predators are rushing you. To enhance that I wear Engineering Armor for more Stun Grenades. For the Primary I bring the Eruptor, this is a great pair for the 110's allowing you to finish Bile Titans and Chargers who decide not to die to a direct hit. To compensate for the danger of the Eruptor I like to bring the Talon as a Secondary. No ammo, good damage, very reliable. But with 16 Eagles, you will spend most of your time point Eagle-1 at your enemies instead of your guns. Now go! Show Eagle-1 the way, she never misses.`,
  ],
  weakness: `Eagle-1 never misses, but that means she never misses you either. This build does not do well with Danger close, and kind of like the Armageddon Build, is a pseudo support build. You will amplify your team by bringing 16 Eagles to every fight.`,
  image: "/assets/builds/air-traffic-controller-build.jpg",
  tags: [
    "eagle-1",
    "support",
    "air-strike",
    "crowd-control",
    "flex",
    "stun",
    "engineering",
    "eruptor",
    "talon",
  ],
  loadout: [
    // Armor
    {
      assetId: "CE-27",
      note: "Engineering Kit for more Stun Grenades to help land 110's on Chargers.",
    },
    // Primary
    {
      assetId: "R-36",
      note: "Eruptor to help finish off any Heavies the 110's didn’t. It also allows you to close Holes.",
    },
    // Secondary
    {
      assetId: "LAS-58",
      note: "Talon to cover the close ranges the Eruptor cannot.",
    },
    // Throwable
    {
      assetId: "G-23",
      note: "Stun Grenades will save your hide when 4 stalkers show up around you and will help you line up 110's on those slippery Chargers.",
    },
    // Stratagems
    {
      assetId: "E110RP",
      note: "Eagle 110's are your choice for Chargers and Impalers, and can flex Bile Titans as well (but will need to be finished with Eruptor)",
    },
    {
      assetId: "ESR",
      note: "Eagle Strafe is your choice when you have a line of enemies marching to you, either patrols or a flood coming from a breach",
    },
    {
      assetId: "ECB",
      note: "Eagle Cluster is your choice for overwhelming enemy numbers. It has the biggest radius and is perpendicular to you. This is the best choice when bombing breaches",
    },
    {
      assetId: "E500",
      note: "Eagle 500kg is your choice for Bile Titans, medium nests, or any other Heavies you feel like blowing up.",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
