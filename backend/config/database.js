const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(`${MONGO_URI}/form`).then(() => {
  console.log("database connected");
});
