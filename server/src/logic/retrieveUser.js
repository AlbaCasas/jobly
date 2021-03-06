const {
  models: { User },
} = require('../data');
const {
  validators: { validateId },
} = require('../utils');
function retrieveUser(id) {
  validateId(id);
  return User.findById(id).then((user) => {
    const doc = user._doc;

    doc.id = doc._id.toString();
    delete doc._id;
    delete doc.password;
    delete doc.__v;

    return doc;
  });
}

module.exports = retrieveUser;
