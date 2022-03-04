const registerUser = require("./registerUser");
const authenticateUser = require("./authenticateUser");
const retrieveUser = require("./retrieveUser");
const updatePassword = require("./updatePassword");
const updateUser = require("./updateUser");
const deleteAccount = require("./deleteAccount");
const createNote = require("./createNote");
const listNotes = require("./listNotes");
const listPublicNotes = require("./listPublicNotes");
const retrieveNote = require("./retrieveNote");
const updateNote = require("./updateNote");
const deleteNote = require("./deleteNote");
const listPublicNotesFromUser = require("./listPublicNotesFromUser");

module.exports = {
  registerUser,
  authenticateUser,
  retrieveUser,
  updatePassword,
  updateUser,
  deleteAccount,
  createNote,
  listNotes,
  listPublicNotes,
  retrieveNote,
  updateNote,
  deleteNote,
  listPublicNotesFromUser,
};
