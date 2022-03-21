import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.API_KEY}`,
};

export default axios;
