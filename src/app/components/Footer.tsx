export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 pb-8 pt-4">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/85 px-6 py-5 shadow-xl shadow-black/10 text-zinc-100">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              DevLtda
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Sistema desenvolvido por Gabriel Tavares.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <span className="text-zinc-100">Dashboard ativo</span>
            <span className="hidden md:inline">/</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
