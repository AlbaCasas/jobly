const {
  models: { Job },
} = require("data");
const {
  validators: { validateId },
} = require("commons");

function retrieveCandidates(userId, jobId) {
  validateId(userId, "userId");
  validateId(jobId, "jobId");

  return Job.findById(jobId)
  .then((job) => {
    const { candidates } = job
  });
}

// Conseguir el id de job
// coger la propiedad candidates
// mirar si hay users
// si hay users, devolver cada user


module.exports = retrieveCandidates;
