import { Build } from "../builds";

export const anniversaryCelebrationBuild: Build = {
  slug: "anniversary-celebration-build",
  title: "HellDads Anniversary Celebration Build",
  slogan: "Happy 1st Anniversary",
  description: [
    `Its celebration time! The 1st Year HellDads Anniversary is upon us! Its time to do all the Firework like strategems and light up the night sky (and our enemies!). Put on the greatest display of Democracy since Liberty Day! The armor you bring can be whatever you like, I prefer Engineering Kit for the extra grenades. Our Primary is one of the Plasma weapons, when shot into the sky they become beautiful little flares, a perfect way to celebrate.`,
    `Our Secondary is the Ultimatum, a giant firework perfect for adding some flare and dropping some heavies. We can't celebrate with fireworks without the Pyro Grenade (aka the Sparkler). Wonderful little displays of Democracy. Our Support weapon is going to be the Airburst Rocket Launcher. Not only can this thing handle everything but the toughest of enemies, it is literally a personal fireworks launcher! Just aim straight up and enjoy! Next we are going to bring the 500kg.`,
    `This firework packs a ton (well 0.55 to be exact). Beautiful display, devastating power. And we can't have a celebration without Super Earths biggest bottle rocket, the Solo Silo. Light that baby and watch the night sky turn a wonderful red hue! No celebration of Democracy is complete without the awe inspiring, jaw dropping display of the Orbital Napalm Barrage. When in need of a boost of Liberty, just sit back and watch the symphony of fiery explosions light the way.`,
    `And for the crescendo? Throw them all! Let's go HellDads! Time to celebrate! Grab your Fireworks and make Super Earth proud!`,
  ],
  weakness: `There is no Weakness when celebrating! (Plus it has big explosions)`,
  image: "/assets/builds/HellDads_Anniversary_Celebration_Build.webp",
  tags: ["expendables", "explosions", "fireworks"],
  loadout: [
    // Armor
    {
      assetId: "CE-74",
      note: "You can wear whatever you like to the party!",
    },
    // Primary
    {
      assetId: "PLAS-1",
      note: "Any Plasma weapon is preferred for its pretty flare like ammo.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "Our Secondary is the Ultimatum. Big Firework with Big Boom",
    },
    // Throwable
    {
      assetId: "G-142",
      note: "Our Grenade is the Pyro (aka the Sparkler). The ultimate combo of Fireworks and death.",
    },
    // Stratagems
    {
      assetId: "MS-11",
      note: "Solo Silo is our giant bottle rocket. Launch it for a big beautiful firework display",
    },
    {
      assetId: "RL-77",
      note: "Airburst Rocket Launcher is our portable Firework Launcher! Aim straight up and enjoy the show!",
    },
    {
      assetId: "E500",
      note: "500kg is a half ton of fun for the whole family!",
    },
    {
      assetId: "ONB",
      note: "Orbital Napalm Barrage is the ultimate symphony of fiery explosions. This display is sure to steal the show!",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1ojjo0f/build_32_helldads_anniversary_celebration_build/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=12Itagmz0rA",
    discord:
      "https://discord.com/channels/1301285072896266252/1433229875799527486",
  },
};
