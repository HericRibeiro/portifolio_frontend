import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
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