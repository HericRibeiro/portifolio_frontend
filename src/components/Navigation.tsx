import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projetos
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
            <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-4 text-sm text-gray-300">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <a href="#projects" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
