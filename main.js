const item01 = { Name: "Boots of Striding", Cost: 20, Quantity: 2, Description: "During your movement, add +2 Move to the movement.", Type: "Foot", src: "boots-of-striding.png", indexNumber: 1 };
const item02 = { Name: "Winged Shoes", Cost: 20, Quantity: 2, Description: "During your movement, add Jump to the movement.", Type: "Foot", src: "winged-shoes.png", indexNumber: 2 };
const item03 = { Name: "Hide Armor", Cost: 10, Quantity: 2, Description: "On the next two sources of damage to you from attacks, gain Shield 1.", Type: "Armor", src: "hide-armor.png", indexNumber: 3 };
const item04 = { Name: "Leather Armor", Cost: 20, Quantity: 2, Description: "When attacked, the attacker gains Disadvantage on the attack.", Type: "Armor", src: "leather-armor.png", indexNumber: 4 };
const item05 = { Name: "Cloak Of Invisibility", Cost: 20, Quantity: 2, Description: "During your turn, gain INVISIBLE.", Type: "Armor", src: "cloak-of-invisibility.png", indexNumber: 5 };
const item06 = { Name: "Eagle Eye Goggles", Cost: 30, Quantity: 2, Description: "During your attack, gain Advantage on the entire Attack action.", Type: "Headgear", src: "eagle-eye-goggles.png", indexNumber: 6 };
const item07 = { Name: "Iron Helmet", Cost: 10, Quantity: 2, Description: "During your attack, gain Advantage on the entire Attack action.", Type: "Headgear", src: "iron-helmet.png", indexNumber: 7 };
const item08 = { Name: "Heater Shield", Cost: 20, Quantity: 2, Description: "When attacked, consider any 2x attack modifier card the enemy draws to be a +0 instead.", Type: "One-Hand", src: "heater-shield.png", indexNumber: 8 };
const item09 = { Name: "Piercing Bow", Cost: 30, Quantity: 2, Description: "During your ranged attack, ignore all Shield values for the entire Attack action.", Type: "Two-Hand", src: "piercing-bow.png", indexNumber: 9 };
const item10 = { Name: "War Hammer", Cost: 30, Quantity: 2, Description: "During your melee attack, add STUN to the entire Attack action.", Type: "Two-Hand", src: "war-hammer.png", indexNumber: 10 };
const item11 = { Name: "Poison Dagger", Cost: 20, Quantity: 2, Description: "During your melee attack, add POISON to a single action.", Type: "One-Hand", src: "poison-dagger.png", indexNumber: 11 };
const item12 = { Name: "Minor Healing Potion", Cost: 10, Quantity: 4, Description: "During your turn, Heal 3 damage.", Type: "Purse", src: "minor-healing-potion.png", indexNumber: 12 };
const item13 = { Name: "Minor Stamina Potion", Cost: 10, Quantity: 4, Description: "During your turn, Recover up to two of your discarded cards.", Type: "Purse", src: "minor-stamina-potion.png", indexNumber: 13 };
const item14 = { Name: "Minor Power Potion", Cost: 10, Quantity: 4, Description: "During your attack, add +1 Attack to your entire Attack action.", Type: "Purse", src: "minor-power-potion.png", indexNumber: 14 }
const item15 = { Name: "Boots of Speed", Cost: 30, Quantity: 2, Description: "At the beginning of a round, after all ability cards have been revealed, increase or decrease your leading initiative value by 10.", Type: "Foot", src: "boots-of-speed.png", indexNumber: 15 };
const item16 = { Name: "Cloak Of Pockets", Cost: 20, Quantity: 2, Description: "You can carry two additional small items.", Type: "Armor", src: "cloak-of-pockets.png", indexNumber: 16 };
const item17 = { Name: "Empowering Talisman", Cost: 45, Quantity: 2, Description: "During your turn, Refresh one of your consumed small items.", Type: "Headgear", src: "empowering-talisman.png", indexNumber: 17 };
const item18 = { Name: "Battle-Axe", Cost: 20, Quantity: 2, Description: "During your single-target melee attack action, turn the attack into the following: (2 adjacent hexes, both adjacent to you)", Type: "One-Hand", src: "battle-axe.png", indexNumber: 18 };
const item19 = { Name: "Weighted Net", Cost: 20, Quantity: 2, Description: "During your ranged attack, add IMMOBILIZE to a single attack.", Type: "Two-Hand", src: "weighted-net.png", indexNumber: 19 };
const item20 = { Name: "Minor Mana Potion", Cost: 10, Quantity: 4, Description: "During your turn, create any element.", Type: "Purse", src: "minor-mana-potion.png", indexNumber: 20 };
const item21 = { Name: "Stun Powder", Cost: 20, Quantity: 2, Description: "During your attack, add STUN to a single attack.", Type: "Purse", src: "stun-powder.png", indexNumber: 21 };
const item22 = { Name: "Heavy Greaves", Cost: 20, Quantity: 2, Description: "You are immune to all forced movement caused by enemies or scenario effects.", Type: "Foot", src: "heavy-greaves.png", indexNumber: 22 };
const item23 = { Name: "Chainmail", Cost: 20, Quantity: 2, Description: "On the next three sources of damage to you from attacks, gain Shield 1.", Type: "Armor", src: "chainmail.png", indexNumber: 23 }
const item24 = { Name: "Amulet Of Life", Cost: 20, Quantity: 2, Description: "During your turn, Heal 1 damage.", Type: "Headgear", src: "amulet-of-life.png", indexNumber: 24 }
const item25 = { Name: "Jagged Sword", Cost: 30, Quantity: 2, Description: "During your melee attack, add WOUND to a single attack.", Type: "One-Hand", src: "jagged-sword.png", indexNumber: 25 }
const item26 = { Name: "Long Spear", Cost: 30, Quantity: 2, Description: "Turn a single-target melee attack into the following: (2 adjacent hexes in a line from the player)", Type: "Two-Hand", src: "long-spear.png", indexNumber: 26 }
const item27 = { Name: "Major Healing Potion", Cost: 30, Quantity: 4, Description: "During your turn, Heal 5 damage.", Type: "Purse", src: "major-healing-potion.png", indexNumber: 27 }
const item28 = { Name: "Moon Earring", Cost: 20, Quantity: 2, Description: "During your turn, Refresh all of your spent items.", Type: "Purse", src: "moon-earring.png", indexNumber: 28 }
const item29 = { Name: "Comfortable Shoes", Cost: 30, Quantity: 2, Description: "Whenever you use the default bottom of an ability card, perform a Move 3 action instead of a Move 2 action.", Type: "Foot", src: "comfortable-shoes.png", indexNumber: 29 }
const item30 = { Name: "Studded Leather", Cost: 30, Quantity: 2, Description: "When attacked, the attacker gains Disadvantage on the attack and you gain Shield 1 for the attack.", Type: "Armor", src: "studded-leather.png", indexNumber: 30 }
const item31 = { Name: "Hawk Helm", Cost: 20, Quantity: 2, Description: "During your ranged attack, add +1 Range to your entire Attack action.", Type: "Headgear", src: "hawk-helm.png", indexNumber: 31 }
const item32 = { Name: "Tower Shield", Cost: 40, Quantity: 2, Description: "When damaged by an attack, gain Shield 2 for the attack", Type: "One-Hand", src: "tower-shield.png", indexNumber: 32 }
const item33 = { Name: "Volatile Bomb", Cost: 30, Quantity: 2, Description: "During your single-target ranged attack action, turn the attack into the following: (3 adjacent hexes, all adjacent to each other)", Type: "One-Hand", src: "volatile-bomb.png", indexNumber: 33 }
const item34 = { Name: "Major Stamina Potion", Cost: 30, Quantity: 4, Description: "During your turn, Recover up to three of your discarded cards", Type: "Purse", src: "major-stamina-potion.png", indexNumber: 34 }
const item35 = { Name: "Falcon Figurine", Cost: 50, Quantity: 2, Description: "Summon Jade Falcon (Flying)", Type: "Purse", src: "falcon-figurine.png", indexNumber: 35 }
const item36 = { Name: "Boots Of Dashing", Cost: 40, Quantity: 2, Description: "During your movement, add +3 Move to the movement.", Type: "Foot", src: "boots-of-dashing.png", indexNumber: 36 }
const item37 = { Name: "Robes of Evocation", Cost: 40, Quantity: 2, Description: "During your attack, consume any element to add +1 Attack to the entire Attack action", Type: "Armor", src: "robes-of-evocation.png", indexNumber: 37 }
const item38 = { Name: "Heavy Basinet", Cost: 30, Quantity: 2, Description: "You are immune to STUN and MUDDLE", Type: "Headgear", src: "heavy-basinet.png", indexNumber: 38 }
const item39 = { Name: "Hooked Chain", Cost: 40, Quantity: 2, Description: "During your ranged attack, add PULL 2 to the entire Attack action", Type: "Two-Hand", src: "hooked-chain.png", indexNumber: 39 }
const item40 = { Name: "Versatile Dagger", Cost: 25, Quantity: 2, Description: "Whenever you use the default top of an ability card, perform an Attack 3 action instead of an Attack 2 action.", Type: "One-Hand", src: "versatile-dagger.png", indexNumber: 40 }
const item41 = { Name: "Major Power Potion", Cost: 40, Quantity: 4, Description: "During your attack, add +2 Attack to your entire attack action.", Type: "Purse", src: "major-power-potion.png", indexNumber: 41 }
const item42 = { Name: "Ring of Haste", Cost: 30, Quantity: 2, Description: "At the end of your turn, play one card from your hand and immediately perform the bottom action of the card.", Type: "Purse", src: "ring-of-haste.png", indexNumber: 42 }
const item43 = { Name: "Boots of Quickness", Cost: 75, Quantity: 2, Description: "At the beginning of a round, after all ability cards have been revealed, increase or decrease your leading initiative value by 20.", Type: "Foot", src: "boots-of-quickness.png", indexNumber: 43 }
const item44 = { Name: "Splintmail", Cost: 35, Quantity: 2, Description: "On the next four sources of damage to you from attacks, gain Shield 1.", Type: "Armor", src: "splintmail.png", indexNumber: 44 }
const item45 = { Name: "Pendant of Dark Pacts", Cost: 75, Quantity: 2, Description: "During your turn, Refresh two of your consumed small items gain CURSE.", Type: "Headgear", src: "pendant-of-dark-pacts.png", indexNumber: 45 }
const item46 = { Name: "Spiked Shield", Cost: 20, Quantity: 2, Description: "When damaged by an attack, gain Shield 1 and Retaliate 2 for the attack.", Type: "One-Hand", src: "spiked-shield.png", indexNumber: 46 }
const item47 = { Name: "Reaping Scythe", Cost: 40, Quantity: 2, Description: "During your single-target melee attack action, turn the attack into the following: (3 hexes, all adjacent to the player, and two of which are adjacent to the middle target.)", Type: "Two-Hand", src: "reaping-scythe.png", indexNumber: 47 }
const item48 = { Name: "Major Mana Potion", Cost: 30, Quantity: 4, Description: "During your turn, create any two elements.", Type: "Purse", src: "major-mana-potion.png", indexNumber: 48 };
const item49 = { Name: "Sun Earring", Cost: 40, Quantity: 2, Description: "During your turn, Refresh all of your spent items and Heal 3 damage.", Type: "Purse", src: "sun-earring.png", indexNumber: 49 };
const item50 = { Name: "Steel Sabatons", Cost: 60, Quantity: 2, Description: "If you move 1 or fewer hexes on your turn, gain Shield 1 for the round.", Type: "Foot", src: "steel-sabatons.png", indexNumber: 50 };
const item51 = { Name: "Shadow Armor", Cost: 30, Quantity: 2, Description: "When you are damaged by an attack, suffer no damage instead.", Type: "Armor", src: "shadow-armor.png", indexNumber: 51 };
const item52 = { Name: "Protective Charm", Cost: 60, Quantity: 2, Description: "You are immune to POISON and WOUND.", Type: "Headgear", src: "protective-charm.png", indexNumber: 52 };
const item53 = { Name: "Black Knife", Cost: 25, Quantity: 2, Description: "During your melee attack, add CURSE to a single attack.", Type: "One-Hand", src: "Black-knife.png", indexNumber: 53 };
const item54 = { Name: "Staff of Eminence", Cost: 60, Quantity: 2, Description: "During your ranged attack, consume an element to add +1 Attack to the entire Attack action.", Type: "Two-Hand", src: "staff-of-eminence.png", indexNumber: 54 };
const item55 = { Name: "Super Healing Potion", Cost: 50, Quantity: 4, Description: "Durin your turn, Heal 7 damage.", Type: "Purse", src: "super-healing-potion.png", indexNumber: 55 };
const item56 = { Name: "Ring of Brutality", Cost: 40, Quantity: 2, Description: "At the end of your turn, play one card from your hand and immediately perform the top action of the card.", Type: "Purse", src: "ring-of-brutality.png", indexNumber: 56 };
const item57 = { Name: "Serrene Sandals", Cost: 75, Quantity: 2, Description: "Whenever you use the default bottom of an ability card perform a Move 4 action instead of a Move 2 action.", Type: "Foot", src: "serene-sandals.png", indexNumber: 57 };
const item58 = { Name: "Cloak of Phasing", Cost: 75, Quantity: 2, Description: "Gain flying. WHile occupying an obstacle hex, you are considered invisible and cannot attack.", Type: "Armor", src: "cloak-of-phasing.png", indexNumber: 58 };
const item59 = { Name: "Telescopic Lens", Cost: 50, Quantity: 2, Description: "During your ranged attack, add +2 Range to your Attack action.", Type: "Headgear", src: "telescopic-lens.png", indexNumber: 59 };
const item60 = { Name: "Unstable Explosives", Cost: 45, Quantity: 2, Description: "Turn a single target ranged attack into the following: (4 hex attack, 2 above and 2 below in a parallelogram). All allies in the attack area suffer 3 damage.", Type: "One-Hand", src: "unstable-explosives.png", indexNumber: 60 };
const item61 = { Name: "Wall Shield", Cost: 60, Quantity: 2, Description: "When damaged by an attack, gain Shield 4 for the attack.", Type: "Two-Hand", src: "wall-shield.png", indexNumber: 61 };
const item62 = { Name: "Doom Powder", Cost: 40, Quantity: 2, Description: "During your attack, add Stun, Poison, and Curse to a single attack.", Type: "Purse", src: "doom-powder.png", indexNumber: 62 };
const item63 = { Name: "Lucky Eye", Cost: 60, Quantity: 2, Description: "During your turn, Strengthen yourself and all adjacent allies.", Type: "Purse", src: "lucky-eye.png", indexNumber: 63 };
const item64 = { Name: "Boots of Sprinting", Cost: 75, Quantity: 2, Description: "During your movement, add +4 Move to the movement.", Type: "Foot", src: "boots-of-sprinting.png", indexNumber: 64 };
const item65 = { Name: "Platemail", Cost: 50, Quantity: 2, Description: "On the next five sources of damage to you from attacks, gain Shield 1", Type: "Armor", src: "platemail.png", indexNumber: 65 };
const item66 = { Name: "Mask of Terror", Cost: 50, Quantity: 2, Description: "During your melle attack, add Push 1.", Type: "Headgear", src: "mask-of-terror.png", indexNumber: 66 };
const item67 = { Name: "Balanced Blade", Cost: 60, Quantity: 2, Description: "Whenever you use the default top of an ability card, perform an Attack 4 instead of an Attack 2 action.", Type: "One-Hand", src: "balanced-blade.png", indexNumber: 67 };
const item68 = { Name: "Halberd", Cost: 75, Quantity: 2, Description: "During your single target melee attack, you can attack and single enemy within 2 hexes.", Type: "Two-Hand", src: "halberd.png", indexNumber: 68 }
const item69 = { Name: "Star Earring", Cost: 70, Quantity: 2, Description: "During your turn, Refresh all of your spent items, Heal 3 damage, and Recover up to two of your discarded cards.", Type: "Purse", src: "star-earring.png", indexNumber: 69 }
const item70 = { Name: "Second Chance Ring", Cost: 75, Quantity: 2, Description: "At the end of your turn, play two cards from your hand and perform an additional turn this round based on your new leading initiative (which must be later than your previous initiative).", Type: "Purse", src: "second-chance-ring.png", indexNumber: 70 }
const item71 = { Name: "Boots of Levitation", Cost: 50, Quantity: 2, Description: "Gain Flying.", Type: "Foot", src: "boots-of-levitation.png", indexNumber: 71 }
const item72 = { Name: "Shoes of Happiness", Cost: 50, Quantity: 2, Description: "If you move 6 or more hexes on your turn, gain 1 experience", Type: "Foot", src: "shoes-of-happiness.png", indexNumber: 72 }
const item73 = { Name: "Blinking Cape", Cost: 50, Quantity: 2, Description: "During your turn, perform a 'Move 4, Jump action'", Type: "Armor", src: "blinking-cape.png", indexNumber: 73 }
const item74 = { Name: "Swordedge Armor", Cost: 40, Quantity: 2, Description: "On the next three sources of damage from attacks targeting you, gain Shield 1, Retaliate 1", Type: "Armor", src: "swordedge-armor.png", indexNumber: 74 }
const item75 = { Name: "Circlet of Elements", Cost: 25, Quantity: 2, Description: "During your turn, consume any element to create any element", Type: "Headgear", src: "circlet-of-elements.png", indexNumber: 75 }
const item76 = { Name: "Chain Hood", Cost: 40, Quantity: 2, Description: "While you are adjacent to three or more monsters, gain Shield 1", Type: "Headgear", src: "chain-hood.png", indexNumber: 76 }
const item77 = { Name: "Frigid Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume Ice to add +2 Attack to a single attack.", Type: "One-Hand", src: "frigid-blade.png", indexNumber: 77 }
const item78 = { Name: "Storm Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume Wind to add +2 Attack to a single attack.", Type: "One-Hand", src: "storm-blade.png", indexNumber: 78 }
const item79 = { Name: "Inferno Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume fire to add +2 Attack to a single attack.", Type: "One-Hand", src: "inferno-blade.png", indexNumber: 79 }
const item80 = { Name: "Tremor Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume Earth to add +2 Attack to a single attack.", Type: "One-Hand", src: "tremor-blade.png", indexNumber: 80 }
const item81 = { Name: "Brilliant Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume Light to add +2 Attack to a single attack.", Type: "One-Hand", src: "brilliant-blade.png", indexNumber: 81 }
const item82 = { Name: "Night Blade", Cost: 30, Quantity: 2, Description: "During your melee attack, consume Dark to add +2 Attack to a single attack.", Type: "One-Hand", src: "night-blade.png", indexNumber: 82 }
const item83 = { Name: "Wand of Frost", Cost: 30, Quantity: 2, Description: "During your turn, create Ice.", Type: "One-Hand", src: "wand-of-frost.png", indexNumber: 83 }
const item84 = { Name: "Wand of Storms", Cost: 30, Quantity: 2, Description: "During your turn, create Wind.", Type: "One-Hand", src: "wand-of-storms.png", indexNumber: 84 }
const item85 = { Name: "Wand of Infernos", Cost: 30, Quantity: 2, Description: "During your turn, create Fire.", Type: "One-Hand", src: "wand-of-infernos.png", indexNumber: 85 }
const item86 = { Name: "Wand of Tremors", Cost: 30, Quantity: 2, Description: "During your turn, create Earth", Type: "One-Hand", src: "wand-of-tremors.png", indexNumber: 86 }
const item87 = { Name: "Wand of Brilliance", Cost: 30, Quantity: 2, Description: "During your turn, create Light.", Type: "One-Hand", src: "wand-of-brilliance.png", indexNumber: 87 }
const item88 = { Name: "Wand of Darkness", Cost: 30, Quantity: 2, Description: "During your turn, create Dark.", Type: "One-Hand", src: "wand-of-darkness.png", indexNumber: 88 }
const item89 = { Name: "Minor Cure Potion", Cost: 10, Quantity: 2, Description: "During your turn, remove one negative condition on yourself. This can be used while you have Stun.", Type: "Purse", src: "minor-cure-potion.png", indexNumber: 89 }
const item90 = { Name: "Major Cure Potion", Cost: 30, Quantity: 2, Description: "During your turn, remove all negative conditions on yourself. This can be used while you have Stun.", Type: "Purse", src: "major-cure-potion.png", indexNumber: 90 }
const item91 = { Name: "Steel Ring", Cost: 20, Quantity: 2, Description: "When damaged by an attack targeting you, gain Shield 4 for the attack.", Type: "Purse", src: "steel-ring.png", indexNumber: 91 }
const item92 = { Name: "Dampering Ring", Cost: 25, Quantity: 2, Description: "Before an enemy would consume an element, consume that element instead for no effect", Type: "Purse", src: "dampering-ring.png", indexNumber: 92 }
const item93 = { Name: "Scroll of Power", Cost: 30, Quantity: 2, Description: "During an ally's attack, add +1 Attack to their entire attack action", Type: "Purse", src: "scroll-of-power.png", indexNumber: 93 }
const item94 = { Name: "Scroll of Healing", Cost: 30, Quantity: 2, Description: "During your turn, perform a 'Heal 3, Range 5' action", Type: "Purse", src: "scroll-of-healing.png", indexNumber: 94 }
const item95 = { Name: "Scroll of Stamina", Cost: 50, Quantity: 2, Description: "During your turn, an ally within Range 5 may recover up to two of their discarded cards", Type: "Purse", src: "scroll-of-stamina.png", indexNumber: 95 }
const item96 = { Name: "Rocket Boots", Cost: 80, Quantity: 2, Description: "During your movement, add +3 Move and Jump to a single movement", Type: "Foot", src: "rocket-boots.png", indexNumber: 96 }
const item97 = { Name: "Endurance Footwraps", Cost: 40, Quantity: 1, Description: "If you move 4 or more hexes on your turn, perform a 'Heal 1, Self' action.", Type: "Foot", src: "endurance-footwraps.png", indexNumber: 97 }
const item98 = { Name: "Drakescale Boots", Cost: 50, Quantity: 1, Description: "You are unaffected by difficult and hazardous terrain.", Type: "Foot", src: "drakescale-boots.png", indexNumber: 98 }
const item99 = { Name: "Magma Waders", Cost: 50, Quantity: 1, Description: "Ignore the damaging effects of hazardous terrain and perform a 'Heal 2, Self' action on any turn in which you have entered a hazardous terrain hex.", Type: "Foot", src: "magma-waders.png", indexNumber: 99 }
const item100 = { Name: "Robes of Summoning", Cost: 40, Quantity: 1, Description: "During your turn, perform a 'Heal 2, target any summoned ally' action.", Type: "Armor", src: "robes-of-summoning.png", indexNumber: 100 }
const item101 = { Name: "Second Skin", Cost: 30, Quantity: 1, Description: "Remove two -1 from your attack modifier deck.", Type: "Armor", src: "second-skin.png", indexNumber: 101 }
const item102 = { Name: "Sacrificial Robes", Cost: 50, Quantity: 1, Description: "During your ranged attack, suffer 3 damage to add +1 Attack to the entire Attack action.", Type: "Armor", src: "sacrificial-robes.png", indexNumber: 102 }
const item103 = { Name: "Drakescale Armor", Cost: 50, Quantity: 1, Description: "You are immune to Poison and Wound.", Type: "Armor", src: "drakescale-armor.png", indexNumber: 103 }
const item104 = { Name: "Steam Armor", Cost: 50, Quantity: 1, Description: "On the next five sources of damage from attacks targeting you, gain Shield 1.", Type: "Armor", src: "steam-armor.png", indexNumber: 104 }
const item105 = { Name: "Flea-Bitten Shawl", Cost: 10, Quantity: 1, Description: "You are considered to have an initiative of 99 for the purpose of enemy focusing.", Type: "Armor", src: "flea-bitten-shawl.png", indexNumber: 105 }
const item106 = { Name: "Necklace of Teeth", Cost: 40, Quantity: 1, Description: "Any time you kill an enemy during your turn, perform a 'Heal 1, Self' action.", Type: "Headgear", src: "necklace-of-teeth.png", indexNumber: 106 }
const item107 = { Name: "Horned Helm", Cost: 30, Quantity: 2, Description: "After moving 4 or more hexes on your turn, add +1 Attack to your next melee attack this turn.", Type: "Headgear", src: "horned-helm.png", indexNumber: 107 }
const item108 = { Name: "Drakescale Helm", Cost: 50, Quantity: 1, Description: "Whenever you gain Muddle, gain Strengthen instead.", Type: "Headgear", src: "drakescale-helm.png", indexNumber: 108 }
const item109 = { Name: "Thief's Hood", Cost: 20, Quantity: 1, Description: "During your 'Loot 1' ability, perform a 'Loot 2' ability instead.", Type: "Headgear", src: "thiefs-hood.png", indexNumber: 109 }
const item110 = { Name: "Helm of the Mountain", Cost: 50, Quantity: 1, Description: "When attacked, if Earth is Strong, Immobilize the attacker.", Type: "Headgear", src: "helm-of-the-mountain.png", indexNumber: 110 }
const item111 = { Name: "Wave Crest", Cost: 50, Quantity: 1, Description: "When attacked, if Ice is Strong, perform a 'Push 2' action targeting the attacker.", Type: "Headgear", src: "wave-crest.png", indexNumber: 111 }
const item112 = { Name: "Ancient Drill", Cost: 30, Quantity: 2, Description: "During your melee attack, add +2 Attack and Pierce 2 to the entire Attack action", Type: "Two-Hand", src: "ancient-drill.png", indexNumber: 112 }
const item113 = { Name: "Skullbane Axe", Cost: 50, Quantity: 1, Description: "During your melee attack targeting a Living Corpse, Living Spirit, or Living Bones, add +5 Attack to a single attack.", Type: "Two-Hand", src: "skullbane-axe.png", indexNumber: 113 }
const item114 = { Name: "Staff of Xorn", Cost: 50, Quantity: 1, Description: "During your ranged attack, add Poison and Muddle to the entire Attack action", Type: "Two-Hand", src: "staff-of-xorn.png", indexNumber: 114 }
const item115 = { Name: "Mountain Hammer", Cost: 50, Quantity: 1, Description: "Summon Warrior Spirit", Type: "Two-Hand", src: "mountain-hammer.png", indexNumber: 115 }
const item116 = { Name: "Fueled Falchion", Cost: 20, Quantity: 2, Description: "During your single-target melee attack, the target and all enemies adjacent to the target suffer 1 damage", Type: "One-Hand", src: "fueled-falchion.png", indexNumber: 116 }
const item117 = { Name: "Bloody Axe", Cost: 40, Quantity: 2, Description: "During your melee attack, suffer 2 damage to add +1 Attack to the entire Attack action.", Type: "One-Hand", src: "bloody-axe.png", indexNumber: 117 }
const item118 = { Name: "Staff of Elements", Cost: 50, Quantity: 2, Description: "During your turn, create any element.", Type: "Two-Hand", src: "staff-of-elements.png", indexNumber: 118 }
const item119 = { Name: "Skull of Hatred", Cost: 50, Quantity: 1, Description: "During your turn, Curse all adjacent enemies.", Type: "One-Hand", src: "skull-of-hatred.png", indexNumber: 119 }
const item120 = { Name: "Staff of Summoning", Cost: 60, Quantity: 1, Description: "During your turn, a summoned ally within Range 3 performs a 'Move 3' action with you controlling the action.", Type: "Two-Hand", src: "staff-of-summoning.png", indexNumber: 120 }
const item121 = { Name: "Orb of Dawn", Cost: 50, Quantity: 1, Description: "During your turn, use Dark to create Light.", Type: "One-Hand", src: "orb-of-dawn.png", indexNumber: 121 }
const item122 = { Name: "Orb of Twilight", Cost: 50, Quantity: 1, Description: "During your turn, use Light to create Dark.", Type: "One-Hand", src: "orb-of-twilight.png", indexNumber: 122 }
const item123 = { Name: "Ring of Skulls", Cost: 50, Quantity: 2, Description: "Summon Skeleton", Type: "Purse", src: "ring-of-skulls.png", indexNumber: 123 }
const item124 = { Name: "Doomed Compass", Cost: 50, Quantity: 1, Description: "During your turn, force an enemy within Range 5 to perform a 'Move 2' action with you controlling the action.", Type: "Purse", src: "doomed-compass.png", indexNumber: 124 }
const item125 = { Name: "Curious Gear", Cost: 50, Quantity: 1, Description: "During your turn, disarm all traps within Range 2.", Type: "Purse", src: "curious-gear.png", indexNumber: 125 }
const item126 = { Name: "Remote Spider", Cost: 40, Quantity: 1, Description: "During your turn, Poison all adjacent enemies.", Type: "Purse", src: "remote-spider.png", indexNumber: 126 }
const item127 = { Name: "Giant Remote Spider", Cost: 60, Quantity: 1, Description: "During your turn, perform a 'Loot 1' action.", Type: "Purse", src: "giant-remote-spider.png", indexNumber: 127 }
const item128 = { Name: "Black Censer", Cost: 50, Quantity: 1, Description: "During your turn, Muddle all enemies with Range 2.", Type: "Purse", src: "black-censer.png", indexNumber: 128 }
const item129 = { Name: "Black Card", Cost: 75, Quantity: 1, Description: "During your turn, place a character token on an adjacent normal or elite enemy. You add +1 Attack to all your attacks targeting this enemy.", Type: "Purse", src: "black-card.png", indexNumber: 129 }
const item130 = { Name: "Helix Ring", Cost: 50, Quantity: 1, Description: "During your turn, use light and dark to perform a 'Heal 25, Self' action", Type: "Purse", src: "helix-ring.png", indexNumber: 130 }
const item131 = { Name: "Heart of the Betrayer", Cost: 60, Quantity: 1, Description: "When attacked by an adjacent normal enemy, force the enemy to attack one of its allies within its range instead", Type: "Purse", src: "heart-of-the-betrayer.png", indexNumber: 131 }
const item132 = { Name: "Power Core", Cost: 75, Quantity: 1, Description: "Summon Steel construct", Type: "Purse", src: "power-core.png", indexNumber: 132 }
const item133 = { Name: "Resonant Crystal", Cost: 20, Quantity: 1, Description: "During your turn, destroy an adjacent obstacle.", Type: "Purse", src: "resonant-crystal.png", indexNumber: 133 }
const item134 = { Name: "Imposing Blade", Cost: 50, Quantity: 1, Description: "Any time you kill an enemy during your turn, gain Shield 1 for the rest of the round.", Type: "One-Hand", src: "imposing-blade.png", indexNumber: 134 }
const item135 = { Name: "Focusing Ray", Cost: 50, Quantity: 1, Description: "During your Heal action, double the value of the Heal.", Type: "One-Hand", src: "focusing-ray.png", indexNumber: 135 }
const item136 = { Name: "Volatile elixir", Cost: 50, Quantity: 1, Description: "During your ranged attack, add +2 Attack and gain Advantage on the entire Attack action, but suffer 2 damage for each attack made.", Type: "Purse", src: "volatile-elixir.png", indexNumber: 136 }
const item137 = { Name: "Silent Stiletto", Cost: 50, Quantity: 1, Description: "Any time you perform a melee attack, add PIERCE 1 to the Attack.", Type: "One-Hand", src: "silent-stiletto.png", indexNumber: 137 }
const item138 = { Name: "Stone Charm", Cost: 50, Quantity: 1, Description: "During your action where an obstacle is created, create one additional obstacle and apply all effects of the action to it.", Type: "Headgear", src: "stone-charm.png", indexNumber: 138 }
const item139 = { Name: "Psychic Knife", Cost: 50, Quantity: 1, Description: "Any time you perform an Augment action, add +1 Attack to the entire action.", Type: "One-Hand", src: "psychic-knife.png", indexNumber: 139 }
const item140 = { Name: "Sun Shield", Cost: 50, Quantity: 1, Description: "When damaged by an attack, you may consume Light to gain Shield 3 for the attack.", Type: "One-Hand", src: "sun-shield.png", indexNumber: 140 }
const item141 = { Name: "Utility Belt", Cost: 50, Quantity: 1, Description: "During your turn, you or any one ally may Refresh one of your spent or consumed items.", Type: "Purse", src: "utility-belt.png", indexNumber: 141 }
const item142 = { Name: "Phasing Idol", Cost: 50, Quantity: 1, Description: "When a summon you own is damaged by an attack, it suffers no damage instead.", Type: "Purse", src: "phasing-idol.png", indexNumber: 142 }
const item143 = { Name: "Smoke Elixir", Cost: 50, Quantity: 1, Description: "During your turn, gain INVISIBLE and create Dark.", Type: "Purse", src: "smoke-elixir.png", indexNumber: 143 }
const item144 = { Name: "Pendant of the Plague", Cost: 50, Quantity: 1, Description: "During your turn, POISON and CURSE one enemy within Range 3.", Type: "Headgear", src: "pendant-of-the-plague.png", indexNumber: 144 }
const item145 = { Name: "Mask of Death", Cost: 50, Quantity: 1, Description: "Any time you perform a melee attack and you have exactly 1 hit point, add +2 Attack to the Attack.", Type: "Headgear", src: "mask-of-death.png", indexNumber: 145 }
const item146 = { Name: "Master's Lute", Cost: 50, Quantity: 1, Description: "After performing any song action, immediately perform an Attack 2 or Move 2 action.", Type: "Two-Hand", src: "masters-lute.png", indexNumber: 146 }
const item147 = { Name: "Cloak of the Hunter", Cost: 50, Quantity: 1, Description: "Any time you perform a Doom action, MUDDLE the target of the Doom.", Type: "Armor", src: "cloak-of-the-hunter.png", indexNumber: 147 }
const item148 = { Name: "Doctor's Coat", Cost: 50, Quantity: 1, Description: "Any time an ally performs a Medical Pack or Large Medical Pack action, they add +1 Heal to their Heal.", Type: "Armor", src: "doctors-coat.png", indexNumber: 148 }
const item149 = { Name: "Elemental Boots", Cost: 50, Quantity: 1, Description: "If you move 5 or more hexes on your turn, create any element.", Type: "Foot", src: "elemental-boots.png", indexNumber: 149 }
const item150 = { Name: "Staff of Command", Cost: 50, Quantity: 1, Description: "After performing a Command action, play one card from your hand and immediately perform the same side of the card (top or bottom) as the Command action.", Type: "Two-Hand", src: "staff-of-command.png", indexNumber: 150 }

