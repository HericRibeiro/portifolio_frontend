import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type Props = {
  onSubmit: (email: string, password: string) => void;
}

export function LoginSection({ onSubmit }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-500 rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 space-y-8">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Bem-vindo de volta
          </h1>
          <p className="text-gray-400 text-sm">
            Faça login para continuar
          </p>
        </div>

        <form
         className="space-y-5"
         onSubmit={(e) => {
          e.preventDefault();
          onSubmit(email, password);
         }}
         >
          
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-400 transition"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha"
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-400 transition"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            {/* <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-violet-500" />
              Lembrar-me
            </label> */}
            {/* <a href="#" className="hover:text-white transition">
              Esqueci a senha
            </a> */}
          </div>

          <button
            type="submit"
            className="group w-full py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
          >
            Entrar
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>

        {/* <p className="text-center text-sm text-gray-400">
          Não tem conta?{' '}
          <a href="#" className="text-violet-400 hover:underline">
            Criar conta
          </a>
        </p> */}
      </div>
    </section>
  );
}
