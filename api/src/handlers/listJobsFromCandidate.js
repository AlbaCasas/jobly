const { listJobsFromCandidate } = require("logic");
const { verifyTokenAndGetUserId } = require("../helpers");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    listJobsFromCandidate(userId)
      .then((jobs) => res.json(jobs))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
