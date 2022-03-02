const {
  validators: { validateId, validatePassword },
} = require("commons");
const {
  models: { User },
} = require("data");
const { user } = require("data/src/schemas");

function deleteUser(userId, password) {
  validateId(userId);
  validatePassword(password);

  return User.findById(userId)
  .then((user) => {
    if (user.password === password) {
      return User.deleteOne({ _id: userId });
    } else throw new Error("Wrong credentials");
  });
}

module.exports = deleteUser;
