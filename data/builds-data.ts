import { Build } from "./builds";

export const BUILDS: Record<string, Build> = {
  "judge-dredd-build": {
    slug: "judge-dredd-build",
    title: "Judge Dredd Build",
    slogan: "I AM THE LAW",
    description: [
      `You ARE the Law! Pull up in your paddy wagon and enforce the long arm of the law. Before we even begin, we cannot be Judge Dredd, without looking like Judge Dredd! With our Grand Juror armor we will look the part.`,
      `Now that we are in uniform we can't hit the streets without our iconic Lawgiver pistol. The P-92 Warrant has an auto aim feature great for shooting down pesky flyers or hitting enemies concealed by spore clouds. It is great against chaff, and does pretty good against light and medium enemies as well!`,
      `For our Primary, no Judge is ready to go without their Widowmaker 2000. The Breaker S&P is a perfect replica and fantastic for mowing down crowds of enemies.`,
      `For our grenades, every Judge comes equipped with 'Stump Gas Grenades' for crowd control. If those hordes of enemies get unruly, bring them in line with some gas.`,
      `Now for our Stratagems, first and foremost we need our Paddy Wagon. The FRV will allow us to get around those Mega Cities in style as well as provide additional firepower should we bring a friend.`,
      `For when things get out of control, we are authorized to use the "Total Annihilation Device" (aka our Hellbomb) to level whole city blocks. If there's a breach, or the situation is dire, just push that button, drop the pack and clear out!`,
      `For heavier targets that your Widowmaker 2000 and Lawgiver can't handle we will turn to the "Stub Gun". A laser that can cut through anything (including your foes).`,
      `And finally, we can always call in some backup firepower from our Manta Tank. Give it a target, and watch the shell land and obliterate whatever was there. Our OPS is used for Heavy Targets or Objectives. With its quick CD you can should use it often.`,
      `Now that you have the tools, go and enforce the Law. And remember... You ARE the LAW!`,
    ],
    weakness: `This build is lacking a bit in Hole closing capabilities. The Gas Grenades and OPS and Hellbomb will do it, but when faced with many nests you will need assistance or a Resupply nearby.`,
    image: "/assets/builds/judge-dredd-build.jpeg",
    tags: ["terminids", "movies", "chaff", "demolition", "gas"],
    loadout: [
      {
        assetId: "BP-77",
        note: "You can't be Judge Dredd without looking like Judge Dredd. B-77 Grand Juror is what we will wear for this build.",
      },
      {
        assetId: "SG-225SP",
        note: "Breaker S&P is our crowd clear weapon. When our enemies start swarming we put them down with a relentless stream of Fully automatic shotgun firepower.",
      },
      {
        assetId: "P-92",
        note: "P-92 Warrant is our secondary. It is the iconic Lawgiver pistol. The auto aim is useful for flyers or for shooting at enemies concealed by spore clouds.",
      },
      {
        assetId: "G-4",
        note: "Gas grenades are our version of the Stumm Gas Grenades. Use them to deny enemy movements, or confuse them long enough to pump rounds into them.",
      },
      {
        assetId: "M-102",
        note: "The FRV is our Paddy Wagon. Roll up, sirens blazing! Zip through the Mega Cities in style",
      },
      {
        assetId: "B-100",
        note: "This is our “Total Annihilation Device”. Use this for breaches, or when you are being overwhelmed!",
      },
      {
        assetId: "LAS-98",
        note: "This is our “Stub Gun”. Our laser that can cut through anything. Use this for any Medium or Heavies that our other guns can’t handle, as well as objectives like Spore Spewers or Shrieker Nests.",
      },
      {
        assetId: "OPS",
        note: "The OPS is a shell fired from our Manta Tank, giving us additional firepower for any Heavies or Objectives we need to take care of. Quick CD means you should use it often.",
      },
    ],
    links: {
      reddit:
        "https://www.reddit.com/r/HellDads/comments/1lapc4p/judge_dredd_build/",
      full: "https://www.youtube.com/watch?v=pnUE2R52K9g",
      highlights: "https://www.youtube.com/watch?v=5xQJhGhqVTA",
      discord:
        "https://discord.com/channels/1301285072896266252/1383152370866847906",
    },
  },

  // add more builds here...
};
