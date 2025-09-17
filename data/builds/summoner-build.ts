import { Build } from "../builds";

export const summonerBuild: Build = {
  slug: "summoner-build",
  title: "Summoner Build",
  slogan:
    "Go Forth My Pretties! Inspired by Numerous_Magician545",
  description: [
    `Are you tired of shooting things yourself? Then become The Summoner! Just plop down your 3 Turrets and let them and your Gun Dog blow everything to bits. To keep yourself and your minions safe you will use the Halt Shotgun to stun everything in range. Keep them stunned and let your minions put them down. When you need some explosives, summon your flying bomb minions! They will fly around and follow you until something worth blowing up catches their eye. Sometimes there are some big bads that get in our way, so that’s why we bring the Ultimatum, just one big explosion to rule them all. For armor we want to bring Engineering Kit for more flying bombs. Our Minions are our firepower, so knowing who to bring out and when is key. MG Turret is our most frequently used minion. With a 76 sec CD he should come out basically on CD. He is also our best chaff clear, use him for patrols, breaches, POIs, and Objectives. He is also a great protector of our next minion, the Rocket Turret. Put them out together as they are best friends. The Rocket Turret has excellent range and rate of fire. With a good position he will fire for the longest amount of time and kill the most enemies. He is also capable of taking out any Heavies unfortunate enough to catch his attention. Our last turret is the Autocannon Sentry. While generally short lived, he packs some serious burst damage. Great for when you need that extra firepower and stagger (like for a breach). He is also the most suited to handle quite a bit alone with his high damage and penetration and stagger. And finally we cannot forget our Guard Dog, our mobile minion, our trusted side kick. When on the move, or out of Turrets he will be there blasting away. When your Turrets are down, he will be there as well, blasting away. He is basically your hands free gun, you stun, he shoots. So go, summon your minions and let them wreak havoc on the battlefield!`,
  ],
  weakness: `This is a quasi support build. You will amplify your teams firepower with Turrets and Guard Dogs, and support / protect them with stuns. Your AT Capabilities are low so you will need your team to handle Heavies. Also, Turret placement is key. If your placement is bad, your turrets will die and you will struggle.`,
  image: "/assets/builds/The_Summoner_Build.jpg",
  tags: ["support", "turrets", "minions", "stun", "engineer", "gun dog"],
  loadout: [
    // Armor
    {
      assetId: "CE-27",
      note: "Engineering Kit Armor is used to give us the most flying bomb minions!",
    },
    // Primary
    {
      assetId: "SG-20",
      note: "The Halt is used to Stun enemies for our team and for our Minions. Keep them stunned while your minions put them down.",
    },
    // Secondary
    {
      assetId: "GP-20",
      note: "Ultimatum is our AT option when our Turrets are down, it is limited so use it wisely.",
    },
    // Throwable
    {
      assetId: "G-50",
      note: "Seeker Grenades are our flying bomb minions. Tag a target, and let them fly.",
    },
    // Stratagems and other items
    {
      assetId: "AX/AR-23",
      note: "Gun Dog Backpack is our mobile friend. You stun, He shoots! Wherever you go, he will be there!",
    },
    {
      assetId: "RS",
      note: "Rocket Turret is the most efficient minion you have. He has the most range, and will kill the most enemies if placed in a great location. It is best to protect this minion with your MG Turret, they are best friends.",
    },
    {
      assetId: "MGS",
      note: "MG Turret is your fastest turret and will be summoned frequently. It is also your chaff killing option. Summon this minion frequently.",
    },
    {
      assetId: "ACS",
      note: "Autocannon Turret is your bursty minion. If you need more oomph this friend comes out! This minion is absolutely capable of handling itself alone, but will add additional power when needed.",
    },
  ],
  links: {
    reddit: "https://www.reddit.com/r/HellDads/comments/1kjgb9t/build_a_day_day_29/",
    full: "https://www.youtube.com/watch?v=YMIzxyQtem4",
    highlights: "https://www.youtube.com/watch?v=yIodbfkpoqE",
    discord: "https://discord.com/channels/1301285072896266252/1416831612871774331",
  },
};
