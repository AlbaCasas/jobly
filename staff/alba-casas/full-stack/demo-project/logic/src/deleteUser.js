const { validators: { validateId }} = require("commons");
const { models: { User }} = require("data");

function deleteUser(id) {
  validateId(id)
  return User.deleteOne({ _id: id });
}

module.exports = deleteUser;
