const { verifyTokenAndGetUserId } = require('../helpers');
const { listJobsFromCompany } = require('../../logic');

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    listJobsFromCompany(userId)
      .then((jobs) => res.json(jobs))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
