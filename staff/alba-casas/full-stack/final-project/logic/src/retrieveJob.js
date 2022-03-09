const {
  models: { Job },
} = require("data");
const {
  validators: { validateId },
} = require("commons");
function retrieveJob(userId, jobId) {
  validateId(userId);
  validateId(jobId);

  return Job.findById(jobId)
    .populate("company")
    .then((job) => {
      const doc = job._doc;

      delete doc._id;
      delete doc.password;
      delete doc.__v;

      return doc;
    });
}

module.exports = retrieveJob;
