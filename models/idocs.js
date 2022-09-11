const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var idocCustoms = new Schema({
  user_id: {
    type: String,
    required: true,
    trim: true,
  },
  which_field: [String],
  created: {
    type: Date,
    default: Date.now,
  },
  values: [String],
});

const Idoc = mongoose.model("Idoc", idocCustoms, "idocs");

module.exports = Idoc;
