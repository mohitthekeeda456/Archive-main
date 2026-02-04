// src/data/products.js

// This looks EXACTLY like a MongoDB response
export const products = [
  {
    id: "artisan-truffle", // This will be the URL: /product/artisan-truffle
    name: "Artisan Truffle Collection",
    price: "$45.00",
    tagline: "Handcrafted truffles with exotic flavors and gold accents",
    
    // Images (We can add more later)
    image: "https://i.pinimg.com/736x/85/79/3a/85793a29021c29fee5af6af324b3ac38.jpg",
    
    // The "Copied Data" from the old site goes here
    description: "Experience the epitome of luxury with our Artisan Truffle Collection. Each piece is a masterpiece, hand-painted and infused with rare ingredients sourced from around the globe.",
    
    features: [
      "24-karat edible gold leaf",
      "Single-origin Venezuelan cacao",
      "Fillings: Champagne, Sea Salt Caramel, Hazelnut Praline"
    ],
    
    ingredients: "Cocoa mass, sugar, cocoa butter, heavy cream, gold leaf, natural vanilla flavor."
  },
  
  // You will add the second chocolate here...
  {
    id: "dark-sea-salt",
    name: "Dark Sea Salt Chocolate",
    price: "$29.00",
    tagline: "70% cacao with Himalayan pink salt crystals",
    image: "https://i.pinimg.com/736x/23/ea/8d/23ea8d170cdaf36ec62657dcd1bbb478.jpg",
    description: "A bold and savory experience. Our 70% dark chocolate is perfectly balanced with the crunch of mineral-rich Himalayan pink salt.",
    features: [
      "70% Dark Chocolate",
      "Mineral-rich Himalayan Salt",
      "Vegan Friendly"
    ],
    ingredients: "Cocoa mass, sugar, Himalayan pink salt, soy lecithin."
  },{
    id: "dark-sea-salt1",
    name: "Dark Sea Salt Chocolate",
    price: "$29.00",
    tagline: "70% cacao with Himalayan pink salt crystals",
    image: "https://i.pinimg.com/736x/23/ea/8d/23ea8d170cdaf36ec62657dcd1bbb478.jpg",
    description: "A bold and savory experience. Our 70% dark chocolate is perfectly balanced with the crunch of mineral-rich Himalayan pink salt.",
    features: [
      "70% Dark Chocolate",
      "Mineral-rich Himalayan Salt",
      "Vegan Friendly"
    ],
    ingredients: "Cocoa mass, sugar, Himalayan pink salt, soy lecithin."
  }
];