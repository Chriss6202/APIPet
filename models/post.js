
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    user: {
      type: String,
      required: true
    },
    comment: {
      type: Array,
    },
    survey: {
      type: Array,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);


module.exports = PostModel;
