const UserModel = require("../models/user");

exports.createUser = async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let newUser = await UserModel.create({
      username,
      password,
    });
    newUser._id = null
    res.send({ newUser });
  } catch (err) {
    next(err);
  }
};

exports.Login = async (req, res, next) => {
  try {
    let { Lusername, Lpassword } = req.body
    UserModel.methods.isValidPassword = async function (password) {
      const user = Lusername;
      const compare = await bcrypt.compare(Lpassword, user.password);
      return compare;
    };
    if (compare = true)
    {
      let user = await UserModel.findOne({username: Lusername})
      res.send({user})
    }

  } catch (err) {
    next(err)
  }
}
 