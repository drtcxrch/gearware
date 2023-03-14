const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bike = new Schema({
  _id: { type: String, required: false },
  name: { type: String, required: true },
  type: { type: String, required: false },
  mileage: { type: Number, required: true },
  chain: { type: Number, required: false },
  chainring: { type: Number, required: false },
  cassette: { type: Number, required: false },
  pads: { type: Number, required: false },
  lines: { type: Number, required: false },
  front: { type: Number, required: false },
  rear: { type: Number, required: false },
});

module.exports = mongoose.model("bikes", Bike);
