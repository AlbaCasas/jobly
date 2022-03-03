const handlerRegister = require("./handlerRegister");
const handlerAuthenticateUser = require("./handlerAuthenticateUser");
const handlerRetrieveUser = require("./handlerRetrieveUser");
const handlerUpdatePassword = require("./handlerUpdatePassword");
const handlerUpdateUser = require("./handlerUpdateUser");
const handlerDeleteAccount = require("./handlerDeleteAccount");
const handlercreateNote = require("./handlerCreateNote");
const handlerListNotes = require("./handlerListNotes");
const handlerListPublicNotes = require("./handlerListPublicNotes");
const handlerRetrieveNote = require("./handlerRetrieveNote");
const handlerUpdateNote = require("./handlerUpdateNote");
const handlerDeleteNote = require("./handlerDeleteNote");
const handlerListPublicNotesFromUser = require("./handlerListPublicNotesFromUser");

module.exports = {
  handlerRegister,
  handlerAuthenticateUser,
  handlerRetrieveUser,
  handlerUpdatePassword,
  handlerUpdateUser,
  handlerDeleteAccount,
  handlercreateNote,
  handlerListNotes,
  handlerListPublicNotes,
  handlerRetrieveNote,
  handlerUpdateNote,
  handlerDeleteNote,
  handlerListPublicNotesFromUser,
};
