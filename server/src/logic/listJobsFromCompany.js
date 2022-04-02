const {
  validators: { validateId },
} = require('../utils');
const {
  models: { Job },
} = require('../data');

function listJobsFromCompany(userId) {
  validateId(userId);

  return Job.find({ company: userId })
    .lean()
    .populate('company')
    .populate('candidatures.candidate')

    .then((jobs) => {
      jobs.forEach((job) => {
        job.id = job._id.toString();

        delete job._id;

        delete job.__v;
      });

      return jobs;
    });
}

module.exports = listJobsFromCompany;
