import { Build } from "../builds";

export const salamanderBuild: Build = {
  slug: "salamander-build",
  title: "King of the Kill – R&D's Salamander Build",
  slogan: "Claim the most kills for your HellDads subfaction!",
  description: [
    `This build is brought to you by ShiLong, Battalion Commander of the Research & Destruction Science Team of the HellDads. We are currently in the midst of a Battle of Factions called the King of the Kill, the objective to claim the most kills for your HellDads subfaction. This build brings the most carnage to the battlefield to claim the most kills in a mission. If you want to be the master of flames, slayer of bugs, the King of the Kill, then this build is for you. The Dickle is our main weapon. Crank up the heat and put down as much chaff and Medium enemies as possible. To counter the “fire” effects of the Dickle we will be bringing the Heavy Fire Resist Armor, make that Dickle Tickle. To assist with our eradication, the MG Turret is there to double our firepower. You Dickle the Medium units while the MG sprays the light. To keep our turret safe and to control the battlefield we will be deploying Gas Grenades. These will wipe out all smaller units while keeping the Medium and Heavy units confused. To keep your back covered, we bring the Gas Guard Dog. While you’re focused on Dickling things, the Gas Dog will roam around confusing anything that gets close to you. The main focus of this build is to kill as much Chaff as possible, but sometimes those annoying Bile Titans get in the way. Thats why we bring the EAT-17. Drop it down, take out the Heavies, and get back to racking up those kills. And you cant be the King of the Kill without the Orbital Napalm Barrage. Every single breach should get an ONB. That’s a guaranteed 100+ killstreak. When the killing is done and all thats left to do is close some bug hole, we bust out the Grenade Pistol. Now go! Lay waste to the fields of battle and claim the title, King of the Kill.`,
  ],
  weakness: `If you lay into the Dickle too hard you will find yourself needing to stim frequently, even with the Heavy Fire Armor. Timing and Balance is key. And even though we have EAT-17s, if there are a ton of heavies you will need the help of a dedicated AT diver.`,
  image: "/assets/builds/salamander-build.jpg",
  tags: [
    "fire",
    "crowd-control",
    "chaff",
    "turret",
    "grenade",
    "dog",
    "armor",
    "killstreak",
  ],
  loadout: [
    // Armor
    {
      assetId: "I-44",
      note: "Heavy Fire Resist Armor is our go to for this build, since the Dickle will light us on fire, we want to be as fire resistant as possible",
    },
    // Primary
    {
      assetId: "LAS-17",
      note: "The Double Edge Sickle (aka the Dickle) is your primary weapon. Let it Rip, let the heat build up, catch fire and do more damage!",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "Grenade Pistol is used as our Bug Hole closer",
    },
    // Throwable
    {
      assetId: "G-123",
      note: "Gas Grenades are used to help us control the battlefield while wiping out waves of chaff",
    },
    // Stratagems
    {
      assetId: "MG-43",
      note: "MG Turret is there to amplify our firepower. Since we are aiming for the most kills, dropping this every chance we get will help us tremendously",
    },
    {
      assetId: "AX/AR-23",
      note: "Gas Guard Dog is the ultimate defense! It will keep enemies off your back while you plow them with your Dickle",
    },
    {
      assetId: "EAT-17",
      note: "EAT-17 is our Anti-Heavy option. Got a Bile Titan stomping around? Drop one of these bad boys and take him out",
    },
    {
      assetId: "ONB",
      note: "Orbital Napalm Barrage is our Anti-Breach option. Every time there is a breach, drop that ONB. This is sure to rack up the kills!",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
