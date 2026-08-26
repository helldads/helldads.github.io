import { Build } from "../builds";

export const bobaFettBuild: Build = {
  slug: "boba-fett-build",
  title: "Boba Fett Build",
  slogan: "You are the Mandalorian Boba Fett!",
  description: [
    `You are the Mandalorian Boba Fett! Take to the skies and rain fire and explosives on your enemies, then whip out your pistol and pew pew pew some heads. The Hoverpack is your bread and butter, fly in the air and let the Xbow rip, wiping patrols and breaches with ease. Or, Fly up and scorch the ground with fire Torching your enemies while laughing meniacally from the safety of the air. When being pushed by something like Hunters, whip out the Talon and Pew Pew some lasers just like Star Wars. Or, just pew pew for the hell of it, the Talon is great. Thermite are for chargers mainly but can flex Impalers and Bile Titans. 110's shine in this build! One 110 and 0.5 sec of Torching a Bile Titans face and he crumples. 110's almost one shot Impalers leaving them very weak for a quick roasting, and a well times 110 will drop a charger (or make it bleed out). And when you need even more fire power, call upon the Death Star and have that laser evaporate your foes.`,
  ],
  weakness:
    "Not much anti Air. The hoverpack takes some getting used too, landing will be a bit slow and can leave you vulnerable.",
  image: "/assets/builds/Boba_Fett_Build.jpg",
  tags: [
    "terminids",
    "hoverpack",
    "fire",
    "explosives",
    "crossbow",
    "thermite",
    "anti-tank",
  ],
  loadout: [
    // Armor
    {
      assetId: "FS-37",
      note: "This armor will make you look and feel like Boba Fett. Gotta match the drip to the power. Plus 2 more Thermite can’t be beat",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "This is your bombardment option, raining explosions from the air. Will also close Holes and Objectives like Spore and Shrieker Nests",
    },
    // Secondary
    {
      assetId: "LAS-58",
      note: "This is your Quick Draw option. If you are being pushed to close for Xbow or Flamer, this will put in work.",
    },
    // Throwable
    {
      assetId: "G-123",
      note: "Used mainly on Chargers (since there are so many its better to Thermite and save 110's for Titans or Impalers). But, can flex Bile Titans or Impalers in a pinch",
    },
    // Primary
    {
      assetId: "FLAM-66",
      note: "Flamer is one of your 3 Primary weapons. You will be swapping between all 3 regularly depending on the situation and ammo. This is great for crowd clear, area denial, and melting heavies",
    },
    // Stratagems
    {
      assetId: "LIFT-860K",
      note: "You will use your Hoverpack for every engagement. Use it to get up to a Bile Titans face to roast, use it to get an angle for your Flamer and Xbow, use it to escape danger or get to a cheeky vantage point.",
    },
    {
      assetId: "E110RP",
      note: "110's are your bread and butter Anti Tank option. They significantly weaken every Heavy hit to the point you can finish with the Flamer in under a second.",
    },
    {
      assetId: "OL",
      note: "Orbital Laser is your big button. Call upon the Death Star to eliminate anything you don’t really want to deal with. Or use it to amplify your damage as you fly in the air and bombard your enemies.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1n55ebm/build_6_boba_fett_build/",
    full: "https://www.youtube.com/watch?v=IDeGtV3rb84",
    highlights: "https://www.youtube.com/watch?v=gOiJobqzEYU",
    discord:
      "https://discord.com/channels/1301285072896266252/1442891835046629518",
  },
};
