import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { registerVisit } from '@/utils/visit';

export default function Home() {
    useEffect(() => {
    registerVisit();
  }, []);

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
// Validar esse arquivo, no atual momento estou morrendo de sono e não to raciocinando direito
// Certeza que esse método não deve ser colocado aqui, já que esse arquivo está apenas orquestrando..