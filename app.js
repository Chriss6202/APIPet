var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var passport = require("passport")
require("./auth/auth");;
require("./database/config");

var postRouter = require("./routers/post")
var authRouter = require("./routers/auth")

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
app.use("/post", /*passport.authenticate("jwt", { session: false }),*/ postRouter);

module.exports = app;
