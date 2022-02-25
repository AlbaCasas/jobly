const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const BLANK_REGEX = /^\s+$/;
const SPACE_REGEX = /\s/;
const SPACES_AROUND_REGEX = /^\s[aA-zZ]\s?[aA-zZ]|[aA-zZ]\s?[aA-zZ]\s$/;

function validateEmail(email) {
  if (typeof email !== "string") throw new TypeError("email is not a string");
  if (email === "") throw new Error("empty email");
  if (BLANK_REGEX.test(email)) throw new Error("blank email");
  if (!EMAIL_REGEX.test(email)) throw new Error("invalid email");
}

function validatePassword(password, explain = "password") {
  if (typeof password !== "string")
    throw new TypeError(`${explain} is not a string`);
  if (BLANK_REGEX.test(password)) throw new Error(`blank ${explain}`);
  if (SPACE_REGEX.test(password))
    throw new Error(`${explain} has empty spaces`);
  if (password === "") throw new Error(`empty ${explain}`);
  if (password.length < 8)
    throw new Error(`${explain} is shorter than 8 characters`);
}

function validateToken(token) {
  if (typeof token !== "string") throw new TypeError("token is not a string");

  const parts = token.split(".");

  if (parts.length !== 3) throw new Error("token it not valid");

  parts.forEach((part) => {
    if (part === "") throw new Error("token part is empty");
    if (BLANK_REGEX.test(part)) throw new Error("token part is blank");
  });

  const [header, payload] = parts;

  try {
    atob(header);
  } catch (error) {
    throw new Error("token invalid");
  }

  let json;

  try {
    json = atob(payload);
  } catch (error) {
    throw new Error("token invalid");
  }

  const { exp } = JSON.parse(json);

  const expStamp = exp * 1000;

  const expired = Date.now() > expStamp;

  if (expired) throw new Error("token expired");
}

function validateString(string, explain = "string") {
  if (typeof string !== "string")
    throw new TypeError(`${explain} is not a string`);
  if (string === "") throw new Error(`empty ${explain}`);
  if (BLANK_REGEX.test(string)) throw new Error(`blank ${explain}`);
  if (SPACES_AROUND_REGEX.test(string))
    throw new Error(`${explain} has spaces around`);
}

module.exports = {
  validateEmail,
  validatePassword,
  validateToken,
  validateString,
};
