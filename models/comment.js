const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true
    },
  }
);

const CommentModel = mongoose.model("comment", CommentSchema);


module.exports = CommentModel;
