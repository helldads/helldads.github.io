import { Build } from "../builds";

export const expendablesBuild: Build = {
  slug: "expendables-build",
  title: "The Expendables Build",
  slogan: "Instant, on-demand AT!",
  description: [
    `Are you tired of having to lug around all those heavy Support Weapons? Is it a drag when you die and have to run back to your body to find your gear? Well fret no further, welcome to The Expendables! With the Commando and the EAT-17 at your disposal you have instant, on demand AT whenever you need. Start with the Commando since it has the longer Cooldown and you can bring it with you. When out, drop down some EAT-17s to knock out those Heavies. Before you know it, they’ll be off Cooldown and ready to drop again. The best part is, if you die, don’t even bother looking for that lost gear, just call in new stuff and hit the road. The same goes for the B-100 Portable Hellbomb. Strap the bad boy to your back and blow up that whole Bot drop / Bug Breach in one big boom. Then carry on about your business until you need it again! With a 102 sec Commando CD and a 60 Sec EAT-17 CD and a 4min 15 Hellbomb CD you will be juggling these CDs all game! There is always something to call in! To keep the balls in the air and the juggle alive we bring the MG Turret since it has a 76 sec CD, however this slot is Flex. You will have a Strategem for every situation. Got Chaff? MG Turret, Got Heavies? EAT-17 / Commando, Got Drop / Breach? Hellbomb. The Primary, Secondary, and Grenade are flexible. I chose the crossbow for the Primary since it can deal with most things well, including Holes and Fabricators. The Secondary I like to take the Talon, no ammo, lots of punch, great for things that get too close for the crossbow. And for Grenades I like to bring Gas. Kills chaff, keeps the turrets safe, confuses long enough for you to get some EAT-17s down, all around great Grenades. The Street Armor is great with the crossbow, and since that will be our main weapon. So ditch the heavy Support Weapons and Join the Expendables Today!`
  ],
  weakness: `Since you need to call in your AT options, there is a bit of a delay between seeing a Heavy and Killing a Heavy. If you are being chased to Timbuktu it might be difficult to get your AT down and out. Flyers can also be annoying, you will have to be a crackshot with your Talon or crossbow.`,
  image: "/assets/builds/expendables-build.jpg",
  tags: ["expendables", "commando", "eat-17", "hellbomb", "mg-turret", "CB-9", "talon", "gas", "street-armor"],
  loadout: [
    // Armor
    { assetId: "SR-24", note: "Street armor gives your Crossbow a reload as fast as notching an arrow plus 2 more clips! Since we will be using it a lot, this helps a ton." },
    // Primary
    { assetId: "CB-9", note: "Crossbow is your main weapon. It will handle everything under Heavies as well as close Fabricators and Bug Holes" },
    // Secondary
    { assetId: "LAS-58", note: "This secondary is your answer for anything that decides to get too close for the crossbow to handle." },
    // Throwable
    { assetId: "G-4", note: "Gas Grenades kill chaff and disorient enemies. Use this to protect your MG turret, or buy you time to get the EAT-17s out" },
    // Stratagems
    { assetId: "B-100", note: "B-100 Hellbomb: Your answer to Breaches, Bot Drops, or big bases. With a 256 sec CD, 10,000 damage and AT 6 Pen, this will obliterate all of your problems in one big boom." },
    { assetId: "EAT-17", note: "EAT-17: your first answer to Heavies. Use the POD as a weapon to kill one, then 2 more rockets to kill 2 others! 60 sec CD" },
    { assetId: "MLS-4X", note: "MLS-4X Command: your second answer to Heavies. Also use the POD for a free kill. Does ½ dmg of the EAT-17 and has a 102 sec CD, but you can bring it with you." },
    { assetId: "MGS", note: "MG-43 Sentry: This is your anti Chaff drop. With a 77 sec CD you will be able to drop this ALL the time" },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
