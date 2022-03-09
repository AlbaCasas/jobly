const { verifyTokenAndGetUserId } = require("../helpers");
const { retrieveJob } = require("logic");

module.exports = (req, res) => {
  try {
    const companyId = verifyTokenAndGetUserId(req);
    const {
      params: { jobId },
    } = req;

    retrieveJob(companyId, jobId )
      .then((job) => res.json(job))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
