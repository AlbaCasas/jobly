export function updateUserPassword(
  token,
  currPassword,
  newPassword,
  retypePassword
) {
  if (newPassword !== retypePassword)
    throw new Error("retyped password doesn't match password");

  return fetch(`${process.env.REACT_APP_API_HOST}/api/users/change-password`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currPassword, newPassword }),
  }).then((res) => {
    const { status } = res;

    if (status === 204) {
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
