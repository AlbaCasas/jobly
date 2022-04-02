const { verifyTokenAndGetUserId } = require("../helpers");
const { deleteCandidate } = require("../../logic");

module.exports = (req, res) => {
  try {
    const {
      body: { password },
    } = req;

    const userId = verifyTokenAndGetUserId(req);

    deleteCandidate(userId, password)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
