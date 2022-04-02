const {
  models: { Job },
} = require('../data');
const {
  validators: { validateId },
} = require('../utils');
function retrieveJob(userId, jobId) {
  validateId(userId);
  validateId(jobId);

  return Job.findById(jobId)
    .lean()
    .populate('company')
    .populate('candidatures.candidate')
    .then((job) => {
      job.id = job._id.toString();

      delete job._id;
      delete job.__v;

      return job;
    });
}

module.exports = retrieveJob;
