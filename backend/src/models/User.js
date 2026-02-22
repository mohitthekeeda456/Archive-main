const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
  // ADD THIS SECTION 👇
  cart: [
    {
      productId: { type: String }, // We'll store the product ID string
      name: { type: String },
      price: { type: String },
      image: { type: String },
      quantity: { type: Number, default: 1 }
    }
  ]
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;