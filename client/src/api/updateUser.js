import { validators } from 'commons/src/index';

const { validateToken, validateString, validateEmail, validatePhone } =
  validators;

export function updateUser(token, name, email, phone, location, avatar) {
  validateToken(token);
  validateString(name);
  validateEmail(email);
  validateString(location);
  validatePhone(phone);

  return fetch(`${process.env.REACT_APP_API_HOST}/api/users`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone, location, avatar }),
  }).then((res) => {
    const { status } = res;

    if (status >= 200 && status < 300) {
      return;
    } else if (status >= 400 && status < 500) {
      return res.json().then((payload) => {
        const { error } = payload;

        throw new Error(error);
      });
    } else if (status >= 500) {
      throw new Error('server error');
    } else {
      throw new Error('unknown error');
    }
  });
}
