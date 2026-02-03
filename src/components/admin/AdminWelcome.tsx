export function AdminWelcome() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
      <h1 className="text-3xl font-semibold">
        Bem-vindo, <span className="text-purple-400">Heric</span>
      </h1>

      <p className="mt-3 text-white/60 max-w-xl">
        Área administrativa do portfólio.  
        Aqui você acompanha acessos, métricas e segurança da aplicação.
      </p>
    </div>
  );
}
