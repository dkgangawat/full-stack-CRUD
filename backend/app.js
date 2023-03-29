const express = require("express");
const cors = require("cors");
const app = express();
require("./config/database");
require("dotenv").config();
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { User } = require("./models/users");
const usersRouter = require("./routes/forms");
app.use("/", usersRouter);
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
  );
}

module.exports = app;
