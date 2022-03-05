const {
  models: { User },
} = require("data");
const {
  validators: { validateString, validateEmail, validatePassword },
} = require("commons");

function registerCompany(name, email, password, location, phone) {
  validateString(name);
  validateString(location);
  validateEmail(email);
  validatePassword(password);
  validateString(location);

  const role = "company";
  return User.create({
    name,
    email,
    password,
    location,
    phone,
    role,
  }).then((user) => {});
}

module.exports = registerCompany;
