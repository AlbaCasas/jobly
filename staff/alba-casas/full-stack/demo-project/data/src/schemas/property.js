const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const property = new Schema({
  cadastral: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owners: [
    {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

module.exports = property;
