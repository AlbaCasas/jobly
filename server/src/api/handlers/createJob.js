const { verifyTokenAndGetUserId } = require('../helpers');
const { createJob } = require('../../logic');

module.exports = (req, res) => {
  try {
    const companyId = verifyTokenAndGetUserId(req);

    const {
      body: { title, description, role, location },
    } = req;

    createJob(companyId, { title, description, role, location })
      .then(() => res.status(201).send())
      .catch((error) => res.status(400).json({ error: error.message }));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
