import { Build } from "../builds";

export const paladinBuild: Build = {
  slug: "paladin-build",
  title: "Paladin Build",
  slogan: "May the light guide you!",
  description: [
    `You are a Paladin, a holy warrior and you will smite your foes with unrelenting judgement. You will charge into battle with your trusted hammer and with the holy spirit on your side you will smash and heal your way through hordes of enemies. The idea is simple, with the Supply Pack, Medic Armor, and the Breaching Hammer, you are going to spam hammer charges and stims through entire breaches and drops. The medic armor gives you 6 seconds of healing per stim and 6 stims to start with. While those 6 seconds are rolling, you smash your hammer, wiping groups of foes per swing.`,
    ` With the help of Experimental Infusion, your speed is increased and you have increased damage reduction. When you run out of stims or Hammer charges, just reload yourself with the supply pack and keep going. If things get too heavy and you need a moment to breathe, or if you need to avoid an insta kill, we are going to bring the G/SH-39 Shield Grenade. Like a true paladin, we can bubble ourselves for safety.
    Use this to survive cannons, or missile barrages, or BT vomit, or anything else.`,
    `While we "can" kill everything with the hammer, some enemies take too long when we are in the thick of it, or are too hard to get to while we are surrounded. For those enemies we have a few tools to help. The Ultimatum and the Orbital Railcannon Strike can be called in to cast judgement on our enemies and smite them into the dirt. And when overwhelmed we can call upon the heavens to open up and let us their aid with an Orbital Laser`,
  ],
  weakness: `This build has no Anti-air, you can try to hit enemies with the crossbow if needed.
  Additionally, the hammer swing and stim animation are cancelled when you are hit (even though it looks like it goes off). If you are surrounded and getting hit back to back, you may be staggered and unable to explode the hammer or get off a stim. You have to be very careful.`,
  image: "/assets/builds/Paladin_Build.webp",
  tags: ["Automatons"],
  loadout: [
    // Armor
    {
      assetId: "CM-21",
      note: "CM-21 Trench Paramedic is used for +2 stims and 2 extra seconds of stim time. This makes us nigh invincible in combat.",
    },
    // Primary
    {
      assetId: "CB-9",
      note: "CB-9 Exploding Crossbow is used to close bug holes.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "GP-20 Ultimatum is used for any heavies we cant get to with our hammer.",
    },
    // Throwable
    {
      assetId: "G-SH-39",
      note: "G/SH-39 Shield is our Paladin Bubble. Use it to protect from big incoming damage, or to buy time to stim or resupply.",
    },
    // Stratagems and other items
    {
      assetId: "CQC-20",
      note: "CQC-20 Breaching Hammer is our main weapon. With the Supply Pack we get 35 explosions. Smash your way through groups",
    },
    {
      assetId: "B-1",
      note: "B-1 Supply Pack is used to keep our stims and Hammer topped up. When out of either, just resupply and keep going.",
    },
    {
      assetId: "ORS",
      note: "Orbital Railcannon Strike is used to cast judgement on any heavies we want to remove from the battlefield. Best used for BTs or Vox.",
    },
    {
      assetId: "OL",
      note: "Orbital Laser is used when we are against overwhelming odds. Let the skies open up and the wrath of god sweep the battlefield",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1r45gm5/build_63_the_paladin_build/",
    full: "https://www.youtube.com/watch?v=QWl8a1XSmP8",
    highlights: "https://www.youtube.com/watch?v=Pwl8xgkIa98",
    discord:
      "https://discord.com/channels/1301285072896266252/1471964745040007228",
  },
};
