import { Visit } from '@/types';

export function groupVisitsByDay(visits: Visit[]) {
  const map: Record<string, number> = {};

  visits.forEach(visit => {
    const day = new Date(visit.visitedAt)
      .toLocaleDateString('pt-BR', { weekday: 'short' });

    map[day] = (map[day] || 0) + 1;
  });

  return Object.entries(map).map(([day, visits]) => ({
    day,
    visits
  }));
}

export function groupVisitsByHour(visits: Visit[]) {
  const hours = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}h`,
    visits: 0
  }));

  visits.forEach(visit => {
    const hour = new Date(visit.visitedAt).getHours();
    hours[hour].visits += 1;
  });

  return hours;
}
