const {
  validators: { validateId, validateString },
} = require('../utils');
const {
  models: { Job },
} = require('../data');

function updateJob(userId, { jobId, title, description, role, location }) {
  validateId(userId);
  validateId(jobId);
  validateString(title, 'title');
  validateString(role, 'role');
  validateString(location, 'location');

  return Job.findById(jobId).then((job) => {
    if (!job) throw new Error('No job found with that id');
    /*  if (job.company !== userId)
      throw new Error("This job is not yours. Go away"); */
    return Job.updateOne(
      { _id: jobId, company: userId },
      { title, description, role, location, createAt: new Date() }
    );
  });
}

module.exports = updateJob;
