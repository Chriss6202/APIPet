var { SignIn, whoAmI } = require("../controllers/user");
var express = require("express");
var jwt = require("jsonwebtoken");
var UserModel = require("../models/user");
var router = express.Router();

router.post("/register", SignIn);
router.post("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body; //TODO: Add email 
    let user = await UserModel.findOne({ username });
    if (!user)
      return res.status(400).send({
        message: "User not found",
      });
    let validPassword = await user.isValidPassword(password);
    if (!validPassword)
      return res.status(400).send({
        message: "Wrong password",
      });
    let body = { _id: user._id };
    let token = jwt.sign(
      { user: body },
      process.env.JWT_SECRET || "TOP_SECRET"
    );
    return res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.get("/whoami/:token", whoAmI)
module.exports = router;