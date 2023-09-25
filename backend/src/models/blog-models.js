const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: Buffer,
  },
  { timestamps: true }
);

const Blog = new mongoose.model("Blog", blogSchema);
module.exports = Blog;
