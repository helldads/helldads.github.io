import { Build } from "../builds";

export const spartanBuild: Build = {
  slug: "spartan-build",
  title: "Spartan Build",
  slogan: "This is Democracy!",
  description: [
    `Melee! Raise those shields and stab some bugs! Stun lance 1 shots small enemies (with headshots), and 2 shots Guardians and Alpha Commanders (with headshots), it also stuns AND knocks back. This actually makes you a great frontline and with some favorable terrain you can hold back a breach by yourself.`,
    `When fighting a swarm stab right to left (as your left side has the shield and protects you). Stab each enemy once to stun and knockback and keep you safe and then do another pass to finish anything still standing. Repeat until all your enemies are vanquished.`,
    `When a Charger charges you, hold your ground with your shield up and stab his leg as he makes contact. This will stop the charger dead in its tracks. Then just jab his leg 5 times and he’s down.`,
    `Impalers take about 11 jabs to the squishy part of their face, but you also have Obital Rail Cannon, Orbital Precision Strike and 500kg for them and Bile Titans. Xbow is used for Spore Spewers, Shrieker Nests, Bug Holes, and Spewers (or any other exploding bugs). Stun grenades mainly used to stop Spore Chargers so you can drop an OPS on them (their explosion is survivable in melee with the Heavy Armor, make sure to Stim).`,
  ],
  weakness: `Shriekers and Spewers / exploding bugs. Shriekers can be taken down with shield and stab but its tedious. Spewers are handled with Xbow, but on maps with spewers there is alot of weapon swapping which can be problematic when theres alot going on (make sure to prioritize them before poking bugs).`,
  image: "/assets/builds/Spartan_Build.webp",
  tags: [],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "This armor will give you 100% more melee damage and is crucial for the bulld. I prefer the light for mobility, but the heavy allows you to survive a Spore Charger explosion.",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "This is your bug hole closer. your Spore Spewer and Shrieker Nest destroyer, and your answer to Bile Spewers and exploding bugs.",
    },
    // Secondary
    {
      assetId: "CQC-19",
      note: "You can't be a Spartan without your spear. This wespon has the longest range and most damage of the melee weapons AND stuns. The precision allows you to pop heads very easily for quick kills.",
    },
    // Throwable
    {
      assetId: "G-23",
      note: "This is used mainly to stop Spore Chargers so you can OPS them to avoid their explosion. Can be used to help control the hordes as well.",
    },
    // Stratagems and other items
    {
      assetId: "SH-20",
      note: "This is your shield. Earn it! Will lock all melee attack, including Charger stampedes. Keep it up and keep stabbing.",
    },
    {
      assetId: "ORS",
      note: "Bile Titans are the only enemy in the game who cannot be stabbed to death. This is your answer to them.",
    },
    {
      assetId: "E500",
      note: "This is used to close Medium size nests and to deal with Bile Titans or Impalers when Orbital Rail Cannon is on Cooldown.",
    },
    {
      assetId: "OPS",
      note: "This is your main option for dealing with Spore Charges. If there are none it can be used for Bile Titans and Impalers as well.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1k39wai/build_a_day_day_8/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=cx-TVYM5Gzc",
    discord:
      "https://discord.com/channels/1301285072896266252/1442894009558106142",
  },
};
