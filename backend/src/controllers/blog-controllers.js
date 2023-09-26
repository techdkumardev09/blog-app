const Blog = require("../models/blog-models");
const path = require("path");
const fs = require("fs");

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

// create a new blog post controller
const createBlogController = async (req, res) => {
  try {
    // if the post has already been created with same title
    const existingBlog = await Blog.find({
      title: { $regex: new RegExp(req.body.title, "i") },
    });
    if (existingBlog.length > 0)
      return res.status(200).json({
        success: false,
        message: "Blog with same title already exists",
      });

    const reqBody = {
      ...req.body,
      image: fs.readFileSync(
        path.join(__dirname, "../../uploads/") + req.file.filename
      ),
    };

    const newBlogData = new Blog(reqBody); // create new blog document
    await newBlogData.save(); // save new blog

    return res.status(200).json({
      success: true,
      blog: newBlogData,
      message: "Blog created successfully",
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getAllBlogController,
  getOneBlogController,
  createBlogController,
};
