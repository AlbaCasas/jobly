import { validators } from "commons/src/index";
import { validateId } from "commons/src/validators";

const { validateToken } = validators;

export function applyJob(token, jobId) {
  validateToken(token);
  validateId(jobId);

  return fetch(`http://localhost:8000/api/job/apply/${jobId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
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
