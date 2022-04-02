const { models: { User }} = require("../data");
const { validators: { validateId, validatePassword }} = require("commons");

function updateUserPassword({ id, currPassword, newPassword }) {
  validateId(id);
  validatePassword(currPassword);
  validatePassword(newPassword);

  return User.findById(id).then((user) => {
    if (user.password === currPassword) {
      return User.updateOne({ _id: id }, { password: newPassword }).then(
        () => {}
      );
    } else throw new Error("Wrong credentials");
  });
}

module.exports = updateUserPassword;
