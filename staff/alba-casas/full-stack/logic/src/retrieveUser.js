const {models: { User }} = require("data");

function retrieveUser(id) {
  return User.findById(id).then((user) => user);
}

module.exports = retrieveUser;
