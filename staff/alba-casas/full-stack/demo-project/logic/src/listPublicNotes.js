const {
  models: { Note },
} = require("data");

function listPublicNotes() {
  return Note.find({ public: true })
    .populate("user")
    .then((notes) => {
      const docs = notes.map((note) => {
        const doc = note._doc;

        // sanitize
        doc.id = doc._id.toString();

        delete doc._id;
        delete doc.__v;

        delete doc.user;

        return doc;
      });

      return docs;
    });
}

module.exports = listPublicNotes;
