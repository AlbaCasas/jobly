const {
  models: { Note },
} = require("data");
const {
  validators: { validateId },
} = require("commons");
function retrieveNote(noteId) {
  validateId(noteId);

  return Note.findOne({ _id: noteId, public: true });
  /* .then((note) => {
    const doc = note._doc;

    //sanitize
    delete doc._id;
    delete doc.public;
    delete doc.__v;

    return doc;
  }); */
}

module.exports = retrieveNote;
