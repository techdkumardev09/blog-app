const Blog = require("../models/blog-models");

// get all blog posts controller
const getAllBlogController = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    return res.status(200).json({
      success: true,
      totalBlogs: allBlogs.length,
      blogs: allBlogs,
    });
  } catch (err) {
    console.error("getAllBlogController", err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { getAllBlogController };
