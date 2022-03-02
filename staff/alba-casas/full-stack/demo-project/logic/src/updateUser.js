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

  return User.updateOne({ _id: id }, { name, email });
}

module.exports = updateUser;
