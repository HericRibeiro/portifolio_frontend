import { useEffect, useState } from 'react';
import { getDashboardData } from '@/services/adminDashboardService';
import { Visit } from '@/types';

interface DashboardData {
  totalVisits: number;
  uniqueVisitsToday: number;
  visits: Visit[];
}

export function useAdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const response = await getDashboardData();
        setData(response);
      } catch (err) {
        console.error('Dashboard error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    data,
    loading,
    error
  };
}
