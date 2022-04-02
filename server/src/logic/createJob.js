const {
  models: { Job, User },
} = require('../data');

const {
  validators: { validateString, validateId },
} = require('../utils');

function createJob(userId, { title, description, role, location }) {
  validateId(userId);
  validateString(title, 'title');
  validateString(role);
  validateString(location, 'location');

  return User.findById(userId).then((user) => {
    if (!user) throw new Error(`User with id ${userId} does not exist`);

    if (user.role !== 'company')
      throw new Error(`User with id ${userId} is not a company`);

    return Job.create({
      company: userId,
      title,
      description,
      role,
      location,
      candidatures: [],
      createAt: new Date(),
    }).then(() => {});
  });
}

module.exports = createJob;
