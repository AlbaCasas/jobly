const {
  models: { User },
} = require("data");
const {
  validators: { validateString, validateEmail, validatePassword },
} = require("commons");

function registerCandidate(name, email, password, location, phone) {
  validateString(name);
  validateString(location);
  validateEmail(email);
  validatePassword(password);
  validateString(location);

  const role = "candidate";
  const avatar =
    "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png";
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

module.exports = registerCandidate;
