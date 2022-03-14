import { validators } from "commons";

const { validateString, validateToken } = validators;

export function createJob(token, { title, role, location, description }) {
  validateToken(token);
  validateString(title, "title");
  validateString(role, "role");
  validateString(location, "location");
  validateString(description, "description");

  return fetch("http://localhost:8000/api/job", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, role, location, description }),
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
