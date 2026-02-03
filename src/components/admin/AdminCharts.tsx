import { Visit } from '@/types';

interface AdminChartsProps {
  visits: Visit[];
}

export function AdminCharts({ visits }: AdminChartsProps) {
  return (
    <section className="bg-[#0f1629] p-6 rounded-xl">
      <p className="text-gray-400 text-sm mb-4">
        Gráficos (em construção)
      </p>

      <p className="text-xs text-gray-500">
        Total de registros: {visits.length}
      </p>
    </section>
  );
}
