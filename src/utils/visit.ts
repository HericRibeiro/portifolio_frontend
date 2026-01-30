import api from '@/services/AuthService';

const VISIT_KEY = 'portfolio_visited';

export async function registerVisit() {
  if (localStorage.getItem(VISIT_KEY)) return;

  try {
    await api.get('/user/visit');
    localStorage.setItem(VISIT_KEY, 'true');
  } catch {
    // falhou? não quebra o site
  }
}

// Validar esse arquivo, no atual momento estou morrendo de sono e não to raciocinando direito