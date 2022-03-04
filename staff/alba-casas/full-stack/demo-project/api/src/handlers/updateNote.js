const { verifyTokenAndGetUserId } = require("../helpers");
const { updateNote } = require("logic");


module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req)

    const { body: { text, color, public }, params: { noteId }} = req;

    updateNote(userId, noteId, text, color, public)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

