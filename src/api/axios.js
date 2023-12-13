import axios from 'axios';

// const BASE_URL = 'https://natours-api-com.onrender.com/api/v1/';
const BASE_URL = 'http://127.0.0.1:3000/api/v1/';
let store;

export const injectStore = (_store) => {
  store = _store;
};

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
export const privateAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Add a request interceptor
privateAxios.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.token;
    console.log(token);
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
