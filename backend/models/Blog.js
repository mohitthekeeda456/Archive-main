const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // Main cover image
  excerpt: { type: String, required: true }, // Short summary (shown on the list)
  content: { type: String, required: true }, // The full article text
  author: { type: String, default: "NoirSane Team" },
  tags: [{ type: String }], // e.g., ["Health", "Dark Chocolate"]
}, {
  timestamps: true // Automatically adds "createdAt" (Date)
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;