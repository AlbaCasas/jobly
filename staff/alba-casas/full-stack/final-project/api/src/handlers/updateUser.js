const { updateUser } = require("logic");
const { verifyTokenAndGetUserId } = require("../helpers");

module.exports = (req, res) => {
  try {
    const {
      body: { name, email, phone, location, avatar },
    } = req;

    const id = verifyTokenAndGetUserId(req);

    updateUser(id, { name, email, phone, location, avatar })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
