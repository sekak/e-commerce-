const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.put("/user/:id", async (req, res) => {
  if (req.params.id === req.body.id) {
    var pass;
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json("you can update your account only.");
  }
});

router.delete("/user/:id", async (req, res) => {
   if (req.body.id === req.params.id) {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user is delete.")
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json("you can update your account only.");
  }
});

router.get("/user/:id",async (req,res)=>{
    if (req.body.id === req.params.id) {
        try {
           const user = await User.findById(req.params.id)
           const {email  , ...other} = user._doc
            res.status(200).json(email)
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(400).json("you can get your account only.");
      }
})

router.get("/users/all", async (req, res) => {
  try {
    await User.deleteMany(); // Using the deleteMany() function from Mongoose to delete all users
    res.status(200).json("Delete all users successful.");
  } catch (error) {
    res.status(500).json("Error deleting users: " + error.message);
  }
});


module.exports = router;
