import { useMousePosition } from '@/hooks/useMousePosition';
import { Navigation } from '@/components/Navigation';
import { MouseGradient } from '@/components/MouseGradient';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <MouseGradient mousePosition={mousePosition} />

      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay noise-overlay" />

      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;