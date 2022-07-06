const UserModel = require("../models/user");
const { parseJwt } = require("../utils/getuser");





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

exports.whoAmI = async (req, res, next) => {
  try{
    tokin = req.params.token
    user = parseJwt(tokin)
    res.send ({ user })

  } catch (err) {
    next(err);
  }
}
