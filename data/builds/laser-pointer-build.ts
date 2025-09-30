import { Build } from "../builds";

export const laserPointerBuild: Build = {
  slug: "laser-pointer-build",
  title: "Laser Pointer Build",
  slogan: "Burn your enemies with beams of energy!",
  description: [
    `In this build you will burn your enemies to death with beams of concentrated energy. All three slots will be loaded up with Laser pointers. Primary is the Las-5 Scythe, Secondary is your Las-7 Dagger, and your Support is the Las-98 Laser Cannon. The strategy is real simple: Laser things until the weapon is hot (not overheated), then swap to another one. With 3 laser weapons you will never need to stop lasering to let them cool off. Just pick your targets according to the laser you have out! Laser Cannon cooling off? Zap some Light and Mediums with the Scythe. Scythe cooling off? Zap some chaff with the Dagger. Dagger cooling off? Zap some Medium and Heavies with the Laser Cannon. The Las-5 Guard Dog Rover is just another laser pointer added to the mix! He will laser things while you laser things, and you can laser things together. And if that's not enough lasers, drop in that Orbital Laser for a total of 3 Lasers on one target! (or many targets?). Wanna get even more wild? Run this with a team of 4 for 12 total lasers on that Bile Titans Face...yea... that feels good. The 4th slot is a complete flex and will vary depending on faction. I chose FRV for squids (cuz driving is fun), Eagle Strafe on Bots to blow up Fabricators, and 500kg on Bugs to close nests. The Grenade I chose for this is the Stun Grenade, If you are having trouble with a Hulk (or any other enemy) being still so you can melt their eyes, use a Stun. Especially with the Predator Strain, they will be tough with this build. Armor is flexible, I preferred the Peak Physique armor to make sure that Laser Pointer had 0 drag and handled like a true Laser Pointer!`,
  ],
  weakness: `Predator strain is ROUGH. You need to be on high alert, have your surround sound headset on. You need to see them before they see you so you can burn them to a crisp. The lasers have 0 stagger. Thats where the Stun Grenades come in. Other then that your horde clear is a bit low, you kill things 1 at a time. And we have no Bug Hole closers unless your 4th slot can handle that.`,
  image: "/assets/builds/Laser_Pointer_Build.jpg",
  tags: [
    "laser",
    "scythe",
    "dagger",
    "cannon",
    "guard-dog",
    "orbital-laser",
    "stun-grenade",
    "peak-physique",
  ],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "PH-9 Predator: Peak Physique armor so that the Laser Pointer has 0 drag and moves like a true Laser Pointer.",
    },
    // Primary
    {
      assetId: "LAS-5",
      note: "Las-5 Scythe is the Laser Pointer of the Primary slot. Use this for Medium and Light enemies while your Cannon cools off.",
    },
    // Secondary
    {
      assetId: "LAS-7",
      note: "Las-7 Dagger is your Secondary slot Laser Pointer. Use this to clear chaff when your other Lasers are cooling off.",
    },
    // Throwable
    {
      assetId: "G-16",
      note: "G-16 Stun Grenade: Since the Lasers have 0 stagger, this will help peel off of you when needed. It will also keep stubborn enemies still so you can melt their face.",
    },
    // Stratagems
    {
      assetId: "LAS-98",
      note: "LAS-98 Laser Cannon: This is your BIG Laser Pointer. This one takes care of Heavies and below. It will also destroy objectives like Spore Spewers, Shrieker Nests, AA Guns, and Mortars. It can reach 200m.",
    },
    {
      assetId: "AX/LAS-5",
      note: "AX/LAS-5 Guard Dog Rover: This Laser Doggo will help you tag team beams on all those baddies! More Laser Pointers, More Fun!",
    },
    {
      assetId: "OL",
      note: "Orbital Laser: This is the BIGGEST Laser Pointer. You only get 3, so make them count. But when your BIG Laser Pointer isn’t enough, add this to the mix. 3 Lasers are better than 2!",
    },
    {
      assetId: "LS",
      note: "We finally have our 4th Laser Pointer. The Laser Turret! Drop it whenever its off cooldown for even more Laser Pressure! Whith this bad boy down and the Orbital out, we have 4 Laser Beams!",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1m95b3l/updated_laser_pointer_build/",
    full: "https://www.youtube.com/watch?v=4hEdVPo_gJc",
    highlights: "https://www.youtube.com/watch?v=KRobyT4_X70",
    discord:
      "https://discord.com/channels/1301285072896266252/1398347971313012787",
  },
};
