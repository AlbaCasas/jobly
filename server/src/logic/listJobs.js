const { validateId, validateString } = require('../utils/validators');
const { Job } = require('../data/models');
const ObjectId = require('mongoose').Types.ObjectId;

function listJobs(userId, { title, location, role, company }) {
  validateId(userId);
  if (title) validateString(title);
  if (location) validateString(location);
  if (role) validateString(role);
  if (company) validateId(company);

  const TITLE_REGEX = new RegExp(title, 'i');
  const LOCATION_REGEX = new RegExp(location, 'i');
  // ^ inicio de string, $ final de string -> debe empezar por la primera letra del role y terminar por la ultima
  // exact match
  const ROLE_REGEX = new RegExp(`^${role}$`, 'i');

  return Job.find({
    // condicional en objeto -> SOLO si existe title añade { title: TITLE_REGEX } al find
    ...(title && { title: TITLE_REGEX }),
    ...(location && { location: LOCATION_REGEX }),
    ...(role && { role: ROLE_REGEX }),
    ...(company && { company: new ObjectId(company) }),
  })
    .populate('company')
    .populate('candidatures.candidate')
    .then((results) => {
      const docs = results.map((job) => {
        const doc = job._doc;

        doc.id = doc._id.toString();
        doc.date = doc.createAt.toDateString();
        delete doc.user;
        delete doc._id;
        delete doc.__v;
        delete doc.createAt;

        return doc;
      });

      return docs;
    });
}

module.exports = listJobs;
