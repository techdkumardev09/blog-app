const { getAllBlogController } = require("../controllers/blog-controllers");

const blogRoute = require("express").Router();

// GET /api/blog - getting all blog
blogRoute.get("/", getAllBlogController);

module.exports = blogRoute;
