const mongoose = require("mongoose");
var debug = require('debug')('petbookapi:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/petbookapi")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    });
