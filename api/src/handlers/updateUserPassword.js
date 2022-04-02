const { verifyTokenAndGetUserId } = require("../helpers");
const { updateUserPassword } = require("logic");

module.exports = (req, res) => {
  try {
    const id = verifyTokenAndGetUserId(req);

    const {
      body: { currPassword, newPassword },
    } = req;

    updateUserPassword({ id, currPassword, newPassword })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
