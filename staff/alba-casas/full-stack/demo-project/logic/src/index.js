const registerUser = require("./registerUser");
const authenticateUser = require("./authenticateUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const retrieveUser = require("./retrieveUser");
const updateUserPassword = require("./updateUserPassword");

module.exports = {
  registerUser,
  authenticateUser,
  updateUser,
  deleteUser,
  retrieveUser,
  updateUserPassword,
};
