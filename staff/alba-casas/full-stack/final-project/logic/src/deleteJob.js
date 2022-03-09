const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job },
} = require("data");

function deleteJob(userId, jobId) {
  validateId(userId);
  validateId(jobId);
  return Job.deleteOne({ _id: jobId, company: userId }).then((result) => {
    if (result.deletedCount === 0)
      throw new Error(
        `note with id ${jobId} and user id ${userId} does not exist`
      );
  });
}

module.exports = deleteJob;
