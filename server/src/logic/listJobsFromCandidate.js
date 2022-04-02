const {
  models: { Job },
} = require('../data');
const {
  validators: { validateId },
} = require('../utils');

function listJobsFromCandidate(userId) {
  validateId(userId);

  return Job.find({ 'candidatures.candidate': userId })
    .populate('company')
    .populate('candidatures.candidate')
    .then((jobs) => {
      const docs = jobs.map((job) => {
        const doc = job._doc;

        doc.id = doc._id.toString();
        doc.createAt = doc.createAt.toDateString();
        delete doc._id;
        delete doc.__v;

        delete doc.candidate;

        return doc;
      });
      return docs;
    });
}

module.exports = listJobsFromCandidate;
