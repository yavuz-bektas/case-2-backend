const { json } = require("express");
const Field = require("../models/custom-fields");
const Idocs = require("../models/idocs");

const saveFields = async (req, res, next) => {
  const comingData = {
    css_style: "8",
    default_value: "number data",
    description: "number description",
    input_type: "number",
    input_validator: "none",
    is_required: true,
    name: "number Title Name",
    place_holder: "number Place Holder",
  };
  const myData = new Field(comingData);

  myData
    .save()
    .then((item) => {
      res.send("item saved to database!\n" + item.created);
    })
    .catch((err) => {
      return res.status(400).json({
        err,
      });
    });
};

const saveIdocs = async (req, res, next) => {
  const myData = new Idocs(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database!\n" + item.created);
    })
    .catch((err) => {
      return res.status(400).json({
        err,
      });
    });
};

const getFields = async (req, res, next) => {
  Field.find({}, (err, all) => {
    if (err) return console.log(err);
    return res.send(all);
  });
};

const updateValue = async (req, res, next) => {
  const fieldId = req.body.fieldId;
  const newValue = req.body.newValue;
  try {
    const fieldFind = await Field.findByIdAndUpdate(fieldId, {
      $set: {
        value: newValue,
      },
    });
    return res.status(200).json({ msg: "field data has been updated" });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  saveFields,
  getFields,
  saveIdocs,
  updateValue,
};
