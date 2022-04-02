const { verifyTokenAndGetUserId } = require('../helpers');
const { listJobs } = require('../../logic');

module.exports = (req, res) => {
  try {
    const userId = verifyTokenAndGetUserId(req);

    const title = req.query.title;
    const location = req.query.location;
    const role = req.query.role;
    const company = req.query.company;
    const hideEmpty = req.query.hideEmpty;

    listJobs(userId, { title, location, role, company, hideEmpty: !!hideEmpty })
      .then((jobs) => res.json(jobs))
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
