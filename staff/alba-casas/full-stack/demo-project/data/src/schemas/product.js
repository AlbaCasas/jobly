const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const product = new Schema({
  brand: {
    type: ObjectId,
    ref: "Brand",
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = product;
