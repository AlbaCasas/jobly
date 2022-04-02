const BLANK_REGEX = /^\s+$/;

export function validateToken(token) {
  if (typeof token !== 'string') throw new TypeError('token is not a string');

  const parts = token.split('.');

  if (parts.length !== 3) throw new Error('token it not valid');

  parts.forEach((part) => {
    if (part === '') throw new Error('token part is empty');
    if (BLANK_REGEX.test(part)) throw new Error('token part is blank');
  });

  const [header, payload] = parts;

  try {
    atob(header);
  } catch (error) {
    throw new Error('token invalid');
  }

  let json;

  try {
    json = atob(payload);
  } catch (error) {
    throw new Error('token invalid');
  }

  const { exp } = JSON.parse(json);

  const expStamp = exp * 1000;

  const expired = Date.now() > expStamp;

  if (expired) {
    delete localStorage.token;
    throw new Error('token expired');
  }
}
