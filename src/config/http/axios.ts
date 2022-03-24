import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
};
axios.interceptors.request.use(
  config => {
    const params = {
      ...config.params,
      publicationState: process.env.REACT_APP_API_MODE ? 'preview' : undefined,
    };

    return { ...config, params };
  },
  error => Promise.reject(error),
);

export default axios;
