const handlerRegister = require("./handlerRegister");
const handlerAuthenticateUser = require("./handlerAuthenticateUser");
const handlerRetrieveUser = require("./handlerRetrieveUser");
const handlerUpdatePassword = require("./handlerUpdatePassword");
const handlerUpdateUser = require("./handlerUpdateUser");
const handlerDeleteAccount = require("./handlerDeleteAccount");

module.exports = {
  handlerRegister,
  handlerAuthenticateUser,
  handlerRetrieveUser,
  handlerUpdatePassword,
  handlerUpdateUser,
  handlerDeleteAccount,
};
