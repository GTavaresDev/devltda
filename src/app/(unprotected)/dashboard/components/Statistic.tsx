import { db } from "@/db";

export default async function Statistic() {
  const expenses = await db.gastos.findMany();

  const totalExpenses = expenses
    .reduce((total, expense) => total + expense.valor, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className="responsive-grid-3">
      <div className="surface-card section-block text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Gastos
            </p>
            <strong className="mt-3 block break-words text-[clamp(1.5rem,1.2rem+1vw,2.2rem)] text-zinc-100">
              {totalExpenses}
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Saidas
          </span>
        </div>
      </div>

      <div className="surface-card section-block text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Receita
            </p>
            <strong className="mt-3 block break-words text-[clamp(1.5rem,1.2rem+1vw,2.2rem)] text-zinc-100">
              R$ 45.000,00
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Entrada
          </span>
        </div>
      </div>

      <div className="surface-card section-block text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Lucro
            </p>
            <strong className="mt-3 block break-words text-[clamp(1.5rem,1.2rem+1vw,2.2rem)] text-zinc-100">
              R$ 26.500,00
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Saldo
          </span>
        </div>
      </div>
    </section>
  );
}
