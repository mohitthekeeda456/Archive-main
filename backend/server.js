const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // <--- 1. Import Mongoose
const Product = require("./models/Product");
const User = require("./models/User");
const Order = require("./models/Order");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB
// We use the variable from your .env file
mongoose
  .connect(process.env.MONGO_URI)
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
        image:
          "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Experience the depth of pure cocoa...",
        features: ["80% Cocoa", "Vegan", "Gluten Free"],
        ingredients: "Cocoa mass, sugar, cocoa butter, vanilla.",
      },
      {
        id: "hazelnut-praline",
        name: "Hazelnut Praline",
        price: "$28.00",
        tagline: "Crunchy hazelnuts in milk chocolate.",
        image:
          "https://images.unsplash.com/photo-1548907040-4baa42d10919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A smooth blend of roasted hazelnuts...",
        features: ["Roasted Hazelnuts", "Milk Chocolate"],
        ingredients: "Sugar, hazelnuts, milk powder, cocoa butter.",
      },
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

app.get("/api/products", async (req, res) => {
  try {
    // A. Ask MongoDB for all documents in the "products" collection
    const allProducts = await Product.find();

    // B. Send them back to the user
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// 4. The "Get Single Product" Route (For the Product Details Page)
app.get("/api/products/:id", async (req, res) => {
  try {
    // Find the one chocolate that matches the ID in the URL
    const singleProduct = await Product.findOne({ id: req.params.id });

    if (singleProduct) {
      res.json(singleProduct);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

// 5. REGISTER ROUTE (Create a new user)
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // A. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // B. Create the user
    // (Note: In a real app, we would encrypt the password here using 'bcrypt')
    const user = await User.create({
      name,
      email,
      password, // Storing as plain text for now (Simplest for learning)
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("❌ Error in Register:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // A. Find the user
    const user = await User.findOne({ email });

    // B. Check password (Direct comparison for now)
    if (user && user.password === password) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});


app.post("/api/orders", async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalPrice, user } = req.body;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = new Order({
      user, // The User ID coming from Frontend
      orderItems,
      shippingAddress,
      totalPrice
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);

  } catch (error) {
    console.log("❌ Error creating order:", error); // Debug helper
    res.status(500).json({ message: "Order creation failed" });
  }
});

// 8. GET MY ORDERS (For the Account Page)
// We use a URL parameter :userId to know whose orders to fetch
app.get("/api/orders/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});




app.get("/", (req, res) => {
  res.send("🚀 Server is running and DB is connected!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
