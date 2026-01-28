import type { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const IconComponent = skill.icon;
  
  return (
    <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
      <div className="space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <IconComponent size={28} className="text-violet-400"/>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
          <div className="space-y-2">
            {skill.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400"/>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"/>
    </div>
  );
};