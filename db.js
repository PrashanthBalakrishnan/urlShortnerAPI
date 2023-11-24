const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prashanth:eT75HjUmUBr5itDS@cluster0.q46a5u3.mongodb.net/test",
      {
        useNewUrlParser: true,
      }
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
