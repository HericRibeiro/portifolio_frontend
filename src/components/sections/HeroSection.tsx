import { ArrowUpRight } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { ScrollIndicator } from '@/components/ScrollIndicator';
import { SOCIAL_LINKS } from '@/constants/data';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"/>
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}/>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '4s' }}/>
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
          <span className="text-sm text-gray-400">Disponível para trabalho</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          <span className="block text-gray-400 text-3xl md:text-4xl mb-4 font-normal">Olá, eu sou</span>
          <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Heric Willian
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Desenvolvedor Backend Java - Criando solução completas, escaláveis e seguras
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <a 
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Projetos
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18}/>
            </span>
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 backdrop-blur-sm transition-all"
          >
            Entre em Contato
          </a>
        </div>

        <SocialLinks links={SOCIAL_LINKS} />
      </div>

      <ScrollIndicator />
    </section>
  );
};