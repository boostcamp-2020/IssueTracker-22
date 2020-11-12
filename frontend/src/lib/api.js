const commonOptions = {
  mode: 'cors',
  credentials: 'include',
};

const api = {
  post: (url, data) => {
    const options = {
      ...commonOptions,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return fetch(url, options)
      .then((response) => response.json());
  },
  get: (url) => {
    const options = {
      ...commonOptions,
      method: 'GET',
    };
    return fetch(url, options)
      .then((response) => response.json());
  },
};

export default api;
