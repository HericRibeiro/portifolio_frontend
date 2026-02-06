import { AdminWelcome } from '@/components/admin/AdminWelcome';
import { AdminStats } from '@/components/admin/AdminStats';
import { AdminCharts } from '@/components/admin/AdminCharts';
import { AdminTable } from '@/components/admin/AdminTable';
import { useAdminDashboard } from '@/hooks/useAdminDashboard';

export default function Admin() {
  const { data, loading, error } = useAdminDashboard();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading dashboard...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        Failed to load dashboard
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f1a] to-black text-white">
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <AdminWelcome />

        <AdminStats
          totalVisits={data.totalVisits}
          uniqueVisitsToday={data.uniqueVisitsToday}
        />

        <AdminCharts visits={data.visits} />

        <AdminTable visits={data.visits} />
      </main>
    </div>
  );
}
