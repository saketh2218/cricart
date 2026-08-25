const products = [
  {
    id: 1,
    name: "Premium English Willow Bat",
    price: 299.99,
    category: "Bats",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1593766788306-2856109669de?q=80&w=600&auto=format&fit=crop",
    description: "Grade A English Willow cricket bat with excellent ping and thick edges."
  },
  {
    id: 2,
    name: "Kashmir Willow Practice Bat",
    price: 49.99,
    category: "Bats",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1531415080290-bc98513989f4?q=80&w=600&auto=format&fit=crop",
    description: "Durable Kashmir Willow bat designed for hard tennis and soft leather practice."
  },
  {
    id: 3,
    name: "Pro Training Cricket Bat",
    price: 79.99,
    category: "Bats",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1593766788306-2856109669de?q=80&w=600&auto=format&fit=crop",
    description: "Narrow-bladed training bat designed to improve sweet spot coordination."
  },
  {
    id: 4,
    name: "Leather Match Ball (Red)",
    price: 19.99,
    category: "Balls",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    description: "Alum tanned, four-piece hand-stitched leather ball designed for test matches."
  },
  {
    id: 5,
    name: "White League Leather Ball",
    price: 22.50,
    category: "Balls",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    description: "Premium white leather ball designed for limited overs match play."
  },
  {
    id: 6,
    name: "Pink Day-Night Test Ball",
    price: 25.99,
    category: "Balls",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    description: "High-visibility pink leather ball for day-night long-format cricket."
  },
  {
    id: 7,
    name: "Heavy Tennis Ball (6 Pack)",
    price: 12.00,
    category: "Balls",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    description: "Heavyweight under-hair tennis balls designed for recreational street cricket."
  },
  {
    id: 8,
    name: "Pro Batting Gloves",
    price: 45.00,
    category: "Protective Gear",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=600&auto=format&fit=crop",
    description: "High-density foam protection with sheepskin leather palms for superior grip."
  },
  {
    id: 9,
    name: "Elite Batting Pads",
    price: 89.99,
    category: "Protective Gear",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop",
    description: "Ultra-lightweight leg guards with maximum shock absorption wrap."
  },
  {
    id: 10,
    name: "Titanium Cricket Helmet",
    price: 119.99,
    category: "Protective Gear",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop",
    description: "Advanced composite shell with a titanium grille for maximum facial safety."
  },
  {
    id: 11,
    name: "Dual Thigh Guard Set",
    price: 34.99,
    category: "Protective Gear",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop",
    description: "Inner and outer thigh protection with customized ergonomic straps."
  },
  {
    id: 12,
    name: "Professional Spikes Shoes",
    price: 95.00,
    category: "Apparel & Footwear",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=600&auto=format&fit=crop",
    description: "Metal spike athletic shoes designed for running on turf pitches."
  },
  {
    id: 13,
    name: "Rubber Stud Turf Shoes",
    price: 69.99,
    category: "Apparel & Footwear",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=600&auto=format&fit=crop",
    description: "Durable rubber stud sole perfect for synthetic hard courts and dry turf."
  },
  {
    id: 14,
    name: "White Cricket Trousers",
    price: 29.99,
    category: "Apparel & Footwear",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop",
    description: "Comfortable, stretchable white match pants with sweat-wicking fabric."
  },
  {
    id: 15,
    name: "Weld Wicket-Keeper Gloves",
    price: 55.00,
    category: "Protective Gear",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=600&auto=format&fit=crop",
    description: "Padded keeper gloves with rubber pimples for supreme catching friction."
  },
  {
    id: 16,
    name: "Wheelie Kit Bag (100L)",
    price: 79.99,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?q=80&w=600&auto=format&fit=crop",
    description: "Large-capacity duffle kit bag featuring heavy-duty tractor wheels."
  },
  {
    id: 17,
    name: "Premium Bat Grip Set (x3)",
    price: 9.99,
    category: "Accessories",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1593766788306-2856109669de?q=80&w=600&auto=format&fit=crop",
    description: "Soft, shock-absorbing rubber grips featuring classic chevron style."
  },
  {
    id: 18,
    name: "Double-Ended Wooden Mallet",
    price: 14.99,
    category: "Accessories",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1593766788306-2856109669de?q=80&w=600&auto=format&fit=crop",
    description: "Hardwood mallet designed for knocking-in and hardening new cricket bats."
  },
  {
    id: 19,
    name: "Raw Linseed Bat Oil (100ml)",
    price: 7.99,
    category: "Accessories",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1593766788306-2856109669de?q=80&w=600&auto=format&fit=crop",
    description: "100% natural raw linseed oil to maintain willow moisture levels."
  },
  {
    id: 20,
    name: "Umpire Counter & Clicker",
    price: 5.50,
    category: "Accessories",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1531415080290-bc98513989f4?q=80&w=600&auto=format&fit=crop",
    description: "Pocket-sized tally counter to keep track of balls, overs, and wickets."
  }
];

module.exports = products;