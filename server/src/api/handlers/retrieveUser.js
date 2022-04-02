const { verifyTokenAndGetUserId } = require("../helpers");
const { retrieveUser } = require("../../logic");

module.exports = (req, res) => {
  try {
    const id = verifyTokenAndGetUserId(req);

    retrieveUser(id)
      .then((user) => res.json(user))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
