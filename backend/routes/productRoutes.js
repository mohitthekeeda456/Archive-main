const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Note the ".." to go up one folder
const sampleProducts = require("../data/sampleData"); // Import your data

// 1. Seed Data
router.get("/seed", async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    res.send("✅ Success! Database populated.");
  } catch (error) {
    res.status(500).send("❌ Error seeding: " + error.message);
  }
});

// ... imports ...

// 4. ADD NEW PRODUCT (Host Page)
router.post("/", async (req, res) => {
  try {
    const { id, name, price, tagline, image, description, features, ingredients, isFeatured } = req.body;

    // Validation: Check if product with this ID already exists (e.g., "dark-truffle")
    const productExists = await Product.findOne({ id });
    if (productExists) {
      return res.status(400).json({ message: "Product ID already exists. Try a different one." });
    }

    const product = new Product({
      id,
      name,
      price,
      tagline,
      image,
      description,
      features, // Make sure Frontend sends this as an Array!
      ingredients,
      isFeatured
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
});

// ... existing GET routes ...

// 2. Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// 3. Get Single Product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product) res.json(product);
    else res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

module.exports = router;