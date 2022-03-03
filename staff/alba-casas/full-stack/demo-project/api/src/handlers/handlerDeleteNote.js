const { deleteNote } = require("logic");
const jwt = require("jsonwebtoken");

const handlerDeleteNote = (req, res) => {
  try {
    const {
      headers: { authorization },
      params: { noteId },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: userId } = payload;

    deleteNote(userId, noteId)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteNote;
