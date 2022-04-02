const { verifyTokenAndGetUserId } = require('../helpers');
const { updateJob } = require('../../logic');

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    const {
      body: { title, description, role, location },
      params: { jobId },
    } = req;

    updateJob(userId, { jobId, title, description, role, location })
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
