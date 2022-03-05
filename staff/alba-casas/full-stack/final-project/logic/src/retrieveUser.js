const { models: { User }} = require("data");
const { validators: { validateId }} = require("commons");
function retrieveUser(id) {
  validateId(id);
  return User.findById(id).then((user) => {
    const doc = user._doc;


    delete doc._id;
    delete doc.password;
    delete doc.creditCards;
    delete doc.__v;

    return doc;
  });
}

module.exports = retrieveUser;
