const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SurveySchema = new Schema(
  {
    fullname: {
        type: String,
        required: true,
      },
      work: {
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
  }
);

const SurveyModel = mongoose.model("survey", SurveySchema);


module.exports = SurveyModel;
