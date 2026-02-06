import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface Props {
  data: { hour: string; visits: number }[];
}

export function VisitsByHourChart({ data }: Props) {
  return (
    <div className="bg-[#0b1224] p-4 rounded-lg h-64">
      <p className="text-sm text-gray-400 mb-2">
        Visits by hour
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="hour" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Bar dataKey="visits" fill="#22d3ee" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
