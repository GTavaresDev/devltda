export default function Header() {
  return (
    <header className="surface-card section-block">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
        Painel
      </p>
      <h2 className="mt-3 text-[clamp(1.75rem,1.45rem+1vw,2.5rem)] font-bold tracking-tight text-zinc-50">
        Dashboard
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
        Visão geral dos dados da empresa
      </p>
    </header>
  );
}
