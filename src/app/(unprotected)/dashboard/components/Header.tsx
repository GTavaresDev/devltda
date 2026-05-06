export default function Header() {
  return (
    <header className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-5 shadow-xl shadow-black/10 sm:px-5 md:mb-8 md:px-6 md:py-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        Painel
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 md:text-3xl">
        Dashboard
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Visão geral dos dados da empresa
      </p>
    </header>
  );
}
