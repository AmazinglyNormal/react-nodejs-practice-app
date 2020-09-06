const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/", async (req, res) => {
  const user = req.body;

  const existingUser = await User.exists({ email: user.email });
  const existingUsername = await User.exists({ username: user.username });

  if (existingUser) {
    return res.send("User already exists");
  }

  if (existingUsername) {
    return res.send("Username already exists");
  }

  await User.create(user);

  res.send("Successfully signed up");
});

module.exports = router;
