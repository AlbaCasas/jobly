const client = (url, { body, method, headers }) => {
  fetch(`${process.env.API_HOST}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  }).then((res) => {
    const { status } = res;

    if (status >= 200 && status < 300) {
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
};

export default client;
