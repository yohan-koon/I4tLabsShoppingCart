//return axios config file

import axios from 'axios';
import { BASE_URL, DEFAULT_API_TIMEOUT } from '../constants/app';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_API_TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // stringify body if it is an object
    console.log({config})
    if (config.data && typeof config.data === 'object') {
      config.data = JSON.stringify(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Do something with response data
//     return response;
//   },
//   (error) => {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;