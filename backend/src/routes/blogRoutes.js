const express = require("express");
const router = express.Router();
const { getBlogs, getBlogById, createBlog, deleteBlog } = require("../controllers/blogController");

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlogById).delete(deleteBlog);

module.exports = router;