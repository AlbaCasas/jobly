const {
  models: { Job },
} = require("data");
const {
  validators: { validateId },
} = require("commons");

function addJob(userId, jobId) {
  validateId(userId, "userId");
  validateId(jobId, "jobId");

  return Job.findById(jobId).then((job) => {job.candidates.push(userId);
    Job.save();
  });
}

module.exports = addJob;
