import { Build } from "../builds";

export const squidSlayerBuild: Build = {
  slug: "squid-slayer-build",
  title: "Squid Slayer Build",
  slogan: "You Shall Fear No Squid!",
  description: [
    `You Shall Fear No Squid! Especially not the New Ones! WASP is our main focus of this build. It will one shot ALL Overseers and Watchers. It will take down the New Illuminate Ship in 2 shots! It will take out the beefy Meatbag in 4 shots! This thing is amazing on this front.`,
    `It cannot really deal with Tripods though (its not worth the ammo) and that's where our Armor and Weapons come in. We will be wearing the Quick Draw Armor (Gunslinger) because the Senator takes down Tripods in 8 shots. You will need to reload to take it down, hence the armor.`,
    `You will also need to strip the shield, thats where the Liberator Carbine comes in. With 920 RPM It will drop the shield in less than a second. Not to mention with the new Weapon Mod System, you can unlock a Drum Magazine for it, giving it a whopping 60 rounds! That's easily 2 shields before having to reload!`,
    `The armor will also allow us to quick swap right after the shield is down and will give the Senator almost no recoil so popping those joints is easy. Everything else we bring supports this playstyle.`,
    `The Gatling Sentry is the undeniable king of Squids. It will kill EVERYTHING they have in seconds. Overseers, Meatbags, New Ships, Tripods, all drop near instantly when this thing locks on. Not to mention it shreds hordes of voteless.`,
    `Our Gas Grenades kill the voteless for us and confuse the Medium enemies long enough for us to get distance and lock on with our WASP. That same concept is true for the Orbital Gas, although this also has the benefit of one shotting the Illuminate Ships through their shields for an easy clear.`,
    `And last but not least we bring the Gas Mines as an Anti-Drop option. When that flare goes up, your mines go down and you are shooting Squids in a Barrel with your WASP when they land.`,
    `Now go! Show those Squids why they chose the Wrong Planets to Invade! And if they make it to Super Earths door! We shall be ready!`,
  ],
  weakness: `The only weakness is really close range. If overseers run up to you you will not be able to hit them with the WASP. But I wouldn't call this a weakness as you can just blast them with that 920 RPM Carbine or with your Senator. Other than that, this build absolutely shuts down the Illuminate with ease.`,
  image: "/assets/builds/squid-slayer-build.jpg",
  tags: ["illuminate", "anti-vehicle", "shield-stripping", "gas", "sentry"],
  loadout: [
    // Armor
    {
      assetId: "GS-17",
      note: "We are using the GS-17 armor to amplify our Senators capabilities. I chose the Medium Armor because it looks better than the Light Armor. Allows for quick weapon swapping and reduced recoil.",
    },
    // Primary
    {
      assetId: "AR-23A",
      note: "AR-23A Liberator Carbine is chosen for its shield stripping capabilities. With 920 RPM and the ability to be upgraded with a drum mag for 60 rounds, this is the go to shield remover for squids.",
    },
    // Secondary
    {
      assetId: "P-4",
      note: "P-4 Senator is our Anti Tripod option. 8 Shots to the joint brings one down. We use the Quick Draw Armor so we can swap and reload quickly for those kills.",
    },
    // Throwable
    {
      assetId: "G-4",
      note: "Gas Grenades are used to take care of Voteless and to CC the Medium units so we can kill them with our WASP.",
    },
    // Stratagems and other items
    {
      assetId: "StA-X3",
      note: "WASP is our main weapon. 1 Shot for All Overseers, 1 Shot for the Watchers, 2 Shots for the new Ship, 4 Shots for the new Meatbags. Not worth it for Tripods.",
    },
    {
      assetId: "GS",
      note: "Gatling Turret is the MVP of Illuminate. It kills everything in seconds, Overseers, Meatbags, New Ships, Tripods, swarms of Voteless. Use it often.",
    },
    {
      assetId: "MD-8",
      note: "Gas Mines are used to shut down Illuminate Drops or guard a location. It will kill all the voteless and confuse everything long enough for you to knock them down with your WASP.",
    },
    {
      assetId: "OGS",
      note: "Orbital Gas Strike is used like our Gas Grenade but bigger and free. It is also used to take out Illuminate Ships through their shields in one hit.",
    },
  ],
  links: {
    reddit:
      "https://www.reddit.com/r/HellDads/comments/1kluedk/squid_slayer_build/",
    full: "",
    highlights: "https://www.youtube.com/watch?v=hzG8WdolLHg",
    discord:
      "https://discord.com/channels/1301285072896266252/1371925540008624228",
  },
};
