const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashing = await bcrypt.hash(req.body.password, salt);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashing,
    });
    const check = await User.findOne({ name: user.name });
    console.log(await User.find({ name: user.name }));
    if (check) res.status(400).json("change email.");
    else {
      const users = await user.save();
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
    console.log(req.body);
  
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        res.status(501).json("Can't find this email, register first");
        return; // Stop execution of the function after sending the response
      }
  
      const decrypte = await bcrypt.compare(req.body.password, user.password);
      if (!decrypte) {
        res.status(400).json("Password is wrong");
        return; // Stop execution of the function after sending the response
      }
  
      const { password, ...other } = user._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json("Something went wrong");
    }
  });

module.exports = router;
