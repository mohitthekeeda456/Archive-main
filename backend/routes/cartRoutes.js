const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 1. GET User's Cart
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user) {
      res.json(user.cart);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 2. UPDATE User's Cart (We replace the whole old cart with the new one)
router.put("/:userId", async (req, res) => {
  try {
    const { cart } = req.body; // Frontend sends the whole new cart array
    const user = await User.findById(req.params.userId);

    if (user) {
      user.cart = cart; // Update the cart
      await user.save(); // Save to DB
      res.json(user.cart);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;