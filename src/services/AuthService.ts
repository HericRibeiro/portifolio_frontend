import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9090',
});

export type LoginPayload = {
  mail: string;
  password: string;
};

export async function login(payload: LoginPayload) {
  const response = await api.post('/auth/login', payload);
  return response.data;
}
