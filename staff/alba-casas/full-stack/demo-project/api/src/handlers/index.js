const handlerRegister = require("./handlerRegister");
const handlerAuthenticateUser = require("./handlerAuthenticateUser");
const handlerRetrieveUser = require("./handlerRetrieveUser");
const handlerUpdatePassword = require("./handlerUpdatePassword");

module.exports = {
  handlerRegister,
  handlerAuthenticateUser,
  handlerRetrieveUser,
  handlerUpdatePassword,
};
