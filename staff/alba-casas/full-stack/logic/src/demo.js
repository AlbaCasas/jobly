const {
  mongoose: { connect, disconnect },
  models: { User },
} = require("data");

const {
  deleteUser,
  authenticateUser,
  updateUser,
  registerUser,
} = require("./index");
const updateUserPassword = require("./updateUserPassword");

connect("mongodb://localhost:27017/demo-db")
  /*  .then(() => registerUser("Pepito Grillo", "pepito@grillo.com", "123123123"))
  .then(() => console.log("user registered")) */

  .then(() => authenticateUser("pepito@grillo.com", "123123123"))

  /* .then((id) =>
    updateUserPassword(id, {
      currPassword: "234234234",
      newPassword: "123123123",
    })
  )
  .then(() => console.log("Password updated"))
 */
  /* .then((userId) => deleteUser(userId)) */
  .then((userId) => {
    return updateUser(userId, {
      name: "Pepita Grilla",
      email: "pepita@grilla.com",
    });
  })
  .then(() => console.log("User updated"))

  .catch((error) => console.error(error.message))
  .then(() => disconnect());
