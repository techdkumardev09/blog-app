const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNETION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDatabase;
