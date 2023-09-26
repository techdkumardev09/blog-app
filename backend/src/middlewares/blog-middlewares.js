const { ObjectId } = require("mongodb");

const checkIdMiddleware = (req, res, next) => {
  const idToCheck = req.params.id;

  if (!idToCheck)
    return res.status(400).json({ success: false, message: "Id is required" });
  else if (ObjectId.isValid(idToCheck)) return next();
  return res.status(400).json({ success: false, message: "Invalid post id" });
};

module.exports = {
  checkIdMiddleware,
};
