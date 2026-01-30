import axios from 'axios';
import { getToken } from '@/utils/auth';

const api = axios.create({
  baseURL: 'http://localhost:9090',
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
// Validar esse arquivo, no atual momento estou morrendo de sono e não to raciocinando direito