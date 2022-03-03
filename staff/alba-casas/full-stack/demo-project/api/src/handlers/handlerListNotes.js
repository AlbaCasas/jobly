const { listNotes } = require("logic");
const jwt = require("jsonwebtoken");

const handlerListNotes = (req, res) => {
  try {
    const {
      headers: { authorization },
    } = req;

    const [, token] = authorization.split(" ");

    const payload = jwt.verify(token, "mi super secreto");

    const { sub: id } = payload;

    listNotes(id)
      .then((notes) => res.json(notes))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerListNotes;
