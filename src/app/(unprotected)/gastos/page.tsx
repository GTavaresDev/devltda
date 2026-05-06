import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const todos = await db.gastos.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center text-zinc-100">
      <div className="w-full max-w-3xl">
        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-6 shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Financeiro
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight">
              Gastos da Empresa
            </h1>
            <p className="mt-2 text-sm text-zinc-400">Gerencie seus gastos</p>
          </div>

          <Link
            href="/gastos/create"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 active:scale-[0.98]"
          >
            + Novo Gasto
          </Link>
        </div>

        <div className="grid gap-4">
          {todos.length > 0 ? (
            todos.map((gasto) => (
              <div
                key={gasto.id}
                className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-sm transition-all hover:border-zinc-700 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                    {gasto.titulo}
                  </h2>
                  <span className="text-[10px] uppercase tracking-wider bg-zinc-800 px-2 py-1 rounded text-zinc-500">
                    ID: {gasto.id.toString().slice(-4)}
                  </span>
                </div>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {gasto.descricao}
                </p>

                <p className="text-zinc-400 leading-relaxed text-sm">
                  {gasto.valor.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900/40 py-20 text-center">
              <p className="text-zinc-500 text-lg">Nenhum gasto encontrado.</p>
              <p className="text-zinc-600 text-sm">
                Que tal começar criando um agora?
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
