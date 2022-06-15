import axios from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../config';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(window.localStorage.getItem('user') || null);

  const requestConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: user.auth && `Bearer ${user.auth.token}`,
    },
  };

  return requestConfig;
}, (error) => Promise.reject(error));

api.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default {
  get: async (...params) => api.get(...params),
  post: async (...params) => api.post(...params),
};
