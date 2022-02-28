const { models: { User } } = require("data");
const { validators: { validateId, validatePassword }} = require("commons");


async function updateUserPassword( id, { currPassword, newPassword }) {
  validateId(id)
  validatePassword(currPassword)
  validatePassword(newPassword)

  await User.findById(id)
  .then(async (user) => {
    if (user.password === currPassword) {
      await User.updateOne({ _id: id }, { password: newPassword });
    } else throw new Error("Wrong credentials");
  });
}

module.exports = updateUserPassword;
