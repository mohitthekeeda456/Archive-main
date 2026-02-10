const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// 1. GET ALL BLOGS (For the Blog List page)
router.get("/", async (req, res) => {
  try {
    // Sort by newest first (-1)
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

// 2. GET SINGLE BLOG (When user clicks "Read More")
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) res.json(blog);
    else res.status(404).json({ message: "Article not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
});

// 3. CREATE BLOG (For You - The Admin)
router.post("/", async (req, res) => {
  try {
    const { title, image, excerpt, content, tags } = req.body;
    
    const blog = new Blog({
      title,
      image,
      excerpt,
      content,
      tags
    });

    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog" });
  }
});

// 4. DELETE BLOG (In case of typos)
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog" });
  }
});

module.exports = router;