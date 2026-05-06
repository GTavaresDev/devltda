import Link from "next/link";
export default function Header() {
  return (
    <header className="mb-6 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-5 shadow-xl shadow-black/10 sm:px-5 md:mb-8 md:flex-row md:items-center md:justify-between md:px-6 md:py-6">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Colaboradores
        </p>
        <h2 className="mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
          Lista de Funcionários da Empresa
        </h2>
      </div>

      <Link
        href="/usuarios/create"
        className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98] md:w-auto"
      >
        Adicionar Usuário
      </Link>
    </header>
  );
}
