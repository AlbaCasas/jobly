const {validators: { validateId, validateString }} = require("commons");
const { models: { Note }} = require("data");

function updateNote( id, noteId, text, color ) {
  validateId(id)
  validateId(noteId);
  validateString(text, "text");
  validateString(color, "color");

  return Note.updateOne({ _id: noteId, user: id }, { text, color });
}

module.exports = updateNote;
