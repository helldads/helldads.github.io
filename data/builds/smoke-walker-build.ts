import { Build } from "../builds";

export const smokeWalkerBuild: Build = {
  slug: "smoke-walker-build",
  title: "Smoke Walker Build",
  slogan: "Into the shadows.",
  description: [
    `This is a variation of the ODST Silent Assassin Build. Instead of being a silent sniper who can use smoke when its time for CQB, we are a mid to close range Smoke Walker. We want to saturate an area in smoke, and then warp in and annihilate our toes.`,
    `Smoke + Reduced Signature or Feet First) + Suppressedweapons breaks the bots brains. Since they can't "Hear" you or "See" you they cannot acquire a target to fire back. This causes them to stand still, even when being shot in the face. We take advantage of this using the AR-59 Suppressor, Eagle Smoke, and Orbital Smoke. Drop some smoke, Warp Pack in, start popping heads with no resistance. When there are heavies in the group, we bust out the Railgun for a 1 - Tap. The heavies Al also breaks in smoke, so the 1 tap is an easy line up.`,
    `Eagle smoke can also be used to break Fabricators, and Orbital Smoke can also be used to destroy Objectives like Detector Towers. Our secondary is going to be the Grenade Pistol so we can close Fabricators. And our Grenade will be the TM-1 Lure Mine. This thing is great for when your smoke is on Cooldown. It draws enemies attention forcing them to shoot at it. This will set you up for easy headshots without being shot at. Additionally, it can kill hulks with 2 mines. So that's it! Drop smoke and become the Smoke Walker.`,
  ],
  weakness: `This build has none. Railgun is king of the bots and when paired with smoke breaking Al, this makes the bot front insanely easy.`,
  image: "/assets/builds/Smoke_Walker_Build.webp",
  tags: ["Automatons"],
  loadout: [
    // Armor
    {
      assetId: "RS-89",
      note: "Reduced Signature is used to help us confuse the bots in the smoke.",
    },
    // Primary
    {
      assetId: "AR-59",
      note: "AR-59 Suppressor is used to kill bots in smoke. The suppressor + smoke breaks their robot brains allowing for easy kills.",
    },
    // Secondary
    {
      assetId: "GP-31",
      note: "GP-31 Grenade Pistol is used to close Fabricators.",
    },
    // Throwable
    {
      assetId: "TM-1",
      note: "TM-1 Lure Mine is used when we are out of smoke. This distracts the bots allowing us to popheads easily.",
    },
    // Stratagems and other items
    {
      assetId: "RS-422",
      note: "Railgun is used to kill heavies. It one shots Hulks and War Striders. Use this once the bots are confused from the smoke.",
    },
    {
      assetId: "LIFT-182",
      note: "Warp Pack is used to move in and out of smoke quickly. Drop smoke on bots, warp in, put the bots down.",
    },
    {
      assetId: "ESS",
      note: "Eagle Smoke Strike is used to put smoke on our enemies. Smoke plus Silencers breaks the bots and allows for easy kills. It can also take out Fabricators.",
    },
    {
      assetId: "OSS",
      note: "Orbital Smoke is also used to put smoke on our enemies. It is also capable of destroying detector towers and other objectives.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1qxse1p/build_61_smoke_walker_build/",
    full: "https://www.youtube.com/watch?v=TDSzPTkAUMo",
    highlights: "https://www.youtube.com/watch?v=qbZ5PoKi0f8",
    discord:
      "https://discord.com/channels/1301285072896266252/1467222539028922523",
  },
};
