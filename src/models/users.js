const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
    required: true,
    min: 10,
  },
  hobbies: String,
});

// console.log(user.methods);
const User = mongoose.model("User", user);
module.exports = { User };
