const {
  validators: { validateId, validatePassword },
} = require("commons");
const {
  models: { User, Job },
} = require("data");

function deleteAccount(userId, password) {
  validateId(userId);
  validatePassword(password);

  return Job.deleteMany({ userId }).then(() => {
    return User.deleteOne({ _id: userId, password });
  });
}

module.exports = deleteAccount;
