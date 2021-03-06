const {
  models: { Job },
} = require('../data');
const {
  validators: { validateId },
} = require('../utils');
const { User } = require('../data/models');

function applyToJob(userId, jobId, resume) {
  validateId(userId, 'userId');
  validateId(jobId, 'jobId');

  return User.findById(userId).then((user) => {
    if (user.role !== 'candidate') throw new Error('Companies can not apply');
    return Job.findById(jobId).then((job) => {
      if (
        job.candidatures.some((candidature) => {
          return candidature.candidate.equals(userId);
        })
      )
        throw new Error('You have applied to this offer');
      job.candidatures.push({ candidate: userId, resume: resume });
      job.save();
    });
  });
}

module.exports = applyToJob;
