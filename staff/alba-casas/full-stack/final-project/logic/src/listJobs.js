const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job },
} = require("data");

function listJobs(companyId) {
  validateId(companyId);

  return Job.find({ company: companyId }).then((jobs) => {
    const docs = jobs.map((job) => {
      const doc = job._doc;

      return doc;
    });

    return docs;
  });
}

module.exports = listJobs;
