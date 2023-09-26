const { ObjectId } = require("mongodb");

const checkIdMiddleware = (req, res, next) => {
  const idToCheck = req.params.id;

  if (!idToCheck)
    return res.status(400).json({ success: false, message: "Id is required" });
  else if (ObjectId.isValid(idToCheck)) return next();
  return res.status(400).json({ success: false, message: "Invalid post id" });
};

const createBlogValidation = (req, res, next) => {
  const { title, authorName, description } = req.body;
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  else if (!authorName)
    return res
      .status(400)
      .json({ success: false, message: "Author name is required" });
  else if (!description)
    return res
      .status(400)
      .json({ success: false, message: "Description is required" });
  return next();
};

module.exports = {
  checkIdMiddleware,
  createBlogValidation,
};
