const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const stock = new Schema({
  product: {
    type: ObjectId,
    required: true,
    ref: "Product",
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = stock;
