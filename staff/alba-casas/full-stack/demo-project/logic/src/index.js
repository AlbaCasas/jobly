const registerUser = require("./registerUser");
const authenticateUser = require("./authenticateUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");
const retrieveUser = require("./retrieveUser");
const updateUserPassword = require("./updateUserPassword");
const createNote = require("./createNote");
const listNotes = require("./listNotes");
const deleteNote = require("./deleteNote");

module.exports = {
  registerUser,
  authenticateUser,
  updateUser,
  deleteUser,
  retrieveUser,
  updateUserPassword,
  createNote,
  listNotes,
  deleteNote,
};
