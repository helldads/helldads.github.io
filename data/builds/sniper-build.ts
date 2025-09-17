import { Build } from "../builds";

export const sniperBuild: Build = {
  slug: "sniper-build",
  title: "The Sniper Build",
  slogan: "Stealth, overwatch, and precision!",
  description: [
    `This build takes strategies from the Stealth Build and Overwatch and mashes them together. You use your hoverpack to get to high ground (out of reach of your enemies), and provide cover for your team by eliminating high priority targets. Using the enemies AI and the distance of your sniper, you can eliminate enemies at objectives one by one without any of them being alerted. Put your MG down when in position to cover your back, it will be an early detection system, letting you know when a patrol is approaching your position. When in a firefight it will also be a useful distraction / chaff clear, while you work on your priority targets. Eagle Strafe makes a great Fabricator clear or shield destroyer, and is a quick crowd clear should you need to remove an unwanted patrol. When changing firing locations, Gas Grenades provide excellent cover and confusion to any enemies that spot you or get in your way. We bring the Grenade Pistol for the few times we have to get in close and close Fabricators and Ships by ourselves. And we use Peak Physique so there is no drag on the AMR (can’t be missing shots on moving targets because your arms are too weak!). The trick to this build is learning priority targets. Priority targets doesn’t necessarily mean killing the biggest thing in the room. It means removing the biggest danger to your team at any given moment. That could mean ignoring the Factory Strider that is turned around and shooting the Heavy Devastator thats about to come around a rock and shred your unaware teammates to pieces. It means shooting that lone Rocket Dev who keeps ragdolling your team, or popping the lone Commissar who is about to call in a flare. Assess the situation, determine which enemy poses the greatest loss of life to your team, and eliminate it.`,
  ],
  weakness: `This build is better at long range than CQB, although you can function with enough skill. You are more of a support, covering your team while they work. And while you CAN kill everything in the game, certain heavies like Tanks and Factory Striders are better left to your AT.`,
  image: "/assets/builds/sniper-build.jpg",
  tags: [
    "sniper",
    "hoverpack",
    "amr",
    "mg-sentry",
    "eagle-strafe",
    "gas-grenade",
    "peak-physique",
    "tenderizer",
    "gp-31",
  ],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "Peak Physique is required to remove the drag on the AMR. It makes hitting moving targets, and acquiring new targets much easier.",
    },
    // Primary
    {
      assetId: "AR-61",
      note: "AR-61 Tenderizer: This is our CQB weapon. Excellent for popping heads when we have to get up close and personal.",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "GP-31 Grenade Pistol: Used to close Fabricators and Ships when we have to get close and do it ourselves.",
    },
    // Throwable
    {
      assetId: "G-4",
      note: "G-4 Gas: Used to disorient enemies you come across and buy you time to escape or kill.",
    },
    // Stratagems
    {
      assetId: "APW-1",
      note: "APW-1 Anti-Materiel Rifle: This is your main weapon. Take the high ground and remove those priority targets. Can kill everything in the game including AA Guns, Mortars, and Anti Personnel turrets.",
    },
    {
      assetId: "LIFT-860K",
      note: "LIFT-860 Hover Pack: Used to get to high ground. Find the highest rock or building near your team so you can provide covering fire.",
    },
    {
      assetId: "MGS",
      note: "A/MG-43 Machine Gun Sentry: Early detection system. Put this down when in position and it will let you know if a patrol is walking up on you. It will also take care of chaff while you eliminate priority targets.",
    },
    {
      assetId: "ESR",
      note: "Eagle Strafing Run: Long range Fabricator closer / shield breaker. Also a great Patrol clear in a pinch when your position is compromised.",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
