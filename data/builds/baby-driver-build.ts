import { Build } from "../builds";

export const babyDriverBuild: Build = {
  slug: "baby-driver-build",
  title: "Baby Driver Build",
  slogan: "They call me Baby. Getaway driver and protector.",
  description: [
    `They call me Baby. Strap in and get ready for some sick drifts, J turns, and some hot seat swapping. You are your teams driver. Pick them up and take them where they need to go. But, you are much more than that. You are their protector, their lives are in your hands. Is someone being over run? Zoom in, cut off the enemy, pick up your friend and get outta dodge. Is there a huge drop or breach? Everyone in! Its time to dip! Driving doesn’t just take skill, it takes responsibility. Don’t yeet your team off a cliff, don’t drive right into a Hellbomb, don’t drive full speed and flip on the tiniest pebble. On top of driving you will be bringing the Recoiless Rifle. Not only does this let you hang out in the car until there’s a big bad who needs shooting, but (with practice) you will be able to swap seats WHILE DRIVING to fire a rocket out the window and swap back to continue driving. I call this Jousting. Seeker Grenades can also be thrown out the window and will follow the FRV without blowing it up! Charge the line with an army of flying grenades! The other 2 Strategems are entirely up to you. I like to bring a 380mm Barrage and an Orbital Laser. That way if no one wants to get into the car I can zoom off by myself to a base and chuck the Orbitals, get back in my car, and zoom away. You can also park the car and use it as a mobile HMG emplacement. Some Tips: When going down hill, go slow and go straight. When your gunner is shooting, stop or go slow. You can shoot the tires with the loyalist to flip the FRV back over (without doing too much damage). Hitting the Ebrake (space on PC) will allow you to drift corners (or do doughnuts). Don’t hit jumps too fast, try to pull back on reverse when you approach it to slow so you don’t front flip and explode. Watch Out for SPIKEY Plants, they will kill EVERYONE.`,
  ],
  weakness: `Your teammates can Kill You! Yes you read that right, but this is more on you then them. If someone refuses to get in when its Hot, just leave them. Spending too long to “save” someone will cost you your life or worse, your FRV. If someone wants to get out and run, so be it. You will see them at the objective, and it will probably be done by the time they get there. This also isn’t exactly an offensive build. To be a good driver you need to be ready to move the car / pick people up. Getting out to fight means you risk losing the car, or missing an opportunity to save someone. Hang out, let your team work, and be ready to leap into action. You are the getaway driver.`,
  image: "/assets/builds/baby-driver-build.jpg",
  tags: [
    "recoiless-rifle",
    "frv",
    "380mm-barrage",
    "orbital-laser",
    "loyalist",
    "xbow",
    "democracy-protects",
  "seeker-grenade",
  ],
  loadout: [
    // Armor
      {
        assetId: "DP-53",
        note: "Savior of the Free: Any armor works, but this might save you if the car blows up.",
      },
    // Primary
      {
        assetId: "CB-9",
        note: "Exploding Crossbow: Any primary works. Preferred for seat swap bug hole popping.",
      },
    // Secondary
      {
        assetId: "GR-8",
        note: "Recoilless Rifle: Used to kill heavies and for 'Jousting' while driving.",
      },
    // Throwable
      {
        assetId: "G-50",
        note: "Seeker Grenade: Great for Jousting. Will follow FRV and not blow it up.",
      },
    // Stratagems
      {
        assetId: "M-102",
        note: "FRV: Can't be the driver without the Fast Recon Vehicle. Use as mobile HMG emplacement.",
      },
      {
        assetId: "O380HB",
        note: "380mm Barrage: Flex cooldown. Drop and drive away to skip drops/breaches/bases.",
      },
      {
        assetId: "OLS",
        note: "Orbital Laser: Wipe bases from the car. Seat swap to throw and keep moving.",
      },
      {
        assetId: "PLAS-15",
        note: "Loyalist: Used to flip the car over without blowing it up. Tap the tire to reset.",
      },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
