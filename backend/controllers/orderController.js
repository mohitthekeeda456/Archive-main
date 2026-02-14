const Order = require("../models/Order");

const addOrderItems = async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalPrice, user } = req.body;
    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }
    const order = new Order({ user, orderItems, shippingAddress, totalPrice });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed" });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

module.exports = { addOrderItems, getMyOrders };