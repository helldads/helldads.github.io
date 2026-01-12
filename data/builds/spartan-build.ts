import { Build } from "../builds";

export const spartanBuild: Build = {
  slug: "spartan-build",
  title: "Spartan Build",
  slogan: "",
  description: [
    `Melee! Raise those shields and stab some bugs! Stun lance 1 shots small enemies (with headshots), and 2 shots Guardians and Alpha Commanders (with headshots), it also stuns AND knocks back.`,
    `This actually makes you a great frontline and with some favorable terrain you can hold back a breach by yourself. When fighting a swarm stab right to left (as your left side has the shield and protects you). Stab each enemy once to stun and knockback and keep you safe and then do another pass to finish anything still standing. Repeat until all your enemies are vanquished. When a Charger charges you, hold your ground with your shield up and stab his leg as he makes contact. This will stop the charger dead in its tracks. Then just jab his leg 5 times and he’s down. Impalers take about 11 jabs to the squishy part of their face, but you also have Obital Rail Cannon, Orbital Precision Strike and 500kg for them and Bile Titans. Xbow is used for Spore Spewers, Shrieker Nests, Bug Holes, and Spewers (or any other exploding bugs). Stun grenades mainly used to stop Spore Chargers so you can drop an OPS on them (their explosion is survivable in melee with the Heavy Armor, make sure to Stim).`,
  ],
  weakness: `Shriekers and Spewers / exploding bugs. Shriekers can be taken down with shield and stab but its tedious. Spewers are handled with Xbow, but on maps with spewers there is alot of weapon swapping which can be problematic when theres alot going on (make sure to prioritize them before poking bugs).`,
  image: "/assets/builds/Spartan_Build.jpg",
  tags: [],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "Peak Physique armor is used for the 100% Melee damage and is required for this build",
    },
    // Primary
    {
      assetId: "R-2",
      note: "The Amendment is used to shoot down flying units and stab anything that gets in the way while doing so",
    },
    // Secondary
    {
      assetId: "CQC-2",
      note: "The Sword is used to cleave through chaff like Hunters or Voteless",
    },
    // Throwable
    {
      assetId: "G-142",
      note: "The Pyro Grenades are great at chaff clear, area denial, and can put in some work on beefy units",
    },
    // Stratagems and other items
    {
      assetId: "SH-20",
      note: "This is your shield. Earn it! Will block all melee attack, including Charger stampedes. Keep it up and keep stabbing.",
    },
    {
      assetId: "SH-20",
      note: "Ballistic Shield is used to block melee and ranged attacks to allow us to get in close to chop and stab things.",
    },
    {
      assetId: "E500",
      note: "This slot is Flex. I choose 500kg for bugs, Strafe for Illuminate and 110's for Bots.",
    },
    {
      assetId: "ORS",
      note: "This slot is also Flex. I choose Orbital Rail Cannon for bugs (for BTs), Gas Mines for Illuminate (for anti drop), and Hover Pack for bots so I can ride Factory Striders like a bull.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1kp6vym/3_sword_style_build/",
    full: "https://www.youtube.com/watch?v=mLN8A0iF5SU",
    highlights: "https://www.youtube.com/watch?v=bcICEx0Txok",
    discord:
      "https://discord.com/channels/1301285072896266252/1373449307658780723",
  },
};
