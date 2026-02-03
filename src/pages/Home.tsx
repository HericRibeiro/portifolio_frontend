import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';
import { registerVisit } from '@/utils/visit';

export default function Home() {
    useEffect(() => {
      (async () => {
        try {
          await registerVisit();
        } catch {

        }
      })();
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