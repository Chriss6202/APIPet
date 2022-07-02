var {
    createUser, Login,
} = require("../controllers/user");
var express = require("express");
var router = express.Router();

router.post("/signup", createUser);
router.get("/login", Login);

module.exports = router;