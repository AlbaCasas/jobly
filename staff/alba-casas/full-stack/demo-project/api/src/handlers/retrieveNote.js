const { verifyTokenAndGetUserId } = require("../helpers");
const { retrieveNote } = require("logic");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);
    const {
      params: { noteId },
    } = req;

    retrieveNote(userId, noteId)
      .then((note) => res.json(note))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
