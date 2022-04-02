import { validators } from 'commons';

const { validateString, validateEmail, validatePhone, validatePassword } =
  validators;

export function registerCompany(name, email, password, location, phone) {
  validateString(name);
  validateEmail(email);
  validatePassword(password);
  validateString(location);
  validatePhone(phone);

  return fetch(`${process.env.REACT_APP_API_HOST}/api/company`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, location, phone }),
  }).then((res) => {
    const { status } = res;

    if (status === 201) {
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
