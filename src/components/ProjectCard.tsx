import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay z-10`}/>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-20"/>
      </div>

      <div className="relative p-8 space-y-4 -mt-20 z-30">
        <h3 className="text-3xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
          {project.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-4">
          <a 
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all"
          >
            Ver Projeto
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </a>
        </div>
      </div>

      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.color} blur-xl -z-10`}/>
    </div>
  );
};