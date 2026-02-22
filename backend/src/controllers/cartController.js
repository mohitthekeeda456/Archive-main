const User = require("../models/User");

// @desc    Get user's cart
// @route   GET /api/cart/:userId
const getCart = async (req, res) => {
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
};

// @desc    Update user's cart
// @route   PUT /api/cart/:userId
const updateCart = async (req, res) => {
  try {
    const { cart } = req.body;
    const user = await User.findById(req.params.userId);

    if (user) {
      user.cart = cart;
      await user.save();
      res.json(user.cart);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCart, updateCart };