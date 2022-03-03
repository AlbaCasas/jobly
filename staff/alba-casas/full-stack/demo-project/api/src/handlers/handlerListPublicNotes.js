const { listPublicNotes } = require("logic");

const handlerListPublicNotes = (req, res) => {
  try {
    listPublicNotes()
      .then((notes) => res.json(notes))
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerListPublicNotes;
