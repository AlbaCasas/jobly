const { model } = require("mongoose");
const { note } = require("../schemas");

const Note = model("Note", note);

module.exports = Note;