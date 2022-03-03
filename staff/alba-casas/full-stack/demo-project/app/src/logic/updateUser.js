import { validators } from "commons";

const { validateToken, validateString, validateEmail } = validators;

function updateUser(token, name, email) {
  validateToken(token);
  validateString(name);
  validateEmail(email);

  return fetch("http://localhost:8080/api/users", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
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
      throw new Error("server error");
    } else {
      throw new Error("unknown error");
    }
  });
}

export default updateUser;
