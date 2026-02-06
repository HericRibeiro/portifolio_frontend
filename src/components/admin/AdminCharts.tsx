import { Visit } from '@/types';
import { VisitsLineChart } from './charts/VisitsLineChart';
import { VisitsByHourChart } from './charts/VisitsByHourChat';
import {
  groupVisitsByDay,
  groupVisitsByHour
} from './charts/chartUtils';

interface AdminChartsProps {
  visits: Visit[];
}

export function AdminCharts({ visits }: AdminChartsProps) {
  const visitsByDay = groupVisitsByDay(visits);
  const visitsByHour = groupVisitsByHour(visits);

  return (
    <section className="bg-[#0f1629] p-6 rounded-xl space-y-6">
      <p className="text-gray-400 text-sm">
        Analytics overview
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VisitsLineChart data={visitsByDay} />
        <VisitsByHourChart data={visitsByHour} />
      </div>

      <p className="text-xs text-gray-500">
        Total records: {visits.length}
      </p>
    </section>
  );
}
