import api from '@/services/AuthService';

const VISIT_KEY = 'portfolio_visited';

export async function registerVisit() {
  if (localStorage.getItem(VISIT_KEY)) return;

  try {
    await api.get(import.meta.env.VITE_API_VISIT);
    localStorage.setItem(VISIT_KEY, 'true');
  } catch {

  }
}
