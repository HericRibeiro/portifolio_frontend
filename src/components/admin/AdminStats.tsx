interface AdminStatsProps {
  totalVisits: number;
  uniqueVisitsToday: number;
}

export function AdminStats({
  totalVisits,
  uniqueVisitsToday,
}: AdminStatsProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-[#0f1629] p-6 rounded-xl">
        <p className="text-sm text-gray-400">Total de visitas</p>
        <p className="text-3xl font-bold">{totalVisits}</p>
      </div>

      <div className="bg-[#0f1629] p-6 rounded-xl">
        <p className="text-sm text-gray-400">Visitas únicas hoje</p>
        <p className="text-3xl font-bold">{uniqueVisitsToday}</p>
      </div>
    </section>
  );
}
