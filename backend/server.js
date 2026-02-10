const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const blogRoutes = require("./routes/blogRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Route Middleware
// This tells the server: "If a URL starts with /api/products, go look at the productRoutes file."
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes); // Note: I changed this slightly to be cleaner
app.use("/api/orders", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/blogs", blogRoutes);
// Base Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and DB is connected!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});