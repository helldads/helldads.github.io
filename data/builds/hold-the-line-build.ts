import { Build } from "../builds";

export const holdTheLineBuild: Build = {
  slug: "hold-the-line-build",
  title: "Hold the Line Build",
  slogan: "You shall not pass!",
  description: [
    `Set up defensive fortifications to stop the enemy advance. If there is a breach, you drop all 3 turrets in a line and cover them with the RR, Blitzer, and Gas Grenades. Turrets do the heavy lifting.`,
    `RR stops all heavies, Blitzer knocks back any enemies that advance, and Gas Grenades block a path of advance. The Grenade Pistol is perfect for closing holes and saving us RR rounds or Gas Grenades (Which can be used in a pinch). When moving from point to point Gas Grenades give good cover.`,
    `When attacking Objectives or POIs you can stagger turrets for optimal uptime. Gatling and Rocket pair well together, as the Rocket Sentry wont fire when enemies get too close, so the Gatling will clear the chaff off of it, and the Gatling can’t kill heavies, so the Rocket will handle those. The AC sentry can hold its own, clearing both chaff and heavies, as well as staggering everything nearby.`,
    `With your turrets up and running and the RR in your hands you will easily solo a breach while your team pushes onward. Set up your fortifications and Hold the Line!`,
  ],
  weakness:
    "Flying enemies can be annoying when the Gatling Turret is on Cooldown. You also do not have anything for Titan Holes other than dropping a POD on it.",
  image: "/assets/builds/Hold_the_Line_Build.jpg",
  tags: [
    "terminids",
    "medium",
    "mechanic",
    "support",
    "projectiles",
    "explosive",
    "gas",
    "arc",
    "control",
  ],
  loadout: [
    // Armor
    {
      assetId: "CE-74",
      note: "This armor gives you 6 total Gas Grenades. Since Gas is how we keep our turrets safe, we want more of them.",
    },
    // Primary
    {
      assetId: "ARC-12",
      note: "This weapon will kill everything below a Charger with ease. Its knockback is great for keeping enemies off of your turrets.",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "The Grenade Pistol is our Bug Hole closer.",
    },
    // Throwable
    {
      assetId: "G-4",
      note: "This is your biggest defense for your turrets, and when moving from place to place. Throw these on breaches while your turrets put in work.",
    },
    // Stratagems
    {
      assetId: "GR-8",
      note: "The king of Anti Tank. This one shots all heavies in the game. Use this to take down heavies while your turrets mop up.",
    },
    {
      assetId: "ACS",
      note: "This turret can handle quite a bit on its own. When staggering, use this one alone.",
    },
    {
      assetId: "RS",
      note: "This turret has the longest range, and will fire for the longest amount of time. Provides excellent sustained damage.",
    },
    {
      assetId: "GS",
      note: "Your main chaff clear. This thing mows down everything and is an excellent pair to the Rocket turret. Far superior to the MG turret with 750 bullets (vs 263) and a fire rate of 1560 (vs 660)",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1n2mnqm/build_3_hold_the_line_build/",
    full: "https://www.youtube.com/watch?v=tBx6gUIrdwc",
    highlights: "https://www.youtube.com/watch?v=8y7hCmcA3ls",
    discord:
      "https://discord.com/channels/1301285072896266252/1442891581614067984",
  },
};
