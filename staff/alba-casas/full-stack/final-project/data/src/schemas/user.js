const { Schema } = require("mongoose");

const user = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
    
  },

  resume: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["company", "candidate"],
    required: true,
  },
});

module.exports = user;
