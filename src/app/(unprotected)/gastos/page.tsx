import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const todos = await db.gastos.findMany();

  return (
    <main className="page-stack text-zinc-100">
      <div className="surface-card section-block flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Financeiro
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,1.45rem+1vw,2.5rem)] font-extrabold tracking-tight">
            Gastos da Empresa
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
            Gerencie seus gastos
          </p>
        </div>

        <Link
          href="/gastos/create"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98] sm:w-auto"
        >
          + Novo Gasto
        </Link>
      </div>

      <div className="responsive-grid-2">
        {todos.length > 0 ? (
          todos.map((gasto) => (
            <div
              key={gasto.id}
              className="group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-sm transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-black/10 sm:p-5"
            >
              <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="break-words text-lg font-semibold text-zinc-100 transition-colors group-hover:text-indigo-400">
                  {gasto.titulo}
                </h2>
                <span className="w-fit rounded bg-zinc-800 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500">
                  ID: {gasto.id.toString().slice(-4)}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-zinc-400">
                {gasto.descricao}
              </p>

              <p className="mt-4 text-sm font-semibold leading-relaxed text-indigo-200">
                {gasto.valor.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          ))
        ) : (
          <div className="surface-card rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900/40 px-4 py-16 text-center sm:px-6 sm:py-20 md:col-span-2">
            <p className="text-lg text-zinc-500">Nenhum gasto encontrado.</p>
            <p className="text-sm text-zinc-600">
              Que tal começar criando um agora?
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
