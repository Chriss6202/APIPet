
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
    comment: {
      type: Array,
    },
    survey: {
      type: Array,
    },
    favorite: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);


module.exports = PostModel;
