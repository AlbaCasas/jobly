const {
  models: { Job },
} = require("data");

const {
  validators: { validateString, validateId },
} = require("commons");

function createJob({
  companyId,
  title,
  description,
  role,
  location,
  candidates = [],
  createAt = Date(),
}) {
  validateId(companyId);
  validateString(title, "title");
  validateString(description, "description");
  validateString(role);
  validateString(location, "location");

  return Job.create({
    company: companyId,
    title,
    description,
    role,
    location,
    candidates,
    createAt,
  }).then((job) => {});
}

module.exports = createJob;
