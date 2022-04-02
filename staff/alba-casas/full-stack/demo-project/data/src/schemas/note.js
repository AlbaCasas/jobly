const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

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
    default: "yellow",
  },

  public: {
    type: Boolean,
    required: true,
    default: false,
  },

  createAt: {
    type: Date,
    required: true,
    default: Date.now
  },

  updateAt: {
    type: Date,
  },
});

module.exports = note;
