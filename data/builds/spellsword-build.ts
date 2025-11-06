import { Build } from "../builds";

export const spellswordBuild: Build = {
  slug: "spellsword-build",
  title: "Spellshord Build",
  slogan: "You are a warrior mage!",
  description: [
    `This is the Final Form of all my Melee Builds. After countless tweaking and adjusting (and "fixes"), I have perfected it (until new weapons or buffs of course!). I give you, The Spellsword! You are a warrior mage! Don your shield and spear and wield the forces of magic to decimate your foes!`,
    `For armor we of course have to use the Peak Physique armor. 100% melee damage give us excellent breakpoints (like 2 shotting Alpha Commander Heads). Our main Sword and board is going to come from the One True Flag and the Ballistic Shield. The shield blocks literally everything (yes you can survive BT vomit, although your shield will break), and the Flag puts in work as a melee weapon providing knockback AND stun. This allows you to hold the front line as you poke each enemy, one at a time to freeze them in place.`,
    `When the pile starts getting a little too big, or you start getting swarmed, its time for some magic! Bust out that Firebreath (your P-72 Crisper) and sweep the field torching everything. Keep that shield raise while they burn away to keep you safe. If you run into some beefy (or explosive) enemies, like Bile Spewers, its time for our Exploding Bolt (CB-9 Exploding Crossbow). Send a couple towards your enemies and watch them explode to bits. This is also great for reaching out to any enemies you don't want to run over to, or can be used to take out Objectives like Spore, Spewers, or Shrieker Nests.`,
    `Since our ability to stab Chargers in the leg was removed, we now use Living Bomb (Thermite) to deal with them. This will pulse fire damage near the target (killing other enemies that get to close) and end in a fiery explosion finishing our target.`,
    `If you find yourself being overran, or if there is an even bigger enemy in your way, or if you just need to destroy a base or objective, its time to call down Meteor (500kg). Once cast, make sure you and your friends are clear as it leaves a huge fiery explosion in its wake. And last but not least, when the biggest of foes stand in your way, call upon the heavenly father to cast Judgement upon thine foe (Orbital Rail Cannon) and watch the power of the heavens smite it before your very eyes.`,
    `Your power is truly overwhelming and no front is safe from your wrath. Take this build to Bugs, Bots, or Squids and lay waste to their worlds!`,
  ],
  weakness: `This build requires some practice, and proper positioning, being in the open will get you surrounded.`,
  image: "/assets/builds/Spellsword_Build.jpg",
  tags: ["melee", "explosions"],
  loadout: [
    // Armor
    {
      assetId: "PH-9",
      note: "We need Peak Physique for the +100% melee damage.",
    },
    // Primary
    {
      assetId: "CB-9",
      note: '"Exploding Bolt" - we use the crossbow for ranged combat, to take out exploding enemies, and to destroy objectives at range.',
    },
    // Secondary
    {
      assetId: "P-72",
      note: '"Fire Breath" - We use the Crisper to deal with overwhelming numbers of chaff, sweep the field, keep the shield up, let them burn.',
    },
    // Throwable
    {
      assetId: "G-123",
      note: '"Living Bomb" - Thermite is used to deal with heavies like Hulks. Fleshmobs, or Chargers, or anything else we need to blow up.',
    },
    // Stratagems
    {
      assetId: "CQC-1",
      note: "One True Flag is our main weapon. It knocks back, stuns, and is capable of killing most things under heavies. Great for holding the front line.",
    },
    {
      assetId: "SH-20",
      note: "Ballistic shield keeps us safe, and we can use everything in our arsenal while keeping the shield in front of us.",
    },
    {
      assetId: "E500",
      note: '"Meteor" - 500kg is our answer to overwhelming groups, large enemies. bases, or objectives.',
    },
    {
      assetId: "ORS",
      note: '"Judgement" - Orbital Rail Cannon is used to take care of the biggest enemies like BTs or Factory Striders.',
    },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "https://www.youtube.com/watch?v=D9ggOUMspKg",
    discord:
      "https://discord.com/channels/1301285072896266252/1434571531102584983",
  },
};
