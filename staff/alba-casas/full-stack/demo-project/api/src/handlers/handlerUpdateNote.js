const { updateNote } = require("logic");
const jwt = require("jsonwebtoken");

const handlerUpdateNote = (req, res) => {
  try {
    const {
      headers: { authorization },
      body: { text, color, public },
      params: { noteId },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: userId } = payload;

    updateNote(userId, noteId, text, color, public)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerUpdateNote;
