import { validators } from"commons/src/index";

const { validateToken } = validators;

function retrieveUser(token) {
  validateToken(token);

  return fetch("http://localhost:8080/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    const { status } = res;

    if (status === 200) {
      return res.json();
    } else if (status >= 400 && status < 500) {
      return res.json().then((payload) => {
        const { error } = payload;

        throw new Error(error);
      });
    } else if (status >= 500) {
      throw new Error("server error");
    } else {
      throw new Error("unknown error");
    }
  });
}

export default retrieveUser;
