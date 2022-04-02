const {
  validators: { validateId },
} = require("commons");
const {
  models: { Job, User },
} = require("../data");

function deleteJob(userId, jobId) {
  validateId(userId);
  validateId(jobId);

  return User.findById(userId).then((user) => {
    if (!user) throw new Error(`User with id ${userId} does not exist`);

    if (user.role !== "company")
      throw new Error(`User with id ${userId} is not a company`);

    return Job.deleteOne({ _id: jobId, company: userId }).then((result) => {
      if (result.deletedCount === 0)
        throw new Error(
          `Job with id ${jobId} and user id ${userId} does not exist`
        );
    });
  });
}

module.exports = deleteJob;
