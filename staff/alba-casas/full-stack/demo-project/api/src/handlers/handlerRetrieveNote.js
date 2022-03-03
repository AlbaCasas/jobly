const jwt = require("jsonwebtoken");
const { retrieveNote } = require("logic");

const handlerRetrieveNote = (req, res) => {
  try {
    const {
      headers: { authorization },
      params: { noteId },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: userId } = payload;

    retrieveNote(userId, noteId)
      .then((note) => res.json(note))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRetrieveNote;
