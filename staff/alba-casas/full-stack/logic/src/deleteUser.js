const {
  models: { User },
} = require("data");

function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

module.exports = deleteUser;
