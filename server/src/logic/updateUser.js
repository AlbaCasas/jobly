const {
  models: { User },
} = require('../data');
const {
  validators: { validateEmail, validateId, validateString, validatePhone },
} = require('commons');

function updateUser(id, { name, email, phone, location, avatar }) {
  validateId(id);
  validateString(location);
  validatePhone(phone);
  validateEmail(email);
  validateString(name);

  return User.updateOne(
    { _id: id },
    { name, email, phone, location, avatar }
  ).then((result) => {
    if (result.matchedCount === 0)
      throw new Error(`user with id ${id} does not exist`);
  });
}

module.exports = updateUser;
