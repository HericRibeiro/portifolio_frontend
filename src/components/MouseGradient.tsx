import type { MousePosition } from '@/types';

interface MouseGradientProps {
  mousePosition: MousePosition;
}

export const MouseGradient = ({ mousePosition }: MouseGradientProps) => {
  return (
    <div 
      className="fixed w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none transition-all duration-700 ease-out"
      style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 100%)',
        left: mousePosition.x - 300,
        top: mousePosition.y - 300,
      }}
    />
  );
};