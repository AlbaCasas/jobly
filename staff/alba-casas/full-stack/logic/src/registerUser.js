const {
  models: { User },
} = require("data");

function registerUser(name, email, password) {
  return User.create({ name, email, password })
}

module.exports = registerUser;
