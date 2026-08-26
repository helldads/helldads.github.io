import { Build } from "../builds";

export const deadSilentBuild: Build = {
  slug: "dead-silent-build",
  title: "Dead Silent Build",
  slogan: "This is the Ultimate Stealth Build.",
  description: [
    `You will be Dead Silent and enemies will have no idea you are operating all over their territory. I highly recommend watching our videos on Suppressors and Bot Detection as well as Stealth + Redacted Warbond. This information will allow you to understand the stealth and bot mechanics so you can utilize this build to its fullest.`,
    `Lets start with the Silent part. Throwing knives and the Chainsaw are 100% silent. You can kill troopers and Rocket Striders with the throwing knives and no one will react. The Chainsaw can destroy Fabricators quietly, even with an enemy 5m away. These 2 tools allow you to take out bases without a sound. When you run into Devastators, that's when we bust out the M6C Socom Pistol. Crawl up to 15m and pop that head.`,
    `If you find an Objective has some Hulks or War Striders, this is where the Railgun Shines. it is technically "Unsuppressed" but as long as you clear any enemies near the Heavy so you wont cause a
  "near miss" you can one shot them and prevent aggro. Additionally we bring the Jump Pack so we can move quickly, and if needed, quickly break line of sight by jumping away to get behind cover.`,
    `The crossbow is also "Unsuppressed" but the explosion sound it makes is louder than the shot and can be used to "lure" enemies away. It can also destroy Fabricators you cant get to with your chainsaw, just make sure there aren't enemies close enough to get hit with a near miss" from the explosion of the crossbow. And finally the Solo Silo is used to blow up bases or Objectives at over 160m where enemies haven't rendered in, so there is no aggro.`,
  ],
  weakness: `This build can go 0 Bot Drops and minimal aggro, but also has the tools to get into a fire fight if needed.`,
  image: "/assets/builds/Dead_Silent_Build.webp",
  tags: ["automatons", "light", "stealth", "projectiles", "explosive"],
  loadout: [
    // Armor
    {
      assetId: "RS-89",
      note: "Reduced Signature is the best stealth armor now. 50% sound reduction 40% detection range.",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "Primary is the Crossbow for luring patrols and closing Fabricators.",
    },
    // Secondary
    {
      assetId: "M6C",
      note: "M6C/SOCOM Pistol is our silent weapon. You need to be at 15m or closer to one shot devastators and berserkers",
    },
    // Throwable
    {
      assetId: "K-2",
      note: "Throwing knives are 100% silent. We use these to kill Rocket Striders (hit the missile) or any little bots we want to kill without making sound.",
    },
    // Stratagems and other items
    {
      assetId: "RS-422",
      note: "Railgun is used to kill heavies without causing aggro. It can also snipe Mortars and AA Guns allowing us to complete those at a far enough distance to avoid aggro.",
    },
    {
      assetId: "CQC-9",
      note: "Chainsaw is used to destroy Bot Fabricators without making any noise or causing any aggro.",
    },
    {
      assetId: "MS-11",
      note: "Solo Silo is used to destroy bases, Factory Striders, or Objectives from far away. Use this at 160m+ and move afterwards to prevent detection.",
    },
    {
      assetId: "LIFT-850",
      note: "Jump Pack is used for mobility, but also to get into the back door of bases and objectives.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1qtxwms/build_60_dead_silent_build/",
    full: "https://www.youtube.com/watch?v=qvItRtrD-IQ",
    highlights: "https://www.youtube.com/watch?v=RKYvLoO6m9I",
    discord:
      "https://discord.com/channels/1301285072896266252/1465127741467656212",
  },
};
