import { Build } from "../builds";

export const reinhardtBuild: Build = {
  slug: "reinhardt-build",
  title: "Reinhardt Build",
  slogan: "Tank! Protector of your team!",
  description: [
    `You are Reinhardt! Tank! Protector of your team! Don your Heavy Armor and rush to the front lines! Using your Directional Shield you will protect your teammates from incoming fire. Is someone pinned down? Rush to their aid! Step in front of them with the big beautiful shield and save them from an untimely death. Warning, you WILL be knocked down A LOT. But every time you are knocked down is a time a teammate is spared a gruesome death. When the fighting gets too heated and there is enemy fire coming from all directions drop your Shield Generator Relay for a dome of protection. To reach out and smack your enemies from the protection of your shield, we bring the Eagle Strafe. This acts as Reinhardts “Fire Strike” taking out enemies in a line. If you need to halt a group of enemies or Bot drop throw out your “Earthshatter” with an Orbital EMS and bring those clankers to a stop. The best weapon to bring with our Direction Shield is the Crossbow. It staggers and 2 shots Devastators and Rocket Striders, as well as blows up groups of Commissars. This is also our go to for closing Fabricators if needed. For our Secondary we will bring the Ultimatum to help our team deal with Objectives, Tanks, or Factory Striders. And for Grenades we bring Thermites to handle any Heavies should we find ourselves (or our team) out of AT support.`
  ],
  weakness: `This is a support / tank build. You can handle yourself if you get cut off or left behind, but you will do much better with the support of your team. Instead of engaging every single enemy you see, you should be looking for teammates taking fire so you can rush to their aid.`,
  image: "/assets/builds/reinhardt-build.jpg",
  tags: ["tank", "support", "shield", "protection", "crowd-control", "heavy-armor", "crossbow", "ultimatum", "thermite"],
  loadout: [
    // Armor
    { assetId: "FS-55", note: "The FS-55 Devastator armor is preferred as it gives you explosive resistance. Your shield will block projectiles, your armor will help with explosions." },
    // Primary
    { assetId: "CB-9", note: "The crossbow is your main weapon and pairs well with the Directional Shield. Handles most bots and closes Fabricators." },
    // Secondary
    { assetId: "GP-20", note: "We bring the Ultimatum to take care of objectives and heavies, but more importantly to deal with Factory Striders when your team can't." },
    // Throwable
    { assetId: "G-123", note: "Thermite is used to take out any Heavies when our team is lacking or if you find yourself alone." },
    // Stratagems
    { assetId: "SH-51", note: "The Directional Shield is your main defensive weapon. You will use this to protect teammates. Look for a Helldiver under fire and rush over to block for them." },
    { assetId: "SGR", note: "The Shield Generator Relay is used when your Directional Shield is not enough, usually for Bot Drops, or if you find yourself taking fire from multiple directions." },
    { assetId: "ESR", note: `Eagle Strafe is Reinhardt’s “Fire Strike”. Use this to send a wave of damage towards your enemies. Keep aiming down sights to keep the shield up while using stratagems.` },
    { assetId: "OES", note: `Orbital EMS is Reinhardt’s “Earthshatter”. Use this to stun bot drops or troublesome groups of enemies so your team can handle them easily.` },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
