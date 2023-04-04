import axios from 'axios';

import { auth } from './auth';

const API_URL = process.env.REACT_APP_API_URL;

export const protectedApi = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

protectedApi.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');

  return config;
});

protectedApi.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (!error.config._isRetry) {
      originalRequest._isRetry = true;

      try {
        const { headers } = await auth.get('/refresh');

        localStorage.setItem('token', `Bearer ${headers.authorization}`);
        return protectedApi.request(originalRequest);
      } catch (err) {
        throw new Error('Refresh token has been expired');
      }
    }
  }
);
