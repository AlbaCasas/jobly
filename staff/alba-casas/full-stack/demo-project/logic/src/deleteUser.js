const {
  validators: { validateId, validatePassword },
} = require("commons");
const {
  models: { User, Note },
} = require("data");

function deleteUser(userId, password) {
  validateId(userId);
  validatePassword(password);

  return Note.deleteMany({ user: userId })
  .then(() => {
    return User.deleteOne({ id: userId, password });
  });
}

module.exports = deleteUser;
