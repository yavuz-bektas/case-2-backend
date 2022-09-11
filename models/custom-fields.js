const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CustomFields = new Schema({
  input_type: {
    type: String,
    required: true,
    trim: true,
  },
  is_required: {
    type: String,
    required: true,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  place_holder: {
    type: String,
    required: true,
    trim: true,
  },
  css_style: {
    type: String,
    required: true,
    trim: true,
  },
  default_value: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  input_validator: {
    type: String,
    required: true,
    trim: true,
  },
  value: {
    type: String,
    trim: true,
    default: "",
  },
});

const Field = mongoose.model("Field", CustomFields, "fields");

module.exports = Field;