let itemObjects = [item01, item02, item03, item04, item05, item06, item07, item08, item09, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30, item31, item32, item33, item34, item35, item36, item37, item38, item39, item40, item41, item42, item43, item44, item45, item46, item47, item48, item49, item50, item51, item52, item53, item54, item55, item56, item57, item58, item59, item60, item61, item62, item63, item64, item65, item66, item67, item68, item69, item70, item71, item72, item73, item74, item75, item76, item77, item78, item79, item80, item81, item82, item83, item84, item85, item86, item87, item88, item89, item90, item91, item92, item93, item94, item95, item96, item97, item98, item99, item100, item101, item102, item103, item104, item105, item106, item107, item108, item109, item110, item111, item112, item113, item114, item115, item116, item117, item118, item119, item120, item121, item122, item123, item124, item125, item126, item127, item128, item129, item130, item131, item132, item133, item134, item135, item136, item137, item138, item139, item140, item141, item142, item143, item144, item145, item146, item147, item148, item149, item150];
let sortedItemObjects = [];
let itemCardArray = [];

const itemCardTextElementsClassIndexNumberIndex = 2;
const buttonIndexNumberIndex = 1;

const itemsWrapper = document.querySelector(".items-wrapper");
const filterButtons = document.querySelectorAll(".filter-button");
const shownItems = document.querySelector(".shown-items");

function sort() {
   sortedItemObjects = [];

   for (i = 0; i <= 80; i += 5) {
      itemObjects.forEach(itemObject => {
         if (itemObject.Cost == i) {
            sortedItemObjects.push(itemObject);
         }
      });
   }

   itemObjects = sortedItemObjects;
}

function generateItems() {
   if (itemCardArray !== []) {
      itemCardArray.forEach(itemCard => {
         itemCard.remove();
      });

      itemCardArray = [];
   }

   itemObjects.forEach(itemObject => {
      let savedQuantity = localStorage.getItem(`savedQuantity${itemObject.indexNumber}`, itemObject.Quantity);

      if (savedQuantity == null) {
         localStorage.setItem(`savedQuantity${itemObject.indexNumber}`, itemObject.Quantity);
      }

      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");
      itemCard.id = itemObject.Name;
      itemCard.classList.add(itemObject.Type);
      itemCard.classList.add(itemObject.indexNumber);

      const itemImage = document.createElement("img");
      itemImage.classList.add("item-image");
      itemImage.src = `card-images/${itemObject.Type}/${itemObject.src}`;
      itemImage.classList.add(itemObject.indexNumber);

      const itemInfoSection = document.createElement("div");
      itemInfoSection.classList.add("item-info-section");
      itemCard.classList.add(itemObject.indexNumber);

      const itemCost = document.createElement("h2");
      itemCost.textContent = `Cost: ${itemObject.Cost}`;
      itemCost.classList.add("item-text");
      itemCost.classList.add(".item-cost");
      itemCost.classList.add(itemObject.indexNumber);

      const itemName = document.createElement("h2");
      itemName.textContent = `Name: ${itemObject.Name}`;
      itemName.classList.add("item-text");
      itemName.classList.add("item-name");
      itemName.classList.add(itemObject.indexNumber);

      const itemType = document.createElement("h2");
      itemType.textContent = `Type: ${itemObject.Type}`;
      itemType.classList.add("item-text");
      itemType.classList.add("item-type");
      itemType.classList.add(itemObject.indexNumber);

      const itemQuantity = document.createElement("h2");
      itemQuantity.classList.add("item-text");
      itemQuantity.classList.add("quantity-number-text");
      itemQuantity.classList.add(itemObject.indexNumber);

      savedQuantity = localStorage.getItem(`savedQuantity${itemObject.indexNumber}`);

      itemQuantity.textContent = `Quantity: ${savedQuantity}`;

      const itemMaxQuantity = itemObject.Quantity;
      itemQuantity.id = itemMaxQuantity;

      const itemDescription = document.createElement("h2");
      itemDescription.textContent = `Description: ${itemObject.Description} `;
      itemDescription.classList.add("item-text");
      itemDescription.classList.add("item-description");
      itemDescription.classList.add(itemObject.indexNumber);

      const itemButtons = document.createElement("div");
      itemButtons.classList.add("item-buttons");
      itemButtons.classList.add(itemObject.indexNumber);

      const purchaseButton = document.createElement("button");
      purchaseButton.classList.add("purchase-button");
      purchaseButton.textContent = "Purchase";
      purchaseButton.classList.add(itemObject.indexNumber);

      const sellButton = document.createElement("button");
      sellButton.classList.add("sell-button");
      sellButton.textContent = "Sell Item";
      sellButton.classList.add(itemObject.indexNumber);

      if (savedQuantity == 0) {
         purchaseButton.classList.add("not-active");
      }

      else if (savedQuantity == itemObject.Quantity) {
         sellButton.classList.add("not-active");
      }

      else {
         purchaseButton.classList.remove("not-active");
         sellButton.classList.remove("not-active");
      }

      purchaseButton.addEventListener("click", handleItemActionButtons);
      sellButton.addEventListener("click", handleItemActionButtons);

      itemButtons.appendChild(purchaseButton);
      itemButtons.appendChild(sellButton);

      itemInfoSection.appendChild(itemCost);
      itemInfoSection.appendChild(itemName);
      itemInfoSection.appendChild(itemType);
      itemInfoSection.appendChild(itemQuantity);
      itemInfoSection.appendChild(itemDescription);
      itemInfoSection.appendChild(itemButtons);

      itemCard.appendChild(itemImage);
      itemCard.appendChild(itemInfoSection);
      itemsWrapper.appendChild(itemCard);

      itemCardArray.push(itemCard);
   });
}

