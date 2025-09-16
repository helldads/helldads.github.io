import { Build } from "../builds";

export const heavyGunnerBuild: Build = {
  slug: "heavy-gunner-build",
  title: "Heavy Gunner Build",
  slogan: "Big gun goes brrr!",
  description: [
    `You are the teams Heavy Gunner. You have a big gun that goes brrr. With Peak Physique you can swing this thing like a primary. The trick is to dive (or go prone) before unloading if you can. Hit the deck and unload the clip. The HMG can kill everything. And to keep that hungry machine fed, you will feed it with the supply pack. Stun Grenades pair wonderfully with this allowing you to stun any stubborn or quick enemies, or to allow you time to reload. The secondary is flexible, but the trusty Talon has not failed me yet, so I bring it with this build. Staying with the Heavy theme, we run the Eruptor as our Primary for closing Fabs / Holes, or for some heavy explosives when needed. To assist with our hose of large caliber rounds, we bring the Orbital Gatling Barrage. With a short CD you can throw this for every engagement. Throw it at the enemy and assist your ships fire with your own. And for the coup de grâce, when there are too many enemies for your limited magazine, plop down the HMG Emplacement for 300 rounds of Freedom. No reload. No Recoil. All Democracy.`
  ],
  weakness: `This build is ammo hungry, and even with peak physique the recoil takes a bit of practice to control. Lay down (or crouch) and fire in bursts (1,2,3 - 1,2,3 - 1,2,3). Other then that you should handle everything just fine, lots of stim, lots of stuns, lots of bullets. You may struggle with heavies until you get comfortable hitting their weakspots, but once you do you will be unstoppable. When in doubt, drop the HMG Emplacement.`,
  image: "/assets/builds/heavy-gunner-build.jpg",
  tags: ["heavy-gunner", "hmg", "peak-physique", "supply-pack", "stun-grenade", "talon", "eruptor", "gatling-barrage", "hmg-emplacement"],
  loadout: [
    // Armor
    { assetId: "PEAK-PHYSIQUE", note: "Peak Physique makes swinging the HMG like a primary. You will still need to crouch or go prone to control the recoil." },
    // Primary
    { assetId: "ERUPTOR", note: "This is your main Fabricator / Bug Hole closer. You can also use this to pop groups or enemies from a distance too far for your HMG" },
    // Secondary
    { assetId: "TALON", note: "The Talon is a great secondary. Very strong, hairpin trigger, no ammo." },
    // Throwable
    { assetId: "G-16", note: "Stun Grenades will keep your targets still so you can pound their face with 12.5mm Caliber rounds. Can also make space when trying to reload." },
    // Stratagems
    { assetId: "HMG", note: "This is your big gun. Peak Physique removes the drag. Be sure to go prone (or at least kneel) and crank the RPM to max to let this thing chew threw enemies." },
    { assetId: "SUPPLY-PACK", note: "More Stims, More Grenades, More Ammo. Your gun hungers.... Feed it. Fun Fact, picking up a Resupply gives you ammo AND a Supply Pack Pod" },
    { assetId: "GATLING-BARRAGE", note: "Orbital Gatling Barrage has a 60 sec CD. Throw it at Everything! It covers a 20m radius over 9 sec with AT1 armor Pen. Use this on objectives, patrols, breaches, drops, w/e." },
    { assetId: "HMG-EMPLACEMENT", note: "When you need more power, look no further than the HMG Emplacement. 300 rounds of relentless firepower. No reloading, no recoil. Put it down, let it rip!" },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
