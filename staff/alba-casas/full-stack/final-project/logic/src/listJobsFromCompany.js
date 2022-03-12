const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job, User },
} = require("data");

function listJobsFromCompany(userId) {
  validateId(userId);

  return Job.find({ company: userId })
    .populate("company")
    .populate("candidatures.candidate")

    .then((jobs) => {
      const docs = jobs.map((job) => {
        const doc = job._doc;

        delete doc.__v;

        return doc;
      });

      return docs;
    });
}

module.exports = listJobsFromCompany;
