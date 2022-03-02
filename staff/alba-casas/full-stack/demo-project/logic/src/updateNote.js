const {
  validators: { validateId, validateString },
} = require("commons");
const { validateBoolean } = require("commons/src/validators");
const {
  models: { Note },
} = require("data");

function updateNote(userId, noteId, text, color, public = false) {
  validateId(userId);
  validateId(noteId);
  validateString(text, "text");
  validateString(color, "color");
  validateBoolean(public, "public");

  return Note.updateOne({ _id: noteId, user: userId },{ text, color, public, updateAt: new Date() }
  );
}

module.exports = updateNote;
