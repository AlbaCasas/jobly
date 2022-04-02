import { validators } from "commons/src/index";
import { validateId } from "commons/src/validators";

const { validateToken, validateString } = validators;

export function updateJob(
  token,
  jobId,
  { title, description, role, location }
) {
  validateToken(token);
  validateId(jobId);
  validateString(title, "title");
  validateString(role, "role");
  validateString(location, "location");

  return fetch(`http://localhost:8000/api/job/${jobId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, role, location }),
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
      throw new Error("server error");
    } else {
      throw new Error("unknown error");
    }
  });
}
