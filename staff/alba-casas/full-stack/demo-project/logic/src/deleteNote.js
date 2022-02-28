const { models: { Note }} = require("data");

function deleteNote(id) {
  return Note.deleteOne({ _id: id });
}

module.exports = deleteNote;
