import { Build } from "./builds";

export const BUILDS: Record<string, Build> = {
  /* TEMPLATE:
  "template": {
    slug: "template",
    title: "",
    slogan: "",
    description: [``],
    weakness: ``,
    image: "/assets/builds/.jpg",
    tags: [],
    loadout: [
      {
        assetId: "",
        note: "",
      },
    ],
    links: {
      reddit: "",
      full: "",
      highlights: "",
      discord: "",
    },
  },
  */
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
    image: "/assets/builds/judge-dredd-build.jpg",
    tags: ["terminids", "movies", "chaff", "demolition", "gas"],
    loadout: [
      {
        // assetId: "multi-faction",
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

  "squid-slayer-build": {
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
      {
        assetId: "GS-17",
        note: "We are using the GS-17 armor to amplify our Senators capabilities. I chose the Medium Armor because it looks better than the Light Armor. Allows for quick weapon swapping and reduced recoil.",
      },
      {
        assetId: "AR-23A",
        note: "AR-23A Liberator Carbine is chosen for its shield stripping capabilities. With 920 RPM and the ability to be upgraded with a drum mag for 60 rounds, this is the go to shield remover for squids.",
      },
      {
        assetId: "P-4",
        note: "P-4 Senator is our Anti Tripod option. 8 Shots to the joint brings one down. We use the Quick Draw Armor so we can swap and reload quickly for those kills.",
      },
      {
        assetId: "G-4",
        note: "Gas Grenades are used to take care of Voteless and to CC the Medium units so we can kill them with our WASP.",
      },
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
  },
  "3-sword-style-build": {
    slug: "3-sword-style-build",
    title: "3 Sword Style Build",
    slogan: "",
    description: [
      `Three Sword Style! Become Roranora Zoro and wield 3 Melee weapons! The Amendment with its bayonet, the Sword, and the Flag! This is a melee build, and a variation of the Spartan Build using the new Flag. While I do wish the Flag did more damage to fit the role of Med / Heavy killer better, it does allow us to bring more then one Melee weapon, and here is why you would want to do that. The Amendment helps us with any flying units that are out of reach of our blades. Shoot down Shriekers or Flying Overseers with it. If any chaff get in your way while trying to shoot, you poke their face off with that bayonet. The sword is our chaff clear. Got packs of Voteless or Hunters? Cleave them down with ease with the Sword. The Flag is our Medium / Heavy killer. Since it has a stun and an easier time hitting weakpoints we use this for the bigger guys. Overseers 3 shots, Harvesters 6 (stab its feet), Chargers 5(stab its leg), Alpha Commanders 2 (stab its head), Impalers 11 (stab its face), Tanks 10 (to the engine between the treads), Hulks 6 (to the vent). To keep us safe we will be bringing the Ballistic Shield. It blocks all melee as well as all shots that aren’t rockets. For our armor we will be bringing Peak Physique for that 100% melee damage. Grenades are flex, but the new Pyro Grenades provide good crowd clear, area denial, and good damage to chunky enemies. The last 2 Strategem slots are also flex and change depending on the enemy you fight. I’ve found 500kg and Orbital Rail Cannon good on Bugs. Both take out Titans (your only weakness) and the 500 helps close nests for you. On Illuminate I’ve found Gas Mines great at shutting down breaches, the last slot is completely flex for them. You can bring Eagle Strafe to shoot down the Stingrays or clear chaff, you could bring 500kg for the packs of Meatbags, you could bring Orbital Gas as more utility. Our weakness of the Illuminate front is Meatbags. Bring something for them. On the Bot front, 110's are amazing for most heavies, and I like to bring a Hoverpack so you can drop your shield when you see a Factory Strider and go fly up on its back. Ride it like a bull and stab its back 37 times to bring it down in a blaze of Flag waving glory!`,
    ],
    weakness: `This build handles most things on most fronts. You will struggle if your teammates don’t care about you or pay attention to your position. I am frequently knocked down by Randoms AOE, or have Strategems dropped right next to me. On Illuminate your biggest problem is Meatbags, and you probably want Strafe for the Stingray. On Bugs you can’t kill Bile Titans without the ORC or 500, so if there are a bunch of them it gets rough. Bots have a lot of rockets that knock you down, so you have to be strategic and careful about when and how you engage.`,
    image: "/assets/builds/3-sword-style-build.jpg",
    tags: [],
    loadout: [
      {
        assetId: "PH-9",
        note: "Peak Physique armor is used for the 100% Melee damage and is required for this build",
      },
      {
        assetId: "R-2",
        note: "The Amendment is used to shoot down flying units and stab anything that gets in the way while doing so",
      },
      {
        assetId: "",
        note: "The Sword is used to cleave through chaff like Hunters or Voteless",
      },
      {
        assetId: "G-142",
        note: "The Pyro Grenades are great at chaff clear, area denial, and can put in some work on beefy units",
      },
      {
        assetId: "",
        note: "The Flag is our Medium / Heavy killer. We use its stun and precision to lock down and kill anything bigger than the Chaff.",
      },
      {
        assetId: "SH-20",
        note: "Ballistic Shield is used to block melee and ranged attacks to allow us to get in close to chop and stab things.",
      },
      {
        assetId: "E500",
        note: "This slot is Flex. I choose 500kg for bugs, Strafe for Illuminate and 110's for Bots.",
      },
      {
        assetId: "ORS",
        note: "This slot is also Flex. I choose Orbital Rail Cannon for bugs (for BTs), Gas Mines for Illuminate (for anti drop), and Hover Pack for bots so I can ride Factory Striders like a bull.",
      },
    ],
    links: {
      reddit:
        "https://www.reddit.com/r/HellDads/comments/1kp6vym/3_sword_style_build/",
      full: "https://www.youtube.com/watch?v=mLN8A0iF5SU",
      highlights: "https://www.youtube.com/watch?v=bcICEx0Txok",
      discord:
        "https://discord.com/channels/1301285072896266252/1373449307658780723",
    },
  },
  // add more builds here...
};
