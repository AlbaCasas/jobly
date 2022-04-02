import { validators } from 'commons/src/index';
const { validateEmail, validatePassword } = validators;

export function authenticateUser(email, password) {
  validateEmail(email);
  validatePassword(password);

  return fetch(`${process.env.REACT_APP_API_HOST}/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    const { status } = res;

    if (status === 200) {
      return res.json().then((payload) => {
        const { token } = payload;

        return token;
      });
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
