const { verifyTokenAndGetUserId } = require("../helpers");
const { listNotes } = require("logic");

module.exports = (req, res) => {
  try {
    const id = verifyTokenAndGetUserId(req);

    listNotes(id)
      .then((notes) => res.json(notes))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
