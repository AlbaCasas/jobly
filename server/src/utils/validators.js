const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[0-9 ]+$/;
const BLANK_REGEX = /^\s+$/;
const SPACE_REGEX = /\s/;
const SPACES_AROUND_REGEX = /^\s[aA-zZ]\s?[aA-zZ]|[aA-zZ]\s?[aA-zZ]\s$/;

function validateEmail(email) {
  if (typeof email !== 'string') throw new TypeError('email is not a string');
  if (email === '') throw new Error('empty email');
  if (BLANK_REGEX.test(email)) throw new Error('blank email');
  if (!EMAIL_REGEX.test(email)) throw new Error('invalid email');
}

function validatePhone(phone) {
  if (typeof phone !== 'string') throw new TypeError('phone is not a tel');
  if (phone === '') throw new Error('empty phone');
  if (BLANK_REGEX.test(phone)) throw new Error('blank phone');
  if (!PHONE_REGEX.test(phone)) throw new Error('invalid phone');
}

function validatePassword(password, explain = 'password') {
  if (typeof password !== 'string')
    throw new TypeError(`${explain} is not a string`);
  if (BLANK_REGEX.test(password)) throw new Error(`blank ${explain}`);
  if (SPACE_REGEX.test(password))
    throw new Error(`${explain} has empty spaces`);
  if (password === '') throw new Error(`empty ${explain}`);
  if (password.length < 8)
    throw new Error(`${explain} is shorter than 8 characters`);
}

function validateString(string, explain = 'string') {
  if (typeof string !== 'string')
    throw new TypeError(`${explain} is not a string`);
  if (string === '') throw new Error(`empty ${explain}`);
  if (BLANK_REGEX.test(string)) throw new Error(`blank ${explain}`);
  if (SPACES_AROUND_REGEX.test(string))
    throw new Error(`${explain} has spaces around`);
}

function validateId(id, explain = 'string') {
  validateString(id, explain);

  if (id.length !== 24) throw new Error(`wrong ${explain} length`);
}

function validateBoolean(boolean, explain = 'boolean') {
  if (typeof boolean !== 'boolean')
    throw new TypeError(`${explain} is not a boolean`);
}
module.exports = {
  validateEmail,
  validatePassword,
  validateString,
  validateId,
  validateBoolean,
  validatePhone,
};
