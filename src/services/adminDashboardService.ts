import axios from 'axios';
import { getToken } from '@/utils/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use(config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export async function getDashboardData() {
  const response = await api.get('/admin/dashboard/data');
  return response.data;
}
