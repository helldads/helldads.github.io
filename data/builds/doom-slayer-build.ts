import { Build } from "../builds";

export const doomSlayerBuild: Build = {
  slug: "doom-slayer-build",
  title: "DOOM SLAYER Build",
  slogan: "Rip and tear!",
  description: [
    `You are the DOOM SLAYER. Wield your Shotgun and Chainsaw (axe) and hack away at those Terminid Demons. Jumppack works as your Doom Slayer Double Jump. Use it for some sick aerial shots or to close the gap on your foes. The Quasar is your BFG, charge up and blow those Heavies to bits! Got a Bile Titan on your tail? Let your Ballista rip with an Orbital Rail Cannon shot. And when you find yourself against overwhelming odds, open the gates of hell themselves with an Orbital Napalm Barrage. This is a high Octane, high mobile, shoot, hack and slash build. So get in there and Slay some Terminids.`,
  ],
  weakness: `This build is up close and personal and as such you might take a beating. Be ready to stim and be ready to resupply and find more when you are out. Quasar helps with heavies, but since you only have Quasar and an Orbital Rail Cannon, when there’s a lot of Heavies around there’s not much you can do.`,
  image: "/assets/builds/Doom_Slayer_Build.jpg",
  tags: [
    "doom-slayer",
    "quasar",
    "jumppack",
    "orbital-rail-cannon",
    "napalm-barrage",
    "axe",
    "shotgun",
    "doom",
    "frag-grenade",
  ],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "Cant be the DOOM Slayer without DOOM Slayer Drip, plus it’ll help you with your Axe chopping!",
    },
    // Primary
    {
      assetId: "SG-225",
      note: "This is your “Super Shotgun” and your main weapon. It will stagger and kill everything under a Charger",
    },
    // Secondary
    {
      assetId: "CQC-5",
      note: "This is your “Chainsaw”. Rip and Tear with this bad boy! With the Peak Physique armor this thing Shreds.",
    },
    // Throwable
    {
      assetId: "G-6",
      note: "We’re going back to the basics with this Doom classic, the Frag Grenade. Since you get more of these, you should throw them often",
    },
    // Stratagems
    {
      assetId: "LAS-99",
      note: "This is your “BFG” charge it up and let it rip! Take out all those heavies with this bad boy, style points if you do it mid air.",
    },
    {
      assetId: "LIFT-850",
      note: "This is your DOOM Slayer double jump, get some air and land some trick shots. Or just use this to close the gap so can slap some Demonic Terminids around!",
    },
    {
      assetId: "ORS",
      note: "Nothing Like a clean shot from your “Ballista” to drop the heaviest of foes. If there is a Big Bad you don’t wanna deal with, hit him with one of these.",
    },
    {
      assetId: "ONB",
      note: "When the field is crawling with enemies and it feels like too much, just “Open the Gates of Hell”. This will send all those Terminids back where they came from.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1k7rk2i/build_a_day_day_14/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=4tCus-yG40o",
    discord: "https://discord.com/channels/1301285072896266252/1364241410273837169",
  },
};
