const {
  validators: { validateId, validatePassword },
} = require("commons");
const {
  models: { User },
} = require("../data");
const { user } = require("../data/schemas");

function deleteUser(userId, password) {
  validateId(userId);
  validatePassword(password);

  return User.findById(userId).then((user) => {
    if (user.role !== "candidate")
      throw new Error("Only candidates can delete account");
    return User.deleteOne({ candidate: userId, password });
  });
}

module.exports = deleteUser;
