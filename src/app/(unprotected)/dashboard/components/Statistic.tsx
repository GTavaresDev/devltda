import { getExpenseSummary } from "@/app/data/expenses";

export default async function Statistic() {
  const summary = await getExpenseSummary();

  const totalExpenses = summary.totalExpenses.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const totalRevenue = summary.totalRevenue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const totalProfit = summary.totalProfit.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-xl shadow-black/10 text-white sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Gastos
            </p>
            <strong className="mt-3 block break-words text-2xl text-zinc-100 md:text-3xl">
              {totalExpenses}
            </strong>
            <p className="mt-2 text-xs text-zinc-500">
              {summary.totalCount} lançamentos no banco
            </p>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Saidas
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-xl shadow-black/10 text-white sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Receita
            </p>
            <strong className="mt-3 block break-words text-2xl text-zinc-100 md:text-3xl">
              {totalRevenue}
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Entrada
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-xl shadow-black/10 text-white sm:p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Lucro
            </p>
            <strong className="mt-3 block break-words text-2xl text-zinc-100 md:text-3xl">
              {totalProfit}
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
