const { listPublicNotesFromUser } = require("logic");

const handlerListPublicNotesFromUser = (req, res) => {
  try {
    const {
      params: { userId },
    } = req;

    listPublicNotesFromUser(userId)
      .then((notes) => res.json(notes))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerListPublicNotesFromUser;
