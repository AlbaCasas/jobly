const { validateId, validateString } = require("commons/src/validators");
const { Job } = require("data/src/models");

function listJobs(userId, { title, location, role }) {
  validateId(userId);
  if (title) validateString(title);
  if (location) validateString(location);
  if (role) validateString(role);

  const TITLE_REGEX = new RegExp(title, "i");
  const LOCATION_REGEX = new RegExp(location, "i");
  // ^ inicio de string, $ final de string -> debe empezar por la primera letra del role y terminar por la ultima
  // exact match
  const ROLE_REGEX = new RegExp(`^${role}$`, "i");

  return Job.find({
    // condicional en objeto -> SOLO si existe title añade { title: TITLE_REGEX } al find
    ...(title && { title: TITLE_REGEX }),
    ...(location && { location: LOCATION_REGEX }),
    ...(role && { role: ROLE_REGEX }),
  })
    .populate("company")
    .populate("candidates")
    .then((results) => {
      const docs = results.map((job) => {
        const doc = job._doc;

        doc.id = doc._id.toString();
        delete doc.user;
        delete doc._id;
        delete doc.__v;

        return doc;
      });

      return docs;
    });
}

module.exports = listJobs;

