const { verifyTokenAndGetUserId } = require("../helpers");
const { createNote } = require("logic");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    const {
      body: { text, color },
    } = req;

    createNote(userId, text, color)
      .then(() => res.status(201).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
