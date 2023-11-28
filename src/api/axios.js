import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/';
const instance = axios.create({
  baseURL: BASE_URL,
});
const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer `,
  },
});
// Add a request interceptor
privateAxios.interceptors.request.use(
  function (config) {
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
