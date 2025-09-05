// Reuse your roles
export const LoadoutRole = {
  Armor: "Armor",
  Primary: "Primary",
  Secondary: "Secondary",
  Throwable: "Throwable",
  Stratagem: "Stratagem",
} as const;
export type LoadoutRole = (typeof LoadoutRole)[keyof typeof LoadoutRole];

export type Asset = {
  role: LoadoutRole;
  name: string; // display name
  image?: string; // under /public
  description?: string;
  wiki?: string;
};

// Use slug keys to avoid spaces/punctuation issues
export const ASSETS = {
  "BP-77": {
    role: LoadoutRole.Armor,
    name: "BP-77 Grand Juror",
    image: "/assets/armor/BP-77_Grand_Juror_Body_Icon.png",
    description:
      "Each gilded detail is polished to perfection by re-educated dissidents, as part of the Lifelong Post-Infraction Atonement Program.",
    wiki: "https://helldivers.wiki.gg/index.php?curid=12788",
  },
  "SG-225SP": {
    role: LoadoutRole.Primary,
    name: "SG-225SP Breaker Spray&Pray",
    image: "/assets/primary/SG-225SP_Breaker_Spray&Pray_Primary_Weaponry.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/wiki/SG-225SP_Breaker_Spray%26Pray",
  },
  "P-92": {
    role: LoadoutRole.Secondary,
    name: "P-92 Warrant",
    image: "/assets/secondary/P-92_Warrant_Secondary_Render.png",
    description: "test",
    wiki: "https://helldivers.wiki.gg/index.php?curid=13115",
  },
  "G-4": {
    role: LoadoutRole.Throwable,
    name: "G-4 Gas",
    image: "/assets/throwable/G-4_Gas_Throwable_Weaponry.png",
    description: "",
    wiki: "https://helldivers.wiki.gg/index.php?curid=7435",
  },

  // ORBITAL SUPPORT STRATAGEMS
  "OPS": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Precision Strike",
    image: "https://helldivers.wiki.gg/images/thumb/e/ec/Orbital_Precision_Strike_Stratagem_Icon.png/256px-Orbital_Precision_Strike_Stratagem_Icon.png",
    description: "A precise orbital strike that delivers a concentrated blast at the target location.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Precision_Strike",
  },
  "OGB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Gatling Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/e/ec/Orbital_Gatling_Barrage_Stratagem_Icon.png/256px-Orbital_Gatling_Barrage_Stratagem_Icon.png",
    description: "A devastating barrage of 23mm shells from above.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Gatling_Barrage",
  },
  "OAB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Airburst Strike",
    image: "https://helldivers.wiki.gg/images/thumb/1/1c/Orbital_Airburst_Strike_Stratagem_Icon.png/256px-Orbital_Airburst_Strike_Stratagem_Icon.png",
    description: "An orbital strike that detonates above ground for maximum area coverage.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Airburst_Strike",
  },
  "O120HB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital 120mm HE Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/8/87/Orbital_120mm_HE_Barrage_Stratagem_Icon.png/256px-Orbital_120mm_HE_Barrage_Stratagem_Icon.png",
    description: "A sustained barrage of 120mm high-explosive shells.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_120mm_HE_Barrage",
  },
  "O380HB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital 380mm HE Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/6/64/Orbital_380mm_HE_Barrage_Stratagem_Icon.png/256px-Orbital_380mm_HE_Barrage_Stratagem_Icon.png",
    description: "A devastating barrage of massive 380mm high-explosive shells.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_380mm_HE_Barrage",
  },
  "OWB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Walking Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/b/be/Orbital_Walking_Barrage_Stratagem_Icon.png/256px-Orbital_Walking_Barrage_Stratagem_Icon.png",
    description: "A moving barrage that walks across the battlefield.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Walking_Barrage",
  },
  "OLS": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Laser",
    image: "https://helldivers.wiki.gg/images/thumb/c/c1/Orbital_Laser_Stratagem_Icon.png/256px-Orbital_Laser_Stratagem_Icon.png",
    description: "A focused laser beam from orbit that tracks targets.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Laser",
  },
  "ORS": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Railcannon Strike",
    image: "https://helldivers.wiki.gg/images/thumb/a/a8/Orbital_Railcannon_Strike_Stratagem_Icon.png/256px-Orbital_Railcannon_Strike_Stratagem_Icon.png",
    description: "A high-velocity railcannon strike from orbit.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Railcannon_Strike",
  },
  "OSB": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Smoke Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/4/47/Orbital_Smoke_Barrage_Stratagem_Icon.png/256px-Orbital_Smoke_Barrage_Stratagem_Icon.png",
    description: "Creates a smoke screen to obscure vision.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Smoke_Barrage",
  },
  "OEMSM": {
    role: LoadoutRole.Stratagem,
    name: "Orbital EMS Mortar",
    image: "https://helldivers.wiki.gg/images/thumb/9/9e/Orbital_EMS_Strike_Stratagem_Icon.png/256px-Orbital_EMS_Strike_Stratagem_Icon.png",
    description: "An electromagnetic pulse mortar that disables electronics.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_EMS_Strike",
  },
  "OGS": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Gas Strike",
    image: "https://helldivers.wiki.gg/images/thumb/2/26/Orbital_Gas_Strike_Stratagem_Icon.png/256px-Orbital_Gas_Strike_Stratagem_Icon.png",
    description: "Deploys toxic gas clouds over the target area.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Gas_Strike",
  },
  "ONBS": {
    role: LoadoutRole.Stratagem,
    name: "Orbital Napalm Barrage",
    image: "https://helldivers.wiki.gg/images/thumb/f/f1/Orbital_Napalm_Barrage_Stratagem_Icon.png/256px-Orbital_Napalm_Barrage_Stratagem_Icon.png",
    description: "Covers the area in burning napalm for area denial.",
    wiki: "https://helldivers.wiki.gg/wiki/Orbital_Napalm_Barrage",
  },

  // EAGLE SUPPORT STRATAGEMS
  "EA": {
    role: LoadoutRole.Stratagem,
    name: "Eagle Airstrike",
    image: "https://helldivers.wiki.gg/images/thumb/4/4b/Eagle_Airstrike_Stratagem_Icon.png/256px-Eagle_Airstrike_Stratagem_Icon.png",
    description: "Unleashes a powerful bombardment of six bombs in a straight line.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_Airstrike",
  },
  "ESR": {
    role: LoadoutRole.Stratagem,
    name: "Eagle Strafing Run",
    image: "https://helldivers.wiki.gg/images/thumb/8/85/Eagle_Strafing_Run_Stratagem_Icon.png/256px-Eagle_Strafing_Run_Stratagem_Icon.png",
    description: "Calls the Eagle in to fire a barrage of anti-tank, high-explosive shells.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_Strafing_Run",
  },
  "ECB": {
    role: LoadoutRole.Stratagem,
    name: "Eagle Cluster Bomb",
    image: "https://helldivers.wiki.gg/images/thumb/7/7a/Eagle_Cluster_Bomb_Stratagem_Icon.png/256px-Eagle_Cluster_Bomb_Stratagem_Icon.png",
    description: "Drops cluster bombs that spread over a wide area.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_Cluster_Bomb",
  },
  "ENS": {
    role: LoadoutRole.Stratagem,
    name: "Eagle Napalm Airstrike",
    image: "https://helldivers.wiki.gg/images/thumb/4/44/Eagle_Napalm_Airstrike_Stratagem_Icon.png/256px-Eagle_Napalm_Airstrike_Stratagem_Icon.png",
    description: "Drops napalm canisters that create burning areas.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_Napalm_Airstrike",
  },
  "ESS": {
    role: LoadoutRole.Stratagem,
    name: "Eagle Smoke Strike",
    image: "https://helldivers.wiki.gg/images/thumb/6/63/Eagle_Smoke_Strike_Stratagem_Icon.png/256px-Eagle_Smoke_Strike_Stratagem_Icon.png",
    description: "Deploys smoke canisters to create concealment.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_Smoke_Strike",
  },
  "E110RP": {
    role: LoadoutRole.Stratagem,
    name: "Eagle 110mm Rocket Pods",
    image: "https://helldivers.wiki.gg/images/thumb/7/7c/Eagle_110mm_Rocket_Pods_Stratagem_Icon.png/256px-Eagle_110mm_Rocket_Pods_Stratagem_Icon.png",
    description: "Fires a salvo of 110mm rockets at the target area.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_110mm_Rocket_Pods",
  },
  "E500": {
    role: LoadoutRole.Stratagem,
    name: "Eagle 500kg Bomb",
    image: "https://helldivers.wiki.gg/images/thumb/f/f9/Eagle_500kg_Bomb_Stratagem_Icon.png/256px-Eagle_500kg_Bomb_Stratagem_Icon.png",
    description: "Drops a massive 500kg bomb for maximum destruction.",
    wiki: "https://helldivers.wiki.gg/wiki/Eagle_500kg_Bomb",
  },

  // HANGAR STRATAGEMS (SUPPORT WEAPONS)
  "MG-43": {
    role: LoadoutRole.Stratagem,
    name: "MG-43 Machine Gun",
    image: "https://helldivers.wiki.gg/images/thumb/0/0b/MG-43_Machine_Gun_Stratagem_Icon.png/256px-MG-43_Machine_Gun_Stratagem_Icon.png",
    description: "A reliable machine gun for sustained fire support.",
    wiki: "https://helldivers.wiki.gg/wiki/MG-43_Machine_Gun",
  },
  "APW-1": {
    role: LoadoutRole.Stratagem,
    name: "APW-1 Anti-Materiel Rifle",
    image: "https://helldivers.wiki.gg/images/thumb/a/a7/APW-1_Anti-Materiel_Rifle_Stratagem_Icon.png/256px-APW-1_Anti-Materiel_Rifle_Stratagem_Icon.png",
    description: "A high-powered rifle for long-range precision shots.",
    wiki: "https://helldivers.wiki.gg/wiki/APW-1_Anti-Materiel_Rifle",
  },
  "M-105": {
    role: LoadoutRole.Stratagem,
    name: "M-105 Stalwart",
    image: "https://helldivers.wiki.gg/images/thumb/4/49/M-105_Stalwart_Stratagem_Icon.png/256px-M-105_Stalwart_Stratagem_Icon.png",
    description: "A lightweight machine gun for mobile support.",
    wiki: "https://helldivers.wiki.gg/wiki/M-105_Stalwart",
  },
  "EAT-17": {
    role: LoadoutRole.Stratagem,
    name: "EAT-17 Expendable Anti-tank",
    image: "https://helldivers.wiki.gg/images/thumb/a/a1/EAT-17_Expendable_Anti-tank_Stratagem_Icon.png/256px-EAT-17_Expendable_Anti-tank_Stratagem_Icon.png",
    description: "A disposable anti-tank rocket launcher.",
    wiki: "https://helldivers.wiki.gg/wiki/EAT-17_Expendable_Anti-tank",
  },
  "GR-8": {
    role: LoadoutRole.Stratagem,
    name: "GR-8 Recoilless Rifle",
    image: "https://helldivers.wiki.gg/images/thumb/b/b6/GR-8_Recoilless_Rifle_Stratagem_Icon.png/256px-GR-8_Recoilless_Rifle_Stratagem_Icon.png",
    description: "A powerful anti-tank rifle that requires teamwork to reload.",
    wiki: "https://helldivers.wiki.gg/wiki/GR-8_Recoilless_Rifle",
  },
  "FAF-14": {
    role: LoadoutRole.Stratagem,
    name: "FAF-14 Spear",
    image: "https://helldivers.wiki.gg/images/thumb/d/d0/FAF-14_Spear_Stratagem_Icon.png/256px-FAF-14_Spear_Stratagem_Icon.png",
    description: "A guided missile launcher for precision strikes.",
    wiki: "https://helldivers.wiki.gg/wiki/FAF-14_Spear",
  },
  "GL-21": {
    role: LoadoutRole.Stratagem,
    name: "GL-21 Grenade Launcher",
    image: "https://helldivers.wiki.gg/images/thumb/4/4c/GL-21_Grenade_Launcher_Stratagem_Icon.png/256px-GL-21_Grenade_Launcher_Stratagem_Icon.png",
    description: "A versatile grenade launcher for area damage.",
    wiki: "https://helldivers.wiki.gg/wiki/GL-21_Grenade_Launcher",
  },
  "LAS-98": {
    role: LoadoutRole.Stratagem,
    name: "LAS-98 Laser Cannon",
    image: "https://helldivers.wiki.gg/images/thumb/5/51/Laser_Cannon_Stratagem_Icon.png/256px-Laser_Cannon_Stratagem_Icon.png",
    description: "A laser weapon that builds up heat to penetrate armor.",
    wiki: "https://helldivers.wiki.gg/wiki/LAS-98_Laser_Cannon",
  },
  "AC-8": {
    role: LoadoutRole.Stratagem,
    name: "AC-8 Autocannon",
    image: "https://helldivers.wiki.gg/images/thumb/3/3c/AC-8_Autocannon_Stratagem_Icon.png/256px-AC-8_Autocannon_Stratagem_Icon.png",
    description: "A rapid-firing cannon effective against medium armor.",
    wiki: "https://helldivers.wiki.gg/wiki/AC-8_Autocannon",
  },
  "FLAM-40": {
    role: LoadoutRole.Stratagem,
    name: "FLAM-40 Flamethrower",
    image: "https://helldivers.wiki.gg/images/thumb/4/42/FLAM-40_Flamethrower_Stratagem_Icon.png/256px-FLAM-40_Flamethrower_Stratagem_Icon.png",
    description: "Burns enemies with sustained flame attacks.",
    wiki: "https://helldivers.wiki.gg/wiki/FLAM-40_Flamethrower",
  },
  "RS-422": {
    role: LoadoutRole.Stratagem,
    name: "RS-422 Railgun",
    image: "https://helldivers.wiki.gg/images/thumb/c/c9/RS-422_Railgun_Stratagem_Icon.png/256px-RS-422_Railgun_Stratagem_Icon.png",
    description: "A charged weapon that fires electromagnetic projectiles.",
    wiki: "https://helldivers.wiki.gg/wiki/RS-422_Railgun",
  },
  "ARC-3": {
    role: LoadoutRole.Stratagem,
    name: "ARC-3 Arc Thrower",
    image: "https://helldivers.wiki.gg/images/thumb/8/8a/ARC-3_Arc_Thrower_Stratagem_Icon.png/256px-ARC-3_Arc_Thrower_Stratagem_Icon.png",
    description: "An electrical weapon that chains between targets.",
    wiki: "https://helldivers.wiki.gg/wiki/ARC-3_Arc_Thrower",
  },
  "LAS-99": {
    role: LoadoutRole.Stratagem,
    name: "LAS-99 Quasar Cannon",
    image: "https://helldivers.wiki.gg/images/thumb/7/76/LAS-99_Quasar_Cannon_Stratagem_Icon.png/256px-LAS-99_Quasar_Cannon_Stratagem_Icon.png",
    description: "A powerful laser cannon with a long charge time.",
    wiki: "https://helldivers.wiki.gg/wiki/LAS-99_Quasar_Cannon",
  },
  "MG-206": {
    role: LoadoutRole.Stratagem,
    name: "MG-206 Heavy Machine Gun",
    image: "https://helldivers.wiki.gg/images/thumb/f/f5/MG-206_Heavy_Machine_Gun_Stratagem_Icon.png/256px-MG-206_Heavy_Machine_Gun_Stratagem_Icon.png",
    description: "A heavy machine gun for sustained suppression.",
    wiki: "https://helldivers.wiki.gg/wiki/MG-206_Heavy_Machine_Gun",
  },
  "AIRBURST-RL": {
    role: LoadoutRole.Stratagem,
    name: "Airburst Rocket Launcher",
    image: "https://helldivers.wiki.gg/images/thumb/6/64/Airburst_Rocket_Launcher_Stratagem_Icon.png/256px-Airburst_Rocket_Launcher_Stratagem_Icon.png",
    description: "Fires rockets that explode above targets.",
    wiki: "https://helldivers.wiki.gg/wiki/Airburst_Rocket_Launcher",
  },
  "StA-X3": {
    role: LoadoutRole.Stratagem,
    name: "StA-X3 W.A.S.P. Launcher",
    image: "https://helldivers.wiki.gg/images/thumb/a/aa/StA-X3_WASP_Launcher_Stratagem_Icon.png/256px-StA-X3_WASP_Launcher_Stratagem_Icon.png",
    description: "Launches guided missiles with advanced targeting.",
    wiki: "https://helldivers.wiki.gg/wiki/StA-X3_W.A.S.P._Launcher",
  },

  // DEFENSIVE STRATAGEMS
  "ATE": {
    role: LoadoutRole.Stratagem,
    name: "Anti-Tank Emplacement",
    image: "https://helldivers.wiki.gg/images/thumb/3/30/Anti-Tank_Emplacement_Stratagem_Icon.png/256px-Anti-Tank_Emplacement_Stratagem_Icon.png",
    description: "A stationary anti-tank gun for defensive positions.",
    wiki: "https://helldivers.wiki.gg/wiki/Anti-Tank_Emplacement",
  },
  "APM": {
    role: LoadoutRole.Stratagem,
    name: "Anti-Personnel Minefield",
    image: "https://helldivers.wiki.gg/images/thumb/5/5c/Anti-Personnel_Minefield_Stratagem_Icon.png/256px-Anti-Personnel_Minefield_Stratagem_Icon.png",
    description: "Deploys mines that detonate when enemies approach.",
    wiki: "https://helldivers.wiki.gg/wiki/Anti-Personnel_Minefield",
  },
  "IM": {
    role: LoadoutRole.Stratagem,
    name: "Incendiary Minefield",
    image: "https://helldivers.wiki.gg/images/thumb/4/45/Incendiary_Minefield_Stratagem_Icon.png/256px-Incendiary_Minefield_Stratagem_Icon.png",
    description: "Mines that create fire when detonated.",
    wiki: "https://helldivers.wiki.gg/wiki/Incendiary_Minefield",
  },
  "HMG-E": {
    role: LoadoutRole.Stratagem,
    name: "HMG Emplacement",
    image: "https://helldivers.wiki.gg/images/thumb/b/b2/HMG_Emplacement_Stratagem_Icon.png/256px-HMG_Emplacement_Stratagem_Icon.png",
    description: "A heavy machine gun emplacement for area control.",
    wiki: "https://helldivers.wiki.gg/wiki/HMG_Emplacement",
  },
  "SGR": {
    role: LoadoutRole.Stratagem,
    name: "Shield Generator Relay",
    image: "https://helldivers.wiki.gg/images/thumb/e/e9/Shield_Generator_Relay_Stratagem_Icon.png/256px-Shield_Generator_Relay_Stratagem_Icon.png",
    description: "Creates a protective energy shield dome.",
    wiki: "https://helldivers.wiki.gg/wiki/Shield_Generator_Relay",
  },
  "ATM": {
    role: LoadoutRole.Stratagem,
    name: "Anti-Tank Mines",
    image: "https://helldivers.wiki.gg/images/thumb/6/64/Anti-Tank_Mines_Stratagem_Icon.png/256px-Anti-Tank_Mines_Stratagem_Icon.png",
    description: "Heavy mines designed to destroy vehicles.",
    wiki: "https://helldivers.wiki.gg/wiki/Anti-Tank_Mines",
  },
  "GB": {
    role: LoadoutRole.Stratagem,
    name: "Grenadier Battlement",
    image: "https://helldivers.wiki.gg/images/thumb/b/b5/Grenadier_Battlement_Stratagem_Icon.png/256px-Grenadier_Battlement_Stratagem_Icon.png",
    description: "A defensive position with grenade launchers.",
    wiki: "https://helldivers.wiki.gg/wiki/Grenadier_Battlement",
  },
  "TT": {
    role: LoadoutRole.Stratagem,
    name: "Tesla Tower",
    image: "https://helldivers.wiki.gg/images/thumb/9/99/Tesla_Tower_Stratagem_Icon.png/256px-Tesla_Tower_Stratagem_Icon.png",
    description: "An electrical tower that chains lightning between enemies.",
    wiki: "https://helldivers.wiki.gg/wiki/Tesla_Tower",
  },
  "GM": {
    role: LoadoutRole.Stratagem,
    name: "Gas Mines",
    image: "https://helldivers.wiki.gg/images/thumb/1/16/Gas_Mines_Stratagem_Icon.png/256px-Gas_Mines_Stratagem_Icon.png",
    description: "Mines that release toxic gas clouds.",
    wiki: "https://helldivers.wiki.gg/wiki/Gas_Mines",
  },

  // SENTRY STRATAGEMS
  "FS": {
    role: LoadoutRole.Stratagem,
    name: "Flame Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/9/90/Flame_Sentry_Stratagem_Icon.png/256px-Flame_Sentry_Stratagem_Icon.png",
    description: "An automated sentry that burns enemies with flames.",
    wiki: "https://helldivers.wiki.gg/wiki/Flame_Sentry",
  },
  "LS": {
    role: LoadoutRole.Stratagem,
    name: "Laser Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/0/06/Laser_Sentry_Stratagem_Icon.png/256px-Laser_Sentry_Stratagem_Icon.png",
    description: "A sentry that fires precise laser beams.",
    wiki: "https://helldivers.wiki.gg/wiki/Laser_Sentry",
  },
  "MGS": {
    role: LoadoutRole.Stratagem,
    name: "Machine Gun Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/7/73/Machine_Gun_Sentry_Stratagem_Icon.png/256px-Machine_Gun_Sentry_Stratagem_Icon.png",
    description: "An automated machine gun for area suppression.",
    wiki: "https://helldivers.wiki.gg/wiki/Machine_Gun_Sentry",
  },
  "GS": {
    role: LoadoutRole.Stratagem,
    name: "Gatling Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/1/1f/Gatling_Sentry_Stratagem_Icon.png/256px-Gatling_Sentry_Stratagem_Icon.png",
    description: "A high-rate-of-fire gatling gun sentry.",
    wiki: "https://helldivers.wiki.gg/wiki/Gatling_Sentry",
  },
  "MS": {
    role: LoadoutRole.Stratagem,
    name: "Mortar Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/1/1e/Mortar_Sentry_Stratagem_Icon.png/256px-Mortar_Sentry_Stratagem_Icon.png",
    description: "An indirect fire sentry with explosive shells.",
    wiki: "https://helldivers.wiki.gg/wiki/Mortar_Sentry",
  },
  "ACS": {
    role: LoadoutRole.Stratagem,
    name: "Autocannon Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/5/59/Autocannon_Sentry_Stratagem_Icon.png/256px-Autocannon_Sentry_Stratagem_Icon.png",
    description: "A sentry armed with an autocannon.",
    wiki: "https://helldivers.wiki.gg/wiki/Autocannon_Sentry",
  },
  "RS": {
    role: LoadoutRole.Stratagem,
    name: "Rocket Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/e/e5/Rocket_Sentry_Stratagem_Icon.png/256px-Rocket_Sentry_Stratagem_Icon.png",
    description: "A sentry that fires anti-armor rockets.",
    wiki: "https://helldivers.wiki.gg/wiki/Rocket_Sentry",
  },
  "EMSS": {
    role: LoadoutRole.Stratagem,
    name: "EMS Mortar Sentry",
    image: "https://helldivers.wiki.gg/images/thumb/b/bd/EMS_Mortar_Sentry_Stratagem_Icon.png/256px-EMS_Mortar_Sentry_Stratagem_Icon.png",
    description: "A mortar sentry that fires EMP shells.",
    wiki: "https://helldivers.wiki.gg/wiki/EMS_Mortar_Sentry",
  },

  // BACKPACK STRATAGEMS
  "B-1": {
    role: LoadoutRole.Stratagem,
    name: "B-1 Supply Pack",
    image: "https://helldivers.wiki.gg/images/thumb/6/6b/B-1_Supply_Pack_Stratagem_Icon.png/256px-B-1_Supply_Pack_Stratagem_Icon.png",
    description: "A backpack that provides ammunition to teammates.",
    wiki: "https://helldivers.wiki.gg/wiki/B-1_Supply_Pack",
  },
  "B-100": {
    role: LoadoutRole.Stratagem,
    name: "B-100 Portable Hellbomb",
    image: "https://helldivers.wiki.gg/images/Portable_Hellbomb_Stratagem_Icon.png",
    description: "A portable tactical nuclear weapon capable of obliterating anything nearby.",
    wiki: "https://helldivers.wiki.gg/wiki/B-100_Portable_Hellbomb",
  },
  "SH-20": {
    role: LoadoutRole.Stratagem,
    name: "SH-20 Ballistic Shield Backpack",
    image: "https://helldivers.wiki.gg/images/thumb/3/3c/SH-20_Ballistic_Shield_Backpack_Stratagem_Icon.png/256px-SH-20_Ballistic_Shield_Backpack_Stratagem_Icon.png",
    description: "Provides portable cover against enemy small arms fire.",
    wiki: "https://helldivers.wiki.gg/wiki/SH-20_Ballistic_Shield_Backpack",
  },
  "SH-32": {
    role: LoadoutRole.Stratagem,
    name: "SH-32 Directional Shield",
    image: "https://helldivers.wiki.gg/images/thumb/3/35/SH-32_Directional_Shield_Stratagem_Icon.png/256px-SH-32_Directional_Shield_Stratagem_Icon.png",
    description: "A directional energy shield for protection.",
    wiki: "https://helldivers.wiki.gg/wiki/SH-32_Directional_Shield",
  },
  "JUMP-PACK": {
    role: LoadoutRole.Stratagem,
    name: "LIFT-850 Jump Pack",
    image: "https://helldivers.wiki.gg/images/thumb/5/5b/LIFT-850_Jump_Pack_Stratagem_Icon.png/256px-LIFT-850_Jump_Pack_Stratagem_Icon.png",
    description: "Allows the user to make powered jumps over obstacles.",
    wiki: "https://helldivers.wiki.gg/wiki/LIFT-850_Jump_Pack",
  },
  "HOVER-PACK": {
    role: LoadoutRole.Stratagem,
    name: "LIFT-860 Hover Pack",
    image: "https://helldivers.wiki.gg/images/thumb/7/73/LIFT-860_Hover_Pack_Stratagem_Icon.png/256px-LIFT-860_Hover_Pack_Stratagem_Icon.png",
    description: "Propels the wearer in the air for extended flight time.",
    wiki: "https://helldivers.wiki.gg/wiki/LIFT-860_Hover_Pack",
  },
  "GUARD-DOG": {
    role: LoadoutRole.Stratagem,
    name: "AX/LAS-5 \"Guard Dog\" Rover",
    image: "https://helldivers.wiki.gg/images/thumb/b/b4/Guard_Dog_Rover_Stratagem_Icon.png/256px-Guard_Dog_Rover_Stratagem_Icon.png",
    description: "An automated drone that fires laser beams at enemies.",
    wiki: "https://helldivers.wiki.gg/wiki/AX/LAS-5_%22Guard_Dog%22_Rover",
  },
  "GUARD-DOG-BREATH": {
    role: LoadoutRole.Stratagem,
    name: "AX/AR-23 \"Guard Dog\" Dog Breath",
    image: "https://helldivers.wiki.gg/images/thumb/8/84/Guard_Dog_Dog_Breath_Stratagem_Icon.png/256px-Guard_Dog_Dog_Breath_Stratagem_Icon.png",
    description: "A flame-based version of the Guard Dog drone.",
    wiki: "https://helldivers.wiki.gg/wiki/AX/AR-23_%22Guard_Dog%22_Dog_Breath",
  },
  "GUARD-DOG-K9": {
    role: LoadoutRole.Stratagem,
    name: "AX/ARC-3 \"Guard Dog\" K-9",
    image: "https://helldivers.wiki.gg/images/thumb/3/3b/Guard_Dog_K9_Stratagem_Icon.png/256px-Guard_Dog_K9_Stratagem_Icon.png",
    description: "An arc-based version of the Guard Dog drone.",
    wiki: "https://helldivers.wiki.gg/wiki/AX/ARC-3_%22Guard_Dog%22_K-9",
  },

  // VEHICLES
  "M-102": {
    role: LoadoutRole.Stratagem,
    name: "M-102 Fast Reconnaissance Vehicle",
    image: "https://helldivers.wiki.gg/images/thumb/5/52/M-102_Fast_Recon_Vehicle_Stratagem_Icon.png/256px-M-102_Fast_Recon_Vehicle_Stratagem_Icon.png",
    description: "A fast vehicle for rapid battlefield reconnaissance.",
    wiki: "https://helldivers.wiki.gg/wiki/M-102_Fast_Reconnaissance_Vehicle",
  },
  "EXO-45": {
    role: LoadoutRole.Stratagem,
    name: "EXO-45 Patriot Exosuit",
    image: "https://helldivers.wiki.gg/images/thumb/0/02/EXO-45_Patriot_Exosuit_Stratagem_Icon.png/256px-EXO-45_Patriot_Exosuit_Stratagem_Icon.png",
    description: "A powered exoskeleton with heavy weaponry.",
    wiki: "https://helldivers.wiki.gg/wiki/EXO-45_Patriot_Exosuit",
  },
  "EXO-49": {
    role: LoadoutRole.Stratagem,
    name: "EXO-49 Emancipator Exosuit",
    image: "https://helldivers.wiki.gg/images/thumb/5/59/EXO-49_Emancipator_Exosuit_Stratagem_Icon.png/256px-EXO-49_Emancipator_Exosuit_Stratagem_Icon.png",
    description: "An advanced exosuit with superior firepower.",
    wiki: "https://helldivers.wiki.gg/wiki/EXO-49_Emancipator_Exosuit",
  },
} as const;

// Helpful types
export type AssetId = keyof typeof ASSETS;
export function getAsset(id: AssetId): Asset {
  return ASSETS[id];
}
