const express = require("express");
const router = express.Router();
const { User } = require("../models/users");
router.post("/create", async (req, res) => {
  try {
    await User({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      hobbies: req.body.hobbies,
    }).save();
    res.status(201);
    res.send({ message: "created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send({ message: "something went wrong" });
  }
});
router.get("/data", (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
});
router.delete(`/data/items/:id`, async (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => {
    res.send({ message: "deleted successfully" });
  });
});
router.put("/data/update/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  try {
    await User.findOneAndUpdate({ _id: userId }, updatedUserData);
    res.send("updated");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
