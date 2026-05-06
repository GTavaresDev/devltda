import Link from "next/link";
export default function Header() {
  return (
    <header className="mb-8 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-6 shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Colaboradores
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50">
          Lista de Funcionários da Empresa
        </h2>
      </div>

      <Link
        href="/usuarios/create"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
      >
        Adicionar Usuário
      </Link>
    </header>
  );
}
