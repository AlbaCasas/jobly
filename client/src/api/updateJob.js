import { validateToken } from "./validators/validateToken";

export function updateJob(
  token,
  jobId,
  { title, description, role, location }
) {
  validateToken(localStorage.token);
  return fetch(`${process.env.REACT_APP_API_HOST}/api/job/${jobId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
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
      throw new Error('server error');
    } else {
      throw new Error('unknown error');
    }
  });
}
