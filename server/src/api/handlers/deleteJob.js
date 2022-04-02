const { verifyTokenAndGetUserId } = require('../helpers');
const { deleteJob } = require('../../logic');

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    const {
      params: { jobId },
    } = req;

    deleteJob(userId, jobId)
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
