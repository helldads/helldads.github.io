import { Build } from "../builds";

export const spaceCowboyBuild: Build = {
  slug: "space-cowboy-build",
  title: "Space Cowboy Build",
  slogan: "Put 'em 6ft under with style!",
  description: [
    `You are a space cowboy. Point your Deadeye or your big Iron and the enemy and put them 6ft under. Hoverpack helps you get good vantage points (or makes you look awesome while shooting) and your Primary and Secondary do all the work. Dynamite is great for popping Fabs or a big ol group of Devastators. Got a Hulk walking up on you? Whip out that Senator, do a couple pistol spins and pop his eye 4 times. The cowboy armor makes swapping weapons instant. Running out of ammo on the Deadeye and the Dev is still alive? Quick swap and finish him off. It also makes your Senator absolutely amazing. No recoil, 1 sec reload. Just let em rip. For added flair, make sure you do the Draw emote before you drop that Hulk. The Deadeye also drops Gunships in 4 shots to a thruster. Go ahead and get your skeet shooting on. When Tanks, Turrets, or other Heavies get in your way, call in some backup with a Spaceship Drive-by and drop some 110's on their heads. If you need to destroy an Objective, or take out another Heavy while the 110's are refilling, call in some help from ye big ol cannon the Orbital Precision Strike. And of course, you can’t have a Space build without the Space Laser. If there are too many enemies to handle, or you don’t feel like dealing with that base, call in the Space Laser to evaporate everything in your way.`
  ],
  weakness: `You have some AT, but Factory Striders are going to be a problem for this loadout. You can Combo 110's + OPS for a decent 1 - 2 punch but you will need some help to bring them down.`,
  image: "/assets/builds/space-cowboy-build.jpg",
  tags: ["cowboy", "hoverpack", "deadeye", "senator", "dynamite", "stratagems", "space-laser", "precision-strike"],
  loadout: [
    // Armor
    { assetId: "COWBOY", note: "The Cowboy armor makes the Senator amazing, you will be dropping Hulks like they are wet paper bags." },
    // Primary
    { assetId: "DEADEYE", note: "Deadeye is a great rifle. Easy headshots on Devastators, 4 shots for Gunship engines, 2 shots for Rocket Striders." },
    // Secondary
    { assetId: "SENATOR", note: "Senator is a beast with this armor. No recoil, 1 second reload, near instant swap. Use this bad boy to put down Hulks with ease." },
    // Throwable
    { assetId: "DYNAMITE", note: "Dynamite has a big boom! Great for the space cowboy. It will help you take out a Devastator Patrol or Fabricators." },
    // Stratagems
    { assetId: "HOVERPACK", note: "The Hoverpack will get you up high so you can rain down some lead. Great for getting vantage points, getting over walls, or just flyin up high to pew pew pew." },
    { assetId: "EAGLE-110", note: "110's are your Anti Tank and Turret option, and boy are they reliable. They can also take out Hulks most of the time (or weaken them enough for just 1 shot)" },
    { assetId: "SPACE-LASER", note: "The Space Laser! Your answer for anything you don’t want to deal with, bases, bot drops, a bad situation. If you don’t like it, call in the lasers." },
    { assetId: "OPS", note: "Orbital Precision Strike is another go to option for AT, groups, or objectives like Detector Towers. It has a low Cooldown, so don’t hesitate to use it." },
  ],
  links: {
    reddit: "",
    full: "",
    highlights: "",
    discord: "",
  },
};
