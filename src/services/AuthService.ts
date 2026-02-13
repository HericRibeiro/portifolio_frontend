import axios from 'axios';
import { getToken } from '@/utils/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;


export type LoginPayload = {
  mail: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const response = await api.post('/auth/login', payload);
  return response.data;
}
