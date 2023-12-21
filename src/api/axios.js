import axios from 'axios';

const BASE_URL = 'https://natours-api-com.onrender.com/api/v1/';
// const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
let token;
export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const privateAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const getToken = async () => {
  const res = await axios.get(BASE_URL + 'users/is-logged-in', {
    withCredentials: true,
  });
  token = res.data.token;
};
// Add a request interceptor
privateAxios.interceptors.request.use(
  async function (config) {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
privateAxios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
