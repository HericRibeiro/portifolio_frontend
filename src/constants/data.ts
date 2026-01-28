import { Github, Linkedin, Mail, Code, Palette, Database, Cpu } from 'lucide-react';
import type { Project, Skill, SocialLink } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa com processamento de pagamentos, gestão de inventário em tempo real e painel administrativo avançado.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "AI-Powered Analytics",
    description: "Dashboard de análise de dados com machine learning para predições e insights em tempo real com visualizações interativas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Social Media App",
    description: "Aplicativo social com feed em tempo real, stories, mensagens instantâneas e sistema de recomendação personalizado.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React Native", "Firebase", "Redux", "WebSocket"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Cloud Infrastructure",
    description: "Arquitetura serverless escalável com CI/CD automatizado, monitoramento e auto-scaling para alta disponibilidade.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export const SKILLS: Skill[] = [
  { name: "Frontend", icon: Palette, items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { name: "Backend", icon: Database, items: ["Java", "Spring", "PostgreSQL", "Python", "Node.js"] },
  { name: "DevOps", icon: Cpu, items: ["Docker", "AWS", "CI/CD", "Linux"] },
  { name: "Tools", icon: Code, items: ["Git", "VSCode", "Figma", "Postman"] }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/HericRibeiro',
    icon: Github
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/heric-willian-5b78722a3/',
    icon: Linkedin
  },
  {
    name: 'Email',
    href: 'mailto:hericwillianpatrick@gmail.com',
    icon: Mail
  }
];

export const CONTACT_INFO = {
  email: 'hericwillianpatrick@gmail.com',
  linkedin: 'https://www.linkedin.com/in/heric-willian-5b78722a3/'
};