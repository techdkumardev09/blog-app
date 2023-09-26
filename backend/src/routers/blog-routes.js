const {
  getAllBlogController,
  getOneBlogController,
  createBlogController,
} = require("../controllers/blog-controllers");
const {
  checkIdMiddleware,
  createBlogValidation,
} = require("../middlewares/blog-middlewares");
const uploadFile = require("./../utils/uploadFile");

const blogRoute = require("express").Router();

// GET /api/blog - getting all blog
blogRoute.get("/", getAllBlogController);

// GET /api/blog/:id - getting a specific blog
blogRoute.get("/:id", checkIdMiddleware, getOneBlogController);

// POST /api/blog/create - create a new  blog
blogRoute.post(
  "/create",
  uploadFile.single("image"),
  createBlogValidation,
  createBlogController
);

module.exports = blogRoute;
