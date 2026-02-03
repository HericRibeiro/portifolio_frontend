import { getToken } from '@/utils/auth';

const API_URL = import.meta.env.VITE_API_URL;

export async function getDashboardData() {
  const token = getToken();

  if (!token) {
    throw new Error('Token inválido ou expirado');
  }

  const response = await fetch(`${API_URL}/admin/dashboard/data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar dashboard');
  }

  return response.json();
}
