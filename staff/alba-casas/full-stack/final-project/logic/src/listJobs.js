const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job, User },
} = require("data");

function listJobs(userId) {
  validateId(userId);

  return Job.find({ user: userId })
    .populate("company")
    .then((jobs) => {
      const docs = jobs.map((job) => {
        const doc = job._doc;

        delete doc.__v;

        return doc;
      });

      return docs;
    });
}

module.exports = listJobs;
