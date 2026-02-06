import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface Props {
  data: { day: string; visits: number }[];
}

export function VisitsLineChart({ data }: Props) {
  return (
    <div className="bg-[#0b1224] p-4 rounded-lg h-64">
      <p className="text-sm text-gray-400 mb-2">
        Visits per day
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#38bdf8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
