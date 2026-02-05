const mongoose = require("mongoose");

// 1. Define the Blueprint (Schema)
const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // URL-friendly name (e.g., "dark-truffle")
  name: { type: String, required: true },
  price: { type: String, required: true }, // We keep it as String for "$25.00" formatting
  tagline: { type: String },
  image: { type: String, required: true }, // URL of the image
  description: { type: String },
  features: [{ type: String }], // An array of strings
  ingredients: { type: String }
});

// 2. Export the Model
// This creates a collection called "products" in your database automatically
const Product = mongoose.model("Product", productSchema);

module.exports = Product;