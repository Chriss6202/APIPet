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

exports.whoAmI = async (req, res, next) => {
  try{
    
    res.send({ message: Headers.get()})
    function parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      return JSON.parse(jsonPayload);
  };

  res.send ({
    message: parseJwt(token)
  })

  } catch (err) {
    next(err);
  }
}
