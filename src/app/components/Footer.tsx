export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-8 pb-8 pt-4">
      <div className="rounded-xl bg-gray-800 px-6 py-5 shadow text-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
              DevLtda
            </p>
            <p className="mt-1 text-sm text-gray-300">
              Sistema desenvolvido por Gabriel Tavares.
            </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-400">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="text-white">Dashboard ativo</span>
            <span className="hidden md:inline">/</span>
            <span>{year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
