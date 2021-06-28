import axios from 'axios';
import { BASE_URL } from '../config';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-undef
  const user = JSON.parse(window.localStorage.getItem('user') || null);

  const requestConfig = {
    ...config,
    headers: {
      Authentication: user.auth && `Bearer ${user.auth.token}`,
      'Content-Type': 'application/json',
    },
  };

  return requestConfig;
}, (error) => Promise.reject(error));

api.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default {
  get: async (...params) => api.get(...params),
  post: async (...params) => api.post(...params),
};
