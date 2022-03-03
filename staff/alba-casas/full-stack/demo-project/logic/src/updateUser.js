const {
  models: { User },
} = require("data");
const {
  validators: { validateEmail, validateId, validateString },
} = require("commons");

function updateUser(id, { name, email }) {
  validateId(id);
  validateEmail(email);
  validateString(name);

  return User.updateOne({ _id: id }, { name, email }).then((result) => {
    if (result.matchedCount === 0)
      throw new Error(`user with id ${id} does not exist`);
  });
}

module.exports = updateUser;
