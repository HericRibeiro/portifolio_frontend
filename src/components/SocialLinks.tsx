import type { SocialLink } from '@/types';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex gap-4 justify-center pt-12">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <a 
            key={link.name}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110"
          >
            <IconComponent size={20}/>
          </a>
        );
      })}
    </div>
  );
};