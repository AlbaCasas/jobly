const {
  models: { User },
} = require("../data");
const {
  validators: {
    validateString,
    validatePhone,
    validateEmail,
    validatePassword,
  },
} = require("commons");

function registerCompany(name, email, password, location, phone) {
  validateString(name);
  validateString(location);
  validateEmail(email);
  validatePassword(password);
  validateString(location);
  validatePhone(phone);

  const role = "company";
  const avatar =
    "https://humanoz.com/wp-content/uploads/2019/10/deafult-profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png";
  return User.create({
    name,
    email,
    password,
    location,
    phone,
    role,
    avatar,
  }).then((user) => {});
}

module.exports = registerCompany;
