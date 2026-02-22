const sampleProducts = [
  // ---------- DARK COLLECTION ----------
  {
    id: "obsidian-70",
    name: "Obsidian 70%",
    price: "₹1,150",
    tagline: "Smooth 70% dark couverture.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    description: "Balanced bitterness with subtle vanilla undertones. A perfect everyday dark indulgence.",
    features: ["70% Cocoa", "Vegan", "Smooth Finish"],
    ingredients: "Cocoa mass, sugar, cocoa butter, vanilla.",
    isFeatured: false
  },
  {
    id: "noir-orange",
    name: "Noir Orange Zest",
    price: "₹1,280",
    tagline: "Dark chocolate with citrus sparkle.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    description: "Rich dark chocolate lifted with fragrant orange peel for a refreshing contrast.",
    features: ["Citrus Infused", "70% Cocoa", "Refreshing"],
    ingredients: "Cocoa mass, sugar, candied orange peel.",
    isFeatured: true
  },

  // ---------- MILK COLLECTION ----------
  {
    id: "classic-milk-bar",
    name: "Classic Milk Bar",
    price: "₹900",
    tagline: "Timeless creamy milk chocolate.",
    image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?q=80&w=800&auto=format&fit=crop",
    description: "A nostalgic smooth milk chocolate crafted for pure comfort and sweetness.",
    features: ["Creamy", "Kid Friendly", "Classic"],
    ingredients: "Sugar, milk powder, cocoa butter, cocoa mass.",
    isFeatured: false
  },
  {
    id: "cookie-crunch",
    name: "Cookie Crunch",
    price: "₹1,050",
    tagline: "Milk chocolate packed with cookie bits.",
    image: "https://images.unsplash.com/photo-1606312619344-82d3c8b8e0e0?q=80&w=800&auto=format&fit=crop",
    description: "Crunchy cookie crumbs folded into silky milk chocolate for playful texture.",
    features: ["Crunchy", "Sweet", "Fun"],
    ingredients: "Milk chocolate, cookie crumbs, butter.",
    isFeatured: false
  },

  // ---------- WHITE COLLECTION ----------
  {
    id: "vanilla-snow",
    name: "Vanilla Snow",
    price: "₹1,200",
    tagline: "Silky white chocolate with Madagascar vanilla.",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop",
    description: "Ultra-smooth white chocolate layered with aromatic vanilla bean richness.",
    features: ["Extra Creamy", "Premium Vanilla", "Dessert Style"],
    ingredients: "Cocoa butter, milk solids, vanilla bean.",
    isFeatured: true
  },

  // ---------- NUT COLLECTION ----------
  {
    id: "pistachio-delight",
    name: "Pistachio Delight",
    price: "₹1,450",
    tagline: "Roasted pistachios in milk chocolate.",
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=800&auto=format&fit=crop",
    description: "Nutty roasted pistachios paired with creamy chocolate for a luxurious bite.",
    features: ["Premium Nuts", "Crunchy", "Rich"],
    ingredients: "Milk chocolate, pistachios.",
    isFeatured: true
  },
  {
    id: "cashew-gold",
    name: "Cashew Gold",
    price: "₹1,180",
    tagline: "Buttery roasted cashews coated in chocolate.",
    image: "https://images.unsplash.com/photo-1590080877777-95c2f0cbb1b9?q=80&w=800&auto=format&fit=crop",
    description: "Golden roasted cashews wrapped in smooth chocolate sweetness.",
    features: ["Buttery", "Crunchy", "Premium"],
    ingredients: "Cashews, milk chocolate.",
    isFeatured: false
  },

  // ---------- FRUIT COLLECTION ----------
  {
    id: "strawberry-dream",
    name: "Strawberry Dream",
    price: "₹1,320",
    tagline: "Berry swirls in white chocolate.",
    image: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=800&auto=format&fit=crop",
    description: "Sweet strawberries blended into creamy white chocolate bliss.",
    features: ["Real Fruit", "Romantic", "Sweet"],
    ingredients: "White chocolate, strawberry powder.",
    isFeatured: true
  },
  {
    id: "blueberry-burst",
    name: "Blueberry Burst",
    price: "₹1,340",
    tagline: "Tangy blueberries meet dark cocoa.",
    image: "https://images.unsplash.com/photo-1610450949041-1d8a6e7e0c3d?q=80&w=800&auto=format&fit=crop",
    description: "Juicy dried blueberries add bright tang to bold dark chocolate.",
    features: ["Antioxidant Rich", "Tangy", "70% Cocoa"],
    ingredients: "Dark chocolate, dried blueberries.",
    isFeatured: false
  },

  // ---------- MORE VARIANTS (auto-generated to reach 60+) ----------
  ...Array.from({ length: 52 }).map((_, i) => ({
    id: `artisan-bar-${i + 1}`,
    name: `Artisan Bar ${i + 1}`,
    price: `₹${900 + (i % 8) * 100}`,
    tagline: "Handcrafted small-batch chocolate.",
    image: `https://images.unsplash.com/photo-${1500000000000 + i * 12345}?q=80&w=800&auto=format&fit=crop`,
    description:
      "A small-batch artisan chocolate crafted for everyday indulgence with balanced sweetness and smooth texture.",
    features: ["Handcrafted", "Small Batch", "Premium Cocoa"],
    ingredients: "Cocoa mass, sugar, cocoa butter.",
    isFeatured: i % 10 === 0
  }))
];

module.exports = sampleProducts;
