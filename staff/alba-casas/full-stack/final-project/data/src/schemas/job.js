const { Schema } = require("mongoose");
const {
  Types: { ObjectId },
} = Schema;

const job = new Schema({
  company: {
    type: ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
    enum: ["designer", "developer", "product"],
  },

  location: {
    type: String,
    required: true,
  },

  candidates: [],

  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = job;
