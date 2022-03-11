const {
  validators: { validateId, validateString },
} = require("commons");
const { validateBoolean } = require("commons/src/validators");
const {
  models: { Job },
} = require("data");

function updateJob(userId, jobId, title, description, role, location) {
  validateId(userId);
  validateId(jobId);
  validateString(title, "title");
  validateString(description, "description");
  validateString(role, "role");
  validateString(location, "location");

  return Job.updateOne(
    { _id: jobId, company: userId },
    { title, description, role, location, createAt: new Date() }
  );
}

module.exports = updateJob;
