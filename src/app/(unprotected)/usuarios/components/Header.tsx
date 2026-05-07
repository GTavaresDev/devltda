import Link from "next/link";
export default function Header() {
  return (
    <header className="surface-card section-block flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          Colaboradores
        </p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.5rem,1.15rem+1vw,2.3rem)] font-bold tracking-tight text-zinc-50">
          Lista de Funcionários da Empresa
        </h2>
      </div>

      <Link
        href="/usuarios/create"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98] sm:w-auto"
      >
        Adicionar Usuário
      </Link>
    </header>
  );
}
