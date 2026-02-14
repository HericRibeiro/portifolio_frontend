import { Sparkles, Mail, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/data';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-pink-500/10"/>
          <div className="absolute inset-0 backdrop-blur-3xl"/>
          
          <div className="relative border border-white/10 rounded-3xl p-12 md:p-16 text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10 mb-4">
              <Sparkles className="text-violet-400" size={28}/>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Vamos criar algo <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">incrível</span> juntos?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua equipe.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 break-all text-sm sm:text-base">
                  <Mail size={18}/>
                  {CONTACT_INFO.email}
                </span>
              </a>
              <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Linkedin size={20}/>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};