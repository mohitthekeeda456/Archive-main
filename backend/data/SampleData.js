const sampleProducts = [
  {
    id: "dark-truffle",
    name: "Dark Truffle",
    price: "₹1,200", // Changed from $25.00
    tagline: "Rich and intense 80% cocoa.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience the depth of pure cocoa...",
    features: ["80% Cocoa", "Vegan", "Gluten Free"],
    ingredients: "Cocoa mass, sugar, cocoa butter, vanilla.",
    isFeatured: true
  },
  {
    id: "hazelnut-praline",
    name: "Hazelnut Praline",
    price: "₹1,500", // Changed from $28.00
    tagline: "Crunchy hazelnuts in milk chocolate.",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    description: "A smooth blend of roasted hazelnuts...",
    features: ["Roasted Hazelnuts", "Milk Chocolate"],
    ingredients: "Sugar, hazelnuts, milk powder, cocoa butter.",
    isFeatured: false
  }
  // ... Update any other products you have here
];

module.exports = sampleProducts;