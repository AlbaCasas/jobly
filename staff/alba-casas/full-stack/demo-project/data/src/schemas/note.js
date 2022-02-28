const { Schema } = require("mongoose");
const { Types: { ObjectId }} = Schema;

const note = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  color: {
    type: String,
    required: true,
    default: "yellow"
  },
});

module.exports = note