const UserModel = require("../models/user");

exports.SignIn = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let newUser = await UserModel.create({
      username,
      password,
    });
    newUser.password=null
    res.send({ newUser });
  } catch (err) {
    next(err);
  }
};

