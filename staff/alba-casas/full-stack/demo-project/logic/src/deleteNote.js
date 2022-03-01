const { models: { Note }} = require("data");
const {validators: { validateId }} = require("commons");

function deleteNote(noteId) {
  validateId(noteId)
  return Note.deleteOne({ id: noteId });
}

module.exports = deleteNote;
