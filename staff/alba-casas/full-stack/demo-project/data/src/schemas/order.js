const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const order = new Schema({
  stock: {
    type: ObjectId,
    required: true,
    ref: "Stock",
  },
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = order;
