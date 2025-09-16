import { Build } from "../builds";

export const emplacementJockeyBuild: Build = {
  slug: "emplacement-jockey-build",
  title: "Emplacement Jockey Build",
  slogan: "Hold the line with super support weapons!",
  description: [
    `This build plays like the Hold the Line Build mixed with the Overwatch build. You don’t bring a support weapon, you bring the Super versions of support weapons. You have a Super Grenade Launcher, a Super HMG, and a Super Recoiless Rifle. They cooldowns are quick enough that you can plop one of these down for every engagement, and put ALL of them down for breaches, drops, or missions that require you to hold position (like flag defense). If your team decides to use all this firepower, great. If not, do not fret! You can just hop between them as needed! Grenade Launcher is your go to crowd clear and will handle all chaff and mediums. HMG is your Medium focus clear with chaff and heavy capabilities, and is used when range is needed more. The AT Emplacement is your anti-heavy although it can also chew threw light and medium enemies as well. Put them all down and then swap between them as needed. You will also bring Gas Mines which go down in front of your deployments to keep the enemies back and confused. With a 2 min CD you will have these for every Emplacement drop. When pushing an objective you can stagger the Emplacements. They are incredibly powerful on their own. The HMG has the most flexibility with its ability to kill just about everything if you know where to aim. The Grenade Launcher has the quickest Cooldown, but cannot handle heavies, so it pairs well with the AT Emplacement (or a dedicated AT team member). The heavy armor lets you take a beating while you hold your ground. Primary, Secondary, and Grenade are flexible as you will mainly be using your emplacements. I found success with the Talon and the Thermites to handle anything while moving.`
  ],
  weakness: `This build does take some set up and some distance. You will have a hard time if you have a breach under your feet and you just drop your Emplacements where you are. Make sure you have enough time to deploy and orient your Emplacement, but once they are down, you should be able to keep everything back.`,
  image: "/assets/builds/emplacement-jockey-build.jpg",
  tags: ["emplacement", "grenade-launcher", "hmg", "at-emplacement", "gas-mines", "heavy-armor", "talon", "blitzer", "thermite"],
  loadout: [
    // Armor
    { assetId: "HEAVY-ARMOR", note: "The chunkiest armor with Explosive Resist. This will keep you strong while you hold your ground" },
    // Primary
    { assetId: "BLITZER", note: "This slot is flexible. I found success with the Blitzer on all fronts (yes even bots). The stun is great for Berserkers, Predator Strain and the Illuminate" },
    // Secondary
    { assetId: "TALON", note: "The Talon is a great secondary. Hold back swarms of Hunters, kill Devastators in one pop, slay tons of voteless, all with 0 ammo. Can’t go wrong here." },
    // Throwable
    { assetId: "THERMITE", note: "This fills the weakness of the Grenade Launcher Barricade. Since it can’t kill heavies you can chuck a Thermite and hide behind its cover." },
    // Stratagems
    { assetId: "SUPER-GRENADE-LAUNCHER", note: "This is the fastest CD Emplacement you have at 102 seconds. Use it Often. This is your main Chaff / group clear and can handle up to Medium enemies. If there’s a lot of guys, use this bad boy" },
    { assetId: "SUPER-HMG", note: "This is a soloing machine. It rips through Medium enemies and chaff and can flex Heavies whenever needed. If you only have time for 1 Emplacement, its this one." },
    { assetId: "SUPER-AT-EMPLACEMENT", note: "This is your anti heavy answer. If you have some behemoths walking around, this will put them down quick. On bots this will also wipe out entire bases with the right vantage." },
    { assetId: "GAS-MINES", note: "These only have a 2 min CD and should be able to cover your Emplacements every time you put them down. Just lay them out in the direction of the enemy and let it keep them at bay while you unleash democracy upon them." },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
