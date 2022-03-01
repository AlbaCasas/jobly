const {
  validators: { validateId, validateString },
} = require("commons");
const {
  models: { Note },
} = require("data");

function updateNote( id, text, color ) {
  validateId(id);
  validateString(text, "text");
  validateString(color, "color");

  return Note.updateOne({ id, text, color });
}
module.exports = updateNote;
