import { Build } from "../builds";

export const fortyMmOfFreedomBuild: Build = {
  slug: "40mm-of-freedom-build",
  title: "40mm of Freedom Build",
  slogan: "Jack of All Trades, 40mm Style!",
  description: [
    `This is the Jack of All trades build. You carry a Big Gun, you drive a Mech with 4 Big Guns, you have a pet Big Gun and your ship shoots a Big Shotgun. You are not subtle, but you pack a 40mm punch. Autocannon will handle every enemy, every objective (Spore Spewers, Shrieker Nests, AA Guns, Mortars, Broadcast Tower), every Bug hole / Fabricator. When you need a little extra help shooting things, plop down your Autocannon Turret so you and your buddy can Plap Plap together. If that is not enough firepower (It rarely isn’t), Call down Big Bertha and let her 4 40mm Autocannons rip. 100 rounds each arm is enough firepower to turn any situation from FUBAR to a walk on the beach. Clear those Fortresses / Mega Nests, stop the Drop / Breach, or just walk around as a Mech Cavalry support for your team. When out of the Mech, Orbital Airburst is used to soften / clear large groups. Drops / Breaches, Patrols, Bases, etc. 100 sec CD means you should use it often. Dynamite perform the same role, but as a Grenade. They have the biggest radius and some serious damage. Chuck them in bases, chuck them in breaches, chuck them at patrols, etc. Follow up the carnage with some Autocannon rounds at whatever is still standing. The Senator is basically used to quick swap if your AC clip is empty and your target is still standing. Swap and pop and then reload when clear. The Halt is your free stun. Leave it on stun rounds, start with a stun and finish with the AC. On bugs, this thing will let you stop a charger and then go shoot its butt. (PRO TIP) In settings, set weapon wheel to push (not long press) and change the keybinding, then change the keybinding for Cycle Right to the same key, now you can change rounds with 1 push of a button`,
  ],
  weakness: `On Bots, you can handle everything with some good accuracy. However, on Bugs you need to be a little more tactical to take out the heavier enemies. Other than that, this build should handle everything the game has to offer, although ammo economy can be rough if you are busy. Be sure to loot POIs and drop Resupply often.`,
  image: "/assets/builds/40mm-of-freedom-build.jpg",
  tags: [
    "autocannon",
    "mech",
    "turret",
    "big-bertha",
    "airburst",
    "dynamite",
    "senator",
    "halt",
  ],
  loadout: [
    // Armor
    {
      assetId: "B-27",
      note: "You are looking for Fortified in your armor. The recoil reduction helps substantially with follow up shots of the AC and explosion resist helps you survive up close shots (or missiles)",
    },
    // Primary
    {
      assetId: "SG-20",
      note: "The Halt stays on Stun (unless you deem it necessary to change). Whip this out for a quick stun on your target, then swap back to that AC for a Plap Plap.",
    },
    // Secondary
    {
      assetId: "P-4",
      note: "The Senator is basically used to quick swap if your AC clip is empty and your target is still standing. Swap and pop and then reload when clear.",
    },
    // Throwable
    {
      assetId: "TED-63",
      note: "Dynamite perform the same role, but as a Grenade. They have the biggest radius and some serious damage. Chuck them in bases, chuck them in breaches, chuck them at patrols, etc.",
    },
    // Stratagems
    {
      assetId: "AC-8",
      note: "This is your main weapon. It handles everything. Kill all enemies, close bug holes / fabricators, destroy objectives like spore spewers, shrieker nests, AA guns, Mortars etc. Reload with at least 1 round left to speed up reload animation",
    },
    {
      assetId: "EXO-45",
      note: "This is your power flex. 40mm guns on a suit of armor. Things not going well? Drop this bad boy in and clean house.",
    },
    {
      assetId: "ACS",
      note: "This is your firepower amplifier. Need even more 40mm Plap Plaps? Drop this down next to you and double your AC firepower.",
    },
    {
      assetId: "OAB",
      note: "While these rounds aren’t 40mm, they sure do feel like AC rounds on impact. 100 sec CD makes this a great breach / drop / base / patrol clear. Throw it early, Throw it often.",
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
