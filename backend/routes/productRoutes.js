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

// ... existing routes ...

// 5. UPDATE PRODUCT (Toggle Featured or Edit Details)
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { id: req.params.id }, // Find by our custom "id" (e.g., "dark-truffle")
      req.body,              // Update with whatever data we sent
      { new: true }          // Return the *new* version, not the old one
    );
    if (updatedProduct) res.json(updatedProduct);
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

// 6. DELETE PRODUCT
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ id: req.params.id });
    if (deletedProduct) res.json({ message: "Product deleted" });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;




module.exports = router;