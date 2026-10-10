const products = [
  {
    "id": 1,
    "name": "SG Player Edition English Willow Bat",
    "price": 349.99,
    "category": "Bats",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/bat_english.svg",
    "description": "Handcrafted Grade 1 English Willow cricket bat with premium grain structure and massive sweet spot.",
    "brand": "SG",
    "inStock": true,
    "specs": {
      "willowGrade": "Grade 1 English Willow",
      "weight": "1175g (2lb 9.5oz)",
      "grainCount": "9-11 Straight Grains",
      "sweetSpot": "Mid to Low (Suited for Subcontinent Wickets)",
      "edgeThickness": "39mm Thick Edges",
      "spineProfile": "64mm Pronounced Spine",
      "handleType": "Round 12-Piece Cane Handle",
      "bowCurvature": "Subtle Bow for balanced pick-up",
      "playerProfile": "Top-Order Strokemaker / Opener"
    },
    "servicesAvailable": {
      "knocking": true,
      "oiling": true,
      "scuffSheet": true,
      "toeGuard": true
    }
  },
  {
    "id": 2,
    "name": "SS Ton Kashmir Willow Power Bat",
    "price": 69.99,
    "category": "Bats",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/bat_kashmir.svg",
    "description": "Durable Kashmir Willow bat designed for power hitting with heavy tennis and leather balls.",
    "brand": "SS Ton",
    "inStock": true,
    "specs": {
      "willowGrade": "Hand-selected Kashmir Willow",
      "weight": "1220g (2lb 11oz)",
      "grainCount": "5-6 Natural Grains",
      "sweetSpot": "Full Mid Blade Power Profile",
      "edgeThickness": "41mm Monster Edge",
      "spineProfile": "66mm Heavy Spine",
      "handleType": "Semi-Oval Sarawak Cane",
      "bowCurvature": "Aggressive Bow for maximum leverage",
      "playerProfile": "T20 Power Hitter / Finisher"
    },
    "servicesAvailable": {
      "knocking": true,
      "oiling": true,
      "scuffSheet": true,
      "toeGuard": true
    }
  },
  {
    "id": 3,
    "name": "Kookaburra Ghost Pro Training Bat",
    "price": 89.99,
    "category": "Bats",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1531415074868-036b1c5d53ec?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/bat_training.svg",
    "description": "Narrow-bladed precision training bat engineered to improve eye-hand coordination and middle hitting.",
    "brand": "Kookaburra",
    "inStock": true,
    "specs": {
      "willowGrade": "Premium English Willow Offcut",
      "weight": "1120g (2lb 7.5oz)",
      "grainCount": "7-8 Grains",
      "sweetSpot": "Narrow 50mm Precision Sweet Zone",
      "edgeThickness": "30mm Thin Profile",
      "spineProfile": "55mm Flat Spine",
      "handleType": "Oval Multi-piece Cane",
      "bowCurvature": "Standard Academy Curve",
      "playerProfile": "Net Training & Skill Drilling"
    },
    "servicesAvailable": {
      "knocking": false,
      "oiling": true,
      "scuffSheet": true,
      "toeGuard": false
    }
  },
  {
    "id": 4,
    "name": "Kookaburra Turf Red Match Ball",
    "price": 24.99,
    "category": "Balls",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/ball_red.svg",
    "description": "Alum tanned, four-piece hand-stitched leather ball approved for competitive first-class matches.",
    "brand": "Kookaburra",
    "inStock": true,
    "specs": {
      "ballType": "4-Piece Hand Stitched Leather",
      "color": "Traditional Red",
      "weight": "156g (Regulation 5.5oz)",
      "core": "Natural Portuguese Cork Layered with Worsted Yarn",
      "seam": "High Pronounced Seam (85 stitches)",
      "format": "Multi-Day & Test Cricket"
    }
  },
  {
    "id": 5,
    "name": "White League One-Day Leather Ball",
    "price": 26.50,
    "category": "Balls",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1629851608678-745a587ceba2?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/ball_white.svg",
    "description": "High-grade white leather ball with enhanced seam grip for limited-overs white-ball cricket.",
    "brand": "Kookaburra",
    "inStock": true,
    "specs": {
      "ballType": "4-Piece White Leather",
      "color": "Optic White",
      "weight": "156g (Regulation)",
      "core": "Triple Layer Cork Center",
      "seam": "Durable Synthetic Thread Seam",
      "format": "ODI & T20 Tournaments"
    }
  },
  {
    "id": 6,
    "name": "Pink Day-Night Test Match Ball",
    "price": 28.99,
    "category": "Balls",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/ball_pink.svg",
    "description": "Fluorescent pink leather ball designed for high visibility under floodlights.",
    "brand": "Dukes",
    "inStock": true,
    "specs": {
      "ballType": "4-Piece Hand-Finished Leather",
      "color": "Fluorescent Pink",
      "weight": "156g Regulation",
      "core": "Natural Cork and Rubber Blend",
      "seam": "Hand Stitched Prominent Seam",
      "format": "Day-Night Tests under Lights"
    }
  },
  {
    "id": 7,
    "name": "Heavy Tournament Tennis Balls (Pack of 6)",
    "price": 14.99,
    "category": "Balls",
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/ball_tennis.svg",
    "description": "Extra heavy felt-covered rubber tennis balls for fast-paced street and gully cricket.",
    "brand": "Nivia",
    "inStock": true,
    "specs": {
      "ballType": "Heavy Weight Rubber Core",
      "color": "High-Vis Neon Yellow",
      "weight": "125g Heavy Tennis Grade",
      "core": "Pressurized Vulcanized Rubber",
      "seam": "Seamless Outer Shell",
      "format": "Tape-Ball & Gully Cricket"
    }
  },
  {
    "id": 8,
    "name": "Puma Pro Batting Gloves",
    "price": 49.99,
    "category": "Protective Gear",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/gloves.svg",
    "description": "Multi-flex split finger design with high-density foam and sheepskin leather palm.",
    "brand": "Puma",
    "inStock": true,
    "specs": {
      "protectionLevel": "Test / Professional Level",
      "fingerCut": "Multi-Flex Split Finger with Fibre Shield Inserts",
      "palmMaterial": "Ultra-Soft Pittards Sheepskin Leather",
      "thumbDesign": "Two-Piece Curved Thumb Guard",
      "wristBand": "50mm Elasticated Towel Wristband with Hook & Loop"
    }
  },
  {
    "id": 9,
    "name": "GM Diamond Batting Leg Guards",
    "price": 94.99,
    "category": "Protective Gear",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/pads.svg",
    "description": "Ultra-lightweight cane and foam construction for maximum mobility and impact protection.",
    "brand": "Gunn & Moore",
    "inStock": true,
    "specs": {
      "protectionLevel": "County & First-Class Standard",
      "construction": "Traditional Cane Vertical Ribs + High-Density Foam",
      "kneeRoll": "Ergonomic 3D Contour Gel Knee Locator",
      "weight": "840g Per Pad (Ultra-Lightweight)",
      "straps": "Triple Padded Comfort Straps (Calf, Ankle, Knee)"
    }
  },
  {
    "id": 10,
    "name": "Masuri Vision Titanium Helmet",
    "price": 139.99,
    "category": "Protective Gear",
    "rating": 4.9,
    "image": "https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/helmet.svg",
    "description": "Industry-leading safety helmet with titanium grille and advanced air-flow ventilation.",
    "brand": "Masuri",
    "inStock": true,
    "specs": {
      "safetyCertification": "BS 7928:2013 (Highest ICC Benchmark)",
      "grille": "Grade 5 Lightweight Titanium Eye-Line Grille",
      "shell": "High-Impact Resistant Thermo-Resin",
      "ventilation": "Airflow Multi-Channel Air Intakes",
      "neckProtection": "Compatible with StemGuard Clip-on"
    }
  },
  {
    "id": 11,
    "name": "Aero Combo Thigh Guard Set",
    "price": 39.99,
    "category": "Protective Gear",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/pads.svg",
    "description": "Integrated dual inner and outer thigh protection with dual-strap ergonomic fit.",
    "brand": "Aero",
    "inStock": true,
    "specs": {
      "protectionLevel": "Club to State Standard",
      "construction": "Dual-Shell Anatomical 3D Moulded Polyethylene",
      "fit": "Integrated Outer & Inner Hip/Thigh Guard",
      "straps": "Double Elastic Waist & Thigh Webbing",
      "washable": "Removable Poly Liner for Machine Washing"
    }
  },
  {
    "id": 12,
    "name": "SG Club Wicket Keeping Gloves",
    "price": 59.99,
    "category": "Protective Gear",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/gloves.svg",
    "description": "Full leather catching glove with octopus rubber suction grip and reinforced finger caps.",
    "brand": "SG",
    "inStock": true,
    "specs": {
      "protectionLevel": "Wicket Keeper Professional Standard",
      "palmMaterial": "Octopus Suction High-Grip Rubber",
      "cuff": "Short Ergonomic Webbed Cuffs with Padded Back",
      "lining": "Breathable Chamois Leather Lining",
      "fingerProtection": "Polymer Finger End Caps"
    }
  },
  {
    "id": 13,
    "name": "Asics Gel-Peake Cricket Spikes Shoes",
    "price": 109.99,
    "category": "Apparel & Footwear",
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/shoes.svg",
    "description": "High-grip rubber and metal studded turf spikes with gel cushioning for fast bowling and running.",
    "brand": "Asics",
    "inStock": true,
    "specs": {
      "soleType": "All-Turf Hybrid (Metal Spike + Rubber Dimple Compatible)",
      "cushioning": "Rearfoot GEL Technology & FlyteFoam Midsole",
      "upper": "Synthetic Leather with Reinforced Toe Bumper",
      "weight": "420g",
      "idealFor": "Pace Bowlers & Aggressive Batsmen"
    }
  },
  {
    "id": 14,
    "name": "Pro-Fit Cricket Match Whites Jersey",
    "price": 29.99,
    "category": "Apparel & Footwear",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/jersey.svg",
    "description": "Breathable, moisture-wicking dry-fit white cricket jersey tailored for all-day play.",
    "brand": "Gray-Nicolls",
    "inStock": true,
    "specs": {
      "material": "100% Micro-Poly Dri-Fit Fabric",
      "collar": "Ribbed Polo Style with Contrast Trim",
      "ventilation": "Mesh Underarm Panels for Rapid Cooling",
      "fit": "Athletic Regular Fit",
      "uvProtection": "UPF 40+ Sun Protection"
    }
  },
  {
    "id": 15,
    "name": "Dynamic Athletic Cricket Trousers",
    "price": 34.99,
    "category": "Apparel & Footwear",
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/jersey.svg",
    "description": "Four-way stretch white cricket athletic pants with reinforced knee panels for sliding.",
    "brand": "Gray-Nicolls",
    "inStock": true,
    "specs": {
      "material": "92% Poly, 8% Elastane 4-Way Stretch",
      "pockets": "Dual Deep Slash Pockets for Ball/Coin",
      "reinforcement": "Double-Stitched Sliding Knee Patches",
      "waist": "Elastic Waistband with Drawstring",
      "color": "Classic Cricket Cream-White"
    }
  },
  {
    "id": 16,
    "name": "SS Wheelie Pro Cricket Kit Bag",
    "price": 89.99,
    "category": "Accessories & Bags",
    "rating": 4.7,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/kitbag.svg",
    "description": "Heavy-duty travel kit bag with tractor wheels, external bat pockets, and helmet vault.",
    "brand": "SS Ton",
    "inStock": true,
    "specs": {
      "capacity": "120 Liters (Full Senior Kit Capacity)",
      "dimensions": "98cm x 38cm x 38cm",
      "wheels": "Heavy-Duty Heavy-Tread Tractor Wheel Base",
      "compartments": "3 External Bat Sleeves, Separate Shoe Vault, Top Helmet Pocket",
      "material": "1680D Cordura Waterproof Fabric"
    }
  },
  {
    "id": 17,
    "name": "Wooden Spring Return Cricket Stumps",
    "price": 44.99,
    "category": "Accessories & Bags",
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/stumps.svg",
    "description": "Solid hardwood wickets mounted on a heavy cast-iron spring return base.",
    "brand": "SG",
    "inStock": true,
    "specs": {
      "wood": "Seasoned Ash Hardwood",
      "base": "Heavy-Duty Cast Iron Auto-Spring Base",
      "height": "Regulation 28 inches",
      "bails": "Includes 2 Solid Wood Match Bails",
      "idealFor": "Turf, Astroturf, & Concrete Pitch Net Sessions"
    }
  },
  {
    "id": 18,
    "name": "Bat Care Kit: Mallet, Oil & Gripper Cone",
    "price": 19.99,
    "category": "Accessories & Bags",
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/bat_english.svg",
    "description": "Complete willow preparation kit including linseed bat oil, knocking-in wooden mallet, and grip applicator.",
    "brand": "Kookaburra",
    "inStock": true,
    "specs": {
      "contents": "1x Round Head Hardwood Mallet, 100ml Raw Linseed Oil, 1x Wooden Grip Cone",
      "usage": "Bat Knocking-In & Season Care",
      "benefits": "Increases Blade Longevity & Prevents Edge Cracking"
    }
  },
  {
    "id": 19,
    "name": "Non-Slip Matrix Bat Grips (Pack of 3)",
    "price": 12.99,
    "category": "Accessories & Bags",
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/bat_kashmir.svg",
    "description": "Cushioned chevron texture rubber replacement grips for maximum control and shock absorption.",
    "brand": "SG",
    "inStock": true,
    "specs": {
      "pack": "3 Grips (White, Black, Neon Green)",
      "texture": "Chevron & Diamond Dual-Grip Matrix",
      "feel": "Extra Cushioning & Shock Dampening",
      "thickness": "1.8mm Premium Rubber"
    }
  },
  {
    "id": 20,
    "name": "Padded Bat Protection Cover Case",
    "price": 15.99,
    "category": "Accessories & Bags",
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
    "backupImage": "/products/kitbag.svg",
    "description": "Water-resistant thermo-insulated full-length bat carrying case with adjustable shoulder strap.",
    "brand": "Gray-Nicolls",
    "inStock": true,
    "specs": {
      "protection": "8mm High-Density Foam Padding",
      "lining": "Thermal Foil Interior to Regulate Moisture",
      "closure": "Heavy Duty Full-Length Zipper",
      "carrying": "Padded Adjustable Shoulder Sling"
    }
  }
];

export default products;
