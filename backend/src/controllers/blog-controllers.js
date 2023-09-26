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

// get a single blog post controller
const getOneBlogController = async (req, res) => {
  try {
    const blogId = req.params.id;
    const singleBlog = await Blog.findById(blogId); // find blog by id

    if (!singleBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found it was deleted",
      });
    }

    return res.status(200).json({
      success: true,
      blog: singleBlog,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { getAllBlogController, getOneBlogController };