generateItems();

function checkSearchBar() {
   const searchBarInput = document.querySelector(".search-bar input");
   const filter = searchBarInput.value.toUpperCase();

   for (i = 0; i < itemCardArray.length; i++) {
      itemCardId = itemCardArray[i].id;

      if (itemCardId.toUpperCase().indexOf(filter) > -1) {
         itemCardArray[i].style.display = "flex";
         //! Important: Don't switch to display block. Will ruin item flexbox style
      }

      else {
         itemCardArray[i].style.display = "none";
      }
   }
}

filterButtons.forEach(filterButton => {
   filterButton.addEventListener("click", () => {
      if (filterButton.id == "All") {
         itemCardArray.forEach(itemCard => {
            itemCard.style.display = "flex";
            //! Important: Don't switch to display block. Will ruin item flexbox style
         });
      }

      else {
         itemCardArray.forEach(itemCard => {
            if (itemCard.classList[1] == filterButton.id) {
               itemCard.style.display = "flex";
               //! Important: Don't switch to display block. Will ruin item flexbox style
            }

            else {
               itemCard.style.display = "none";
            }
         });
      }
   });
});

function handleItemActionButtons(e) {
   if (e.target.classList.contains("purchase-button")) {
      itemObjects.forEach(itemObject => {
         let savedQuantity = localStorage.getItem(`savedQuantity${itemObject.indexNumber}`);

         if (itemObject.indexNumber == e.target.classList[buttonIndexNumberIndex]) {
            const quantityTexts = document.querySelectorAll(".quantity-number-text");

            quantityTexts.forEach(quantityText => {
               if (quantityText.classList[itemCardTextElementsClassIndexNumberIndex] == e.target.classList[buttonIndexNumberIndex]) {
                  if (savedQuantity > 0) {
                     savedQuantity -= 1;

                     quantityText.textContent = `Quantity: ${savedQuantity}`;

                     localStorage.setItem(`savedQuantity${itemObject.indexNumber}`, savedQuantity);
                  }
               }
            });
         }
      });
   }

   else if (e.target.classList.contains("sell-button")) {
      itemObjects.forEach(itemObject => {
         let savedQuantity = localStorage.getItem(`savedQuantity${itemObject.indexNumber}`);

         if (itemObject.indexNumber == e.target.classList[buttonIndexNumberIndex]) {
            const quantityTexts = document.querySelectorAll(".quantity-number-text");

            quantityTexts.forEach(quantityText => {
               if (quantityText.classList[itemCardTextElementsClassIndexNumberIndex] == e.target.classList[buttonIndexNumberIndex]) {
                  if (parseInt(savedQuantity) < itemObject.Quantity) {
                     savedQuantity = parseInt(savedQuantity) + 1;

                     quantityText.textContent = `Quantity: ${parseInt(savedQuantity)}`;

                     localStorage.setItem(`savedQuantity${itemObject.indexNumber}`, parseInt(savedQuantity));
                  }
               }
            });
         }
      });
   }

   itemObjects.forEach(itemObject => {
      let savedQuantity = localStorage.getItem(`savedQuantity${itemObject.indexNumber}`);

      if (itemObject.indexNumber == e.target.classList[buttonIndexNumberIndex]) {
         if (savedQuantity == 0) {
            e.target.classList.add("not-active");

            const sellButtons = document.querySelectorAll(".sell-button");

            sellButtons.forEach(sellButton => {
               if (sellButton.classList[buttonIndexNumberIndex] == itemObject.indexNumber) {
                  sellButton.classList.remove("not-active");
               }
            });
         }

         else if (savedQuantity == itemObject.Quantity) {
            e.target.classList.add("not-active");

            const purchaseButtons = document.querySelectorAll(".purchase-button");

            purchaseButtons.forEach(purchaseButton => {
               if (purchaseButton.classList[buttonIndexNumberIndex] == itemObject.indexNumber) {
                  purchaseButton.classList.remove("not-active");
               }
            });
         }

         else {
            const purchaseButtons = document.querySelectorAll(".purchase-button");
            const sellButtons = document.querySelectorAll(".sell-button");

            purchaseButtons.forEach(purchaseButton => {
               if (purchaseButton.classList[buttonIndexNumberIndex] == itemObject.indexNumber) {
                  purchaseButton.classList.remove("not-active");
               }
            });

            sellButtons.forEach(sellButton => {
               if (sellButton.classList[buttonIndexNumberIndex] == itemObject.indexNumber) {
                  sellButton.classList.remove("not-active");
               }
            });
         }
      }
   });
}

//Todo: Make no results found page when no search results are found

//! Important: Never change display: flex to display: none. Will ruin the item-card flexbox style.