const products = [
  {
    "id": 1,
    "name": "SG Player Edition English Willow Bat",
    "price": 349.99,
    "category": "Bats",
    "rating": 4.9,
    "image": "/src/assests/products/bat_english.svg",
    "description": "Handcrafted Grade 1 English Willow cricket bat with premium grain structure and massive sweet spot."
  },
  {
    "id": 2,
    "name": "SS Ton Kashmir Willow Power Bat",
    "price": 69.99,
    "category": "Bats",
    "rating": 4.4,
    "image": "/src/assests/products/bat_kashmir.svg",
    "description": "Durable Kashmir Willow bat designed for power hitting with heavy tennis and leather balls."
  },
  {
    "id": 3,
    "name": "Kookaburra Ghost Pro Training Bat",
    "price": 89.99,
    "category": "Bats",
    "rating": 4.5,
    "image": "/src/assests/products/bat_training.svg",
    "description": "Narrow-bladed precision training bat engineered to improve eye-hand coordination."
  },
  {
    "id": 4,
    "name": "Kookaburra Turf Red Match Ball",
    "price": 24.99,
    "category": "Balls",
    "rating": 4.8,
    "image": "/src/assests/products/ball_red.svg",
    "description": "Alum tanned, four-piece hand-stitched leather ball approved for competitive matches."
  },
  {
    "id": 5,
    "name": "White League One-Day Leather Ball",
    "price": 26.5,
    "category": "Balls",
    "rating": 4.6,
    "image": "/src/assests/products/ball_white.svg",
    "description": "High-grade white leather ball with enhanced seam grip for limited-overs white-ball cricket."
  },
  {
    "id": 6,
    "name": "Pink Day-Night Test Match Ball",
    "price": 28.99,
    "category": "Balls",
    "rating": 4.7,
    "image": "/src/assests/products/ball_pink.svg",
    "description": "Fluorescent pink leather ball designed for high visibility under floodlights."
  },
  {
    "id": 7,
    "name": "Heavy Tournament Tennis Balls (Pack of 6)",
    "price": 14.99,
    "category": "Balls",
    "rating": 4.3,
    "image": "/src/assests/products/ball_tennis.svg",
    "description": "Extra heavy felt-covered rubber tennis balls for fast-paced street and gully cricket."
  },
  {
    "id": 8,
    "name": "Puma Pro Batting Gloves",
    "price": 49.99,
    "category": "Protective Gear",
    "rating": 4.7,
    "image": "/src/assests/products/gloves.svg",
    "description": "Multi-flex split finger design with high-density foam and sheepskin leather palm."
  },
  {
    "id": 9,
    "name": "GM Diamond Batting Leg Guards",
    "price": 94.99,
    "category": "Protective Gear",
    "rating": 4.8,
    "image": "/src/assests/products/pads.svg",
    "description": "Ultra-lightweight cane and foam construction for maximum mobility and impact protection."
  },
  {
    "id": 10,
    "name": "Masuri Vision Titanium Helmet",
    "price": 139.99,
    "category": "Protective Gear",
    "rating": 4.9,
    "image": "/src/assests/products/helmet.svg",
    "description": "Industry-leading safety helmet with titanium grille and advanced air-flow ventilation."
  },
  {
    "id": 11,
    "name": "Aero Combo Thigh Guard Set",
    "price": 39.99,
    "category": "Protective Gear",
    "rating": 4.5,
    "image": "/src/assests/products/pads.svg",
    "description": "Integrated dual inner and outer thigh protection with dual-strap ergonomic fit."
  },
  {
    "id": 12,
    "name": "SG Club Wicket Keeping Gloves",
    "price": 59.99,
    "category": "Protective Gear",
    "rating": 4.6,
    "image": "/src/assests/products/gloves.svg",
    "description": "Full leather catching glove with octopus rubber suction grip and reinforced finger caps."
  },
  {
    "id": 13,
    "name": "Asics Gel-Peake Cricket Spikes Shoes",
    "price": 109.99,
    "category": "Apparel & Footwear",
    "rating": 4.8,
    "image": "/src/assests/products/shoes.svg",
    "description": "High-grip rubber and metal studded turf spikes with gel cushioning for fast bowling and running."
  },
  {
    "id": 14,
    "name": "Pro-Fit Cricket Match Whites Jersey",
    "price": 29.99,
    "category": "Apparel & Footwear",
    "rating": 4.4,
    "image": "/src/assests/products/jersey.svg",
    "description": "Breathable, moisture-wicking dry-fit white cricket jersey tailored for all-day play."
  },
  {
    "id": 15,
    "name": "Dynamic Athletic Cricket Trousers",
    "price": 34.99,
    "category": "Apparel & Footwear",
    "rating": 4.3,
    "image": "/src/assests/products/jersey.svg",
    "description": "Four-way stretch white cricket athletic pants with reinforced knee panels for sliding."
  },
  {
    "id": 16,
    "name": "SS Wheelie Pro Cricket Kit Bag",
    "price": 89.99,
    "category": "Accessories & Bags",
    "rating": 4.7,
    "image": "/src/assests/products/kitbag.svg",
    "description": "Heavy-duty travel kit bag with tractor wheels, external bat pockets, and helmet vault."
  },
  {
    "id": 17,
    "name": "Wooden Spring Return Cricket Stumps",
    "price": 44.99,
    "category": "Accessories & Bags",
    "rating": 4.6,
    "image": "/src/assests/products/stumps.svg",
    "description": "Solid hardwood wickets mounted on a heavy cast-iron spring return base."
  },
  {
    "id": 18,
    "name": "Bat Care Kit: Mallet, Oil & Gripper Cone",
    "price": 19.99,
    "category": "Accessories & Bags",
    "rating": 4.5,
    "image": "/src/assests/products/bat_english.svg",
    "description": "Complete willow preparation kit including linseed bat oil, knocking-in wooden mallet, and grip applicator."
  },
  {
    "id": 19,
    "name": "Non-Slip Matrix Bat Grips (Pack of 3)",
    "price": 12.99,
    "category": "Accessories & Bags",
    "rating": 4.2,
    "image": "/src/assests/products/bat_kashmir.svg",
    "description": "Cushioned chevron texture rubber replacement grips for maximum control and shock absorption."
  },
  {
    "id": 20,
    "name": "Padded Bat Protection Cover Case",
    "price": 15.99,
    "category": "Accessories & Bags",
    "rating": 4.4,
    "image": "/src/assests/products/kitbag.svg",
    "description": "Water-resistant thermo-insulated full-length bat carrying case with adjustable shoulder strap."
  }
];

module.exports = products;
