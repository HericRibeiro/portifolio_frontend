import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          <div className="flex gap-8 text-sm">
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
            Home
            </Link>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projetos</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a>
            <Link
              to="/login"
              className="text-gray-400 hover:text-white transition-colors"
            > Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};