import { Build } from "../builds";

export const antiPredatorStrainBuild: Build = {
  slug: "anti-predator-strain-build",
  title: "Anti Predator Strain Build",
  slogan: "Tame the Predator Strain and fear them no more!",
  description: [
    `Are you having a hard time against the Predator Strain? Not any more! You shall fear no bug! The key elements here are going to be, knockback, crowd control, and mobility. Lets start with the Gas Dog Backpack. This thing is KING against the Predator strain, it gives you crowd control, while being mobile, and you don’t have to stop shooting for it to take effect. It will stop those Predator Stalkers in their tracks giving you time to line up shots and take them down. Next we will bring the Stalwart. 250 rounds, 1200RPM, and mobile reload. Crank the RPM to max with the Peak Physique armor (light for mobility) and let the bullets fly. It will burn down Predator Stalkers and Hunters like its nothing. Just sweep that battlefield with the high rate of fire and watch the bodies drop. The mobile reload lets you keep running when your ammo is out which will keep you from getting trampled. That plus your guard dog should mean no struggles when having to reload. But if you find yourself out of ammo, surrounded, and guard dog is reloading, then we will break out the Blitzer. This is by far the best primary for Predator strain. No ammo, 1 shot a second, knockback, stun, and 2-3 shots the Stalkers. When in a pinch, bust this out and become the “lion tamer” of your team, keeping hordes of Stalkers at bay. To further assist at keeping our enemies back we will bring the Stun Grenades. Sometimes, even the best loadouts find themselves surrounded by 4 Stalkers that came from all directions. Drop that Stun Grenade at your feet immobilizing the threat and dive your way to a better position. They will absolutely save your life. To help us close holes we will bring the Grenade Pistol Secondary. That will just about cover all of the Anti-Predator Strain equipment, so the last 2 slots are flex. We are lacking AT, so I would bring EAT-17s. Quick CD, on demand action, and with some practice can be 1 dead Charger and 2 dead Bile Titans. For the Final slot I would bring the Orbital Napalm Barrage. That is your Anti-breach option. Every time there is a Bug Breach, throw this on it and the problem disappears. Predator Strain is difficult enough without 1000s popping out of a breach. With this build you will tame the Predator Strain and fear them no more!`,
  ],
  weakness: `A mission with a large amount of Heavies will be difficult unless you have a dedicated AT on your team. EAT-17 does well, but is still only (at most) 3 kills per 60 sec.`,
  image: "/assets/builds/Anti-Predator_Strain_Build.jpg",
  tags: [
    "predator-strain",
    "crowd-control",
    "mobility",
    "knockback",
    "stun",
    "stalwart",
    "blitzer",
    "guard-dog",
    "peak-physique",
    "grenade-pistol",
    "AT",
    "orbital-napalm",
  ],
  loadout: [
    // Armor
    {
      assetId: "SC-30",
      note: "Peak Physique Light Armor is what we want here. We want pin point accuracy with the Stalwart and we want to be as mobile as possible",
    },
    // Primary
    {
      assetId: "ARC-12",
      note: "Blitzer is King of the Predator Strain. This will knockback and stun those pesky bugs, all with infinite ammo (no need to reload and expose yourself!)",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "We are lacking Bug Hole closing abilities, so we will bring the Grenade Pistol to fill that role",
    },
    // Throwable
    {
      assetId: "G-23",
      note: "Stun Grenades will save your hide when 4 stalkers show up around you. Whenever you need some room, stun",
    },
    // Stratagems
    {
      assetId: "M-105",
      note: "Stalwart is our weapon of choice for countering the Predator Strain. 250 rounds means you wont run out against the swarms, 1200 RPM means you can put them down quickly, and Mobile Reload means you wont get stuck when out of ammo",
    },
    {
      assetId: "AX/TX-13",
      note: "Gas Guard Dog is the Ultimate defense for Predator Strain. It will crowd control for you without you having to take your finger off the trigger.",
    },
    {
      assetId: "EAT-17",
      note: "EAT-17 is a great AT weapon for us. We don’t need to sacrifice our Stalwart, just drop and use when needed and pick up the Stalwart when done",
    },
    {
      assetId: "ONB",
      note: "Orbital Napalm is our Anti-Breach option. Why let 1000 Stalkers come out of a breach when we can just burn it. Use this for every breach.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1khnjgs/build_a_day_day_27/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=a1hXutoYUiQ",
    discord: "https://discord.com/channels/1301285072896266252/1369778565993992203",
  },
};
