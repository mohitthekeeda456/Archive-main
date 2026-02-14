const Product = require("../models/Product");
const sampleProducts = require("../data/sampleData");

// @desc    Fetch all products
// @route   GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (product) res.json(product);
    else res.status(404).json({ error: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

// @desc    Create a product
// @route   POST /api/products
const createProduct = async (req, res) => {
  try {
    const { id, name, price, tagline, image, description, features, ingredients, isFeatured } = req.body;
    const productExists = await Product.findOne({ id });
    if (productExists) return res.status(400).json({ message: "Product ID already exists." });

    const product = new Product({ id, name, price, tagline, image, description, features, ingredients, isFeatured });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (updatedProduct) res.json(updatedProduct);
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ id: req.params.id });
    if (deletedProduct) res.json({ message: "Product deleted" });
    else res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: "Delete failed" });
  }
};

// @desc    Reset Database
// @route   GET /api/products/seed
const seedProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    res.send("✅ Success! Database populated.");
  } catch (error) {
    res.status(500).send("❌ Error seeding: " + error.message);
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, seedProducts };