const {
  models: { Job, User },
} = require("data");

const {
  validators: { validateString, validateId },
} = require("commons");

function createJob(
  userId,
  { title, description, role, location, candidates = [], createAt = Date() }
) {
  validateId(userId);
  validateString(title, "title");
  validateString(description, "description");
  validateString(role);
  validateString(location, "location");

  return User.findById(userId).then((user) => {
    if (!user) throw new Error(`User with id ${userId} does not exist`);

    if (user.role === "candidate")
      throw new Error(`User with id ${userId} is not a company`);

    return Job.create({
      company: userId,
      title,
      description,
      role,
      location,
      candidates,
      createAt,
    }).then((job) => {});
  });
}

module.exports = createJob;