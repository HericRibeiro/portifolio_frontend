import { ShieldCheck } from 'lucide-react';

export default function Admin() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center space-y-6">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10">
          <ShieldCheck size={32} className="text-violet-400" />
        </div>

        <h1 className="text-4xl font-bold">
          Bem-vindo,{" "}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Admin
          </span>
        </h1>

        <p className="text-gray-400">
          Área administrativa do portfólio.  
          Em breve aqui você terá métricas, gerenciamento e controle total.
        </p>
      </div>
    </section>
  );
}
