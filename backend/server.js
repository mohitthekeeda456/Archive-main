const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // <--- 1. Import Mongoose
const Product = require("./models/Product");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB
// We use the variable from your .env file
mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));
  app.get("/api/seed", async (req, res) => {
  try {
    // A. The Data we want to upload (Your fake data)
    const sampleProducts = [
      {
        id: "dark-truffle",
        name: "Dark Truffle",
        price: "$25.00",
        tagline: "Rich and intense 80% cocoa.",
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Experience the depth of pure cocoa...",
        features: ["80% Cocoa", "Vegan", "Gluten Free"],
        ingredients: "Cocoa mass, sugar, cocoa butter, vanilla."
      },
      {
        id: "hazelnut-praline",
        name: "Hazelnut Praline",
        price: "$28.00",
        tagline: "Crunchy hazelnuts in milk chocolate.",
        image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        description: "A smooth blend of roasted hazelnuts...",
        features: ["Roasted Hazelnuts", "Milk Chocolate"],
        ingredients: "Sugar, hazelnuts, milk powder, cocoa butter."
      }
      // You can add more from your frontend data/products.js file here if you want!
    ];

    // B. Clear old data (Optional: prevents duplicates)
    await Product.deleteMany({});

    // C. Insert new data
    await Product.insertMany(sampleProducts);

    res.send("✅ Success! Database populated with chocolates.");
  } catch (error) {
    res.status(500).send("❌ Error seeding database: " + error.message);
  }
});
app.get("/", (req, res) => {
  res.send("🚀 Server is running and DB is connected!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});