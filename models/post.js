
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
   /*creator: {
      type: UserSchema,
      required: true,
    },*/
  }
);

const SurveySchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    Work: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
  /* creator: {
      type: UserSchema,
      required: true,
    },*/
  }
);

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
      type: Schema.Types.ObjectId, ref: 'survey',
    },
    favorite: {
      type: Boolean,
    },
   /* creator: {
      type: UserSchema,
      required: true,
    },*/
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);


module.exports = PostModel;
