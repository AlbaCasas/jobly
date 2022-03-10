const { models: { Job }} = require("data");
const { validators: { validateId }} = require("commons");

function applyToJob(userId, jobId) {
  validateId(userId, "userId");
  validateId(jobId, "jobId");

  return Job.findById(jobId).then((job) => {
    if (job.candidates.includes(userId)) throw new Error("Duplicate id");
    job.candidates.push(userId);
    job.save();
  });
}

module.exports = applyToJob;
