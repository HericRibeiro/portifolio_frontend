import { Visit } from '@/types';

interface AdminTableProps {
  visits: Visit[];
}

export function AdminTable({ visits }: AdminTableProps) {
  return (
    <section className="bg-[#0f1629] p-6 rounded-xl overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-2">IP</th>
            <th className="text-left py-2">País</th>
            <th className="text-left py-2">Cidade</th>
            <th className="text-left py-2">Navegador</th>
            <th className="text-left py-2">Data</th>
          </tr>
        </thead>

        <tbody>
          {visits.map((visit, index) => (
            <tr key={index} className="border-t border-white/5">
              <td className="py-2">{visit.ip}</td>
              <td className="py-2">{visit.country ?? '—'}</td>
              <td className="py-2">{visit.city ?? '—'}</td>
              <td className="py-2 truncate max-w-xs">
                {visit.userAgent}
              </td>
              <td className="py-2">
                {new Date(visit.visitedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
