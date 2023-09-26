const {
  getAllBlogController,
  getOneBlogController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
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

// PUT /api/blog/update - update a  blog
blogRoute.put(
  "/update/:id",
  uploadFile.single("image"),
  createBlogValidation,
  updateBlogController
);

// DELETE /api/blog/:id - create a new  blog
blogRoute.delete("/:id", checkIdMiddleware, deleteBlogController);

module.exports = blogRoute;
