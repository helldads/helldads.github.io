import { Build } from "../builds";

export const missionImpossibleBuild: Build = {
  slug: "mission-impossible-build",
  title: "Mission Impossible Build",
  slogan: "The Mission? Impossible.",
  description: [
    `Complete an entire Bot mission without a single Bot Drop and with minimal aggro. You will combine big explosions with stealth. Wait what? You heard me! Stealthsplosions!
    Certain big booms can be used in certain ways as to not grab aggro.`,
    `For example, we will be taking the Solo Silo so we can lob rockets at bases or objectives that are over 160m away. This is the distance enemies render in, so shooting targets further than this doesn't cause any aggro. Every time its off CD, drop it and shoot it at something far far away (recommended to chip away at that fortress).`,
    `The Hellbomb Backpack also doesnt make any noise when you arm it. This means you can crawl right into a Jammer or Detector Tower, arm it, and crawl out for a stealthy explosion. Anyone close enough gets evaporated, anyone not close enough just turns to check out that weird noise. Huh... must
    have been the wind.`,
    `We are also bringing the C-4 Pack. While solo this is bugged to cause aggro on direct hit or near misses, in a group this is completely silent when sticking it to enemies. However, this is great for sticking to Fabricators or landing at
    the feet of enemies and then detonating. You can clear entire bases in 1 click with no aggro if you place them right. We want to juggle between these 3 Strategems as they come off CD and as needed depending on the objective.`,
    `Our final Strategem is the Orbital Smoke. If we do get caught we can use this to break Line of Sight (or use it pre-emptively to prevent bots from seeing you). It is also capable of destroying Detector Towers, so we have another quick option to dispose of certain objectives.`,
    `Our grenade is going to be the new Lure Mine. They are a great distraction, perfect for buying time to break line of sight. Or you can have it hold aggro while you pop bot heads. Troopers do NOT flare while the mine is out! If you get caught, drop this asap to distract them!`,
    `Our secondary is going to be the Re-Educator. This is also an "oh crap" button. If a heavy (or any other enemy) spots you and you need to buy time, pop them with this and let the gas do its thing. This is great for confusing Hulks while you stick C4 to them, or getting those berserkers to back off for a sec so you can shoot them in the face.`,
    `Our primary will be the Censor, this is the best stealth weapon we have allowing you to pop heads from pretty far away without anyone knowing. And finally our armor will be the new Reduced Signature armor. The sound and detection reduction can't be beat for getting in and out quietly.`,
  ],
  weakness: `You have no Anti-Air so take care of Gunship Fabricators quickly and quietly. Ideally you want to be stealthy with the tools, but at the end of the day, you do have big booms if you need them.`,
  image: "/assets/builds/Mission_Impossible_Build.webp",
  tags: ["stealth", "automatons"],
  loadout: [
    // Armor
    {
      assetId: "RS-89",
      note: "Reduced Signature is the best stealth armor now. 50% sound reduction 40% detection range.",
    },
    // Primary
    {
      assetId: "R-72",
      note: "R-72 Censor is our main weapon, easily one shots most chaff without drawing aggro.",
    },
    // Secondary
    {
      assetId: "P-35",
      note: 'P-35 Re-Educator is your "oh crap" button. If you get spotted (especially by a heavy), pop it with this to buy time to apply C4.',
    },
    // Throwable
    {
      assetId: "TM-1",
      note: "TM-1 Lure Mine is used to save you when you get aggro. Troopers will not flare while its out, throw one down and run away, or pop heads while they are distracted.",
    },
    // Stratagems and other items
    {
      assetId: "B-MD-C4",
      note: "B/MD C4 Pack is used to quietly take out heavies or fabricators. Quietly apply, then detonate all at once while out of line of sight.",
    },
    {
      assetId: "B-100",
      note: "B-100 Portable Hellbomb does not make sound when armed, use this to quietly take out objectives like Jammers or Detector Towers. Crawl in, arm, crawl out.",
    },
    {
      assetId: "MS-11",
      note: "Solo Silo is used to destroy bases, Factory Striders, or Objectives from far away. Use this at 160m+ where enemies wont render in to prevent aggro.",
    },
    {
      assetId: "OSS",
      note: "Orbital Smoke can be used to destroy Detector Towers, or used to help break Line of Sight",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1qbud05/build_55_mission_impossible_build/",
    full: "https://www.youtube.com/watch?v=R46YkYpkdck",
    highlights: "https://www.youtube.com/watch?v=FKSrk2pZzL0",
    discord:
      "https://discord.com/channels/1301285072896266252/1465127307936006398",
  },
};
