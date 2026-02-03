import { Link } from 'react-router-dom';

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Título */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-wide">
            <span className="text-purple-400">Admin</span>
            <span className="text-white/70">Panel</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <span className="cursor-default">Dashboard</span>
          <span className="cursor-default">Relatórios</span>
          <span className="cursor-default">Acessos</span>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Voltar ao site
          </Link>

          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-semibold text-sm">
            A
          </div>
        </div>

      </div>
    </header>
  );
}
