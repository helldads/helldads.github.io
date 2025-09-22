import { Build } from "../builds";

export const ghostBuild: Build = {
  slug: "ghost-build",
  title: "Ghost Build",
  slogan: "Sneaky Saboteur. You never existed.",
  description: [
    `Sneaky Sabateur. You don't exist, You never existed. The enemy will never even know you were there. You sneak in, plant bombs, and sneak out leaving rubble in your wake. This build is very fun and can easily go no kills on missions if desired. Smoke Grenade, Eagle Smoke, and Orbital Smoke give you plenty of cover to creep around, or can be used to break line of site with the bots and eventually make them lose interest. Holding grenade to have it pop on you is a great tactic for quick smoke on your location before you are discovered. The crossbow only attracts enemies to the location of the explosion (not from where you fire), so popping fabricators from a distance (and from smoke) can usually be done undetected. It is also a way to "lure" patrols away from you as they will go investigate the explosion. The Jump Pack will help you travel quickly, and if spotted, some smoke and a hop away and you are home free. The senator is what you will use to dispatch the few enemies should you need too. It is one of the quieter weapons in the game, and if you manage to get a 1 hit KO, other enemies at an obj or POI shouldnt notice the kill unless looking directly at it. The shield generator makes a great decoy for certain missions where you have to hold a point (flag or survey). Throw it somewhere off to the side and keep smoke on your objective and the bots will ignore you and go for they generator.`
  ],
  weakness: `This build is not really meant for a fight. If you get stuck having to fight you will struggle. It also has no AT, while you can kill Hulks with the senator you will not be killing Factory Striders, Tanks, or Towers. Turrets also don't really care that you are sneaking. Trying to take a Fortress can be difficult as the turrets and Anti Personel turrets seem to just see you regardless. You will need smoke and certain angles / entrances to make it work.`,
  image: "/assets/builds/The_Ghost_Build.jpg",
  tags: [
    "eagle-smoke",
    "smoke-grenade",
    "jump-pack",
    "shield-generator",
    "senator",
    "CB-9",
    "stealth-armor"
  ],
  loadout: [
    // Armor
    {
      assetId: "SC-34",
      note: "This armor will make you invisible to your enemies. You can practically walk right past them!",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "This is mainly for closing Holes / Fabricators, or taking care of Spore Spewers and Shrieker nests. It is also great for distracting and luring enemies.",
    },
    // Secondary
    {
      assetId: "P-4",
      note: "This is your main weapon. It has one of the lowest sound profiles and will give you the most bang for your buck per shot while still being quiet",
    },
    // Throwable
    {
      assetId: "G-3",
      note: "Smoke Grenades are your instant get out of jail free cards. Hold the Grenade until it pops in your hand to create a personal stealth bubble.",
    },
    // Stratagems
    {
      assetId: "ESS",
      note: "This is the best smoke in the game. It is predictable and the line it makes can be used to create walls or hallways of smoke. Use this liberally to hide your intentions.",
    },
    {
      assetId: "OSS",
      note: "This smoke isn’t as good as the Eagle, but it is good to pair with Eagle since it can be thrown at the same time giving you a larger area of concealment",
    },
    {
      assetId: "LIFT-850",
      note: "Jump Pack will help you zoom around the map and will help you get out of trouble should you be spotted. Use this to disengage once Line of Site is broken with smoke.",
    },
    {
      assetId: "SGR",
      note: "Shield Generator Relay: Provides a large area of protection. Use as a fallback or to cover objectives while you sneak around.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1k66mb0/build_a_day_day_12/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=bT3AxiC8OT8",
    discord: "https://discord.com/channels/1301285072896266252/1362456504094953562",
  },
};
