const { verifyTokenAndGetUserId } = require("../helpers");
const { applyToJob } = require("logic");

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    const {
      params: { jobId },
      body: { resume },
    } = req;

    applyToJob(userId, jobId, resume)
      .then(() => res.status(201).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
