const { models: { Note }} = require("data");
const {validators: { validateId }} = require("commons");

function deleteNote(id) {
  validateId(id)
  return Note.deleteOne({ _id: id });
}

module.exports = deleteNote;
