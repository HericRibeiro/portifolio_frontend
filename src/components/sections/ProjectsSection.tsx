import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/constants/data';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            Projetos em <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">Destaque</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Uma seleção dos meus melhores trabalhos, cada um com seu próprio desafio e solução única
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};