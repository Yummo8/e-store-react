import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const auth = axios.create({
  baseURL: `${API_URL}/auth`,
  withCredentials: true,
});
