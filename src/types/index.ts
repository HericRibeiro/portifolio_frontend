import type { LucideIcon } from 'lucide-react';

export interface CodeFile {
  name: string;
  language: string;
  content: string;
}

export interface CodeFolder {
  name: string;
  files: CodeFile[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  structure?: CodeFolder[];
}


export interface Skill {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface Visit {
  ip: string;
  country: string | null;
  city: string | null;
  userAgent: string;
  visitedAt: string;
}

export interface DashboardData {
  totalVisits: number;
  uniqueVisitsToday: number;
  visits: Visit[];
}
