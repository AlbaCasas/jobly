const { verifyTokenAndGetUserId } = require("../helpers");
const { listJobs } = require("logic");

module.exports = (req, res) => {
  try {
    const companyId = verifyTokenAndGetUserId(req);

    listJobs(companyId)
      .then((jobs) => res.json(jobs))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
