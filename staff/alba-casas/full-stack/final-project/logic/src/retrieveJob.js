const {
  models: { Job },
} = require("data");
const {
  validators: { validateId },
} = require("commons");
function retrieveJob(userId, noteId) {
  validateId(userId);
  validateId(noteId);

  return Note.findById(noteId)
    .populate("user")
    .then((note) => {
      if (!note) throw new Error(`note with ${noteId} does not exist`);

      if (note.user.id === userId || note.public) {
        const doc = note._doc;

        delete doc._id;
        delete doc.__v;

        doc.userId = doc.user.id;
        doc.userName = doc.user.name;

        delete doc.user;

        return doc;
      } else throw new Error(`note with id ${noteId} is not public`);
    });
}

module.exports = retrieveJob;
