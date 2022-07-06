const UserModel = require("../models/user");
const { parseJwt } = require("./auth");




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
    token = req.params.token
    
  res.send ({
    message: parseJwt(token)
  })

  } catch (err) {
    next(err);
  }
}
