import { validators } from 'commons/src/index';

const { validateToken } = validators;

export function listJobs(token, { title, location, role, company }) {
  validateToken(token);
  const query = new URLSearchParams({
    ...(title && { title }),
    ...(location && { location }),
    ...(role && { role }),
    ...(company && { company }),
  });

  return fetch(`http://localhost:8000/api/job?${query}`, {
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
      throw new Error('server error');
    } else {
      throw new Error('unknown error');
    }
  });
}
