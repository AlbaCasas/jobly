const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job, User },
} = require("data");

function listJobs(userId) {
  validateId(userId);

  return Job.find({ user: userId }).then((jobs) => {
    const docs = jobs.map((job) => {
      const doc = job._doc;

      return doc;
    });

    return docs;
  });
}

module.exports = listJobs;
