const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", // Links this order to a specific User
    required: true 
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true }, // Keeping as string "$25.00" to match your data
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product", // Links to the specific Product
        required: true 
      }
    }
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentMethod: { type: String, required: true, default: "Credit Card" },
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, required: true, default: false },
  isDelivered: { type: Boolean, required: true, default: false },
}, {
  timestamps: true // Saves "Created at" time automatically
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;