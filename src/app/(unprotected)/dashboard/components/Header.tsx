export default function Header() {
  return (
    <header className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-6 shadow-xl shadow-black/10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        Painel
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50">
        Dashboard
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        Visão geral dos dados da empresa
      </p>
    </header>
  );
}
