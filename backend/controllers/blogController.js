const Blog = require("../models/Blog");

// @desc    Get all blogs
// @route   GET /api/blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs" });
  }
};

// @desc    Get single blog
// @route   GET /api/blogs/:id
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) res.json(blog);
    else res.status(404).json({ message: "Article not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching article" });
  }
};

// @desc    Create a blog post
// @route   POST /api/blogs
const createBlog = async (req, res) => {
  try {
    const { title, image, excerpt, content, tags } = req.body;
    const blog = new Blog({ title, image, excerpt, content, tags });
    const createdBlog = await blog.save();
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog" });
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/blogs/:id
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog" });
  }
};

module.exports = { getBlogs, getBlogById, createBlog, deleteBlog };