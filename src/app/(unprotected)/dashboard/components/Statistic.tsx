import expenses from "@/app/data/expenses";

export default function Statistic() {
  const totalExpenses = expenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

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
              R$ 45.000,00
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
