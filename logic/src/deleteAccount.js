const {
  validators: { validateId, validatePassword },
} = require("commons");
const {
  models: { User, Job },
} = require("data");

function deleteAccount(userId, password) {
  validateId(userId);
  validatePassword(password);

  return User.findById(userId).then((user) => {
    if (user.password !== password) throw new Error("Wrong credentials");
    return Job.deleteMany({ company: userId }).then(() => {
      return User.deleteOne({ _id: userId, password });
    });
  });
}

module.exports = deleteAccount;
