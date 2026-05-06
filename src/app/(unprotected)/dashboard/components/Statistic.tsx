import expenses from "@/app/data/expenses";

export default function Statistic() {
  const totalExpenses = expenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/10 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Gastos
            </p>
            <strong className="mt-3 block text-3xl text-zinc-100">
              {totalExpenses}
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Saidas
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/10 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Receita
            </p>
            <strong className="mt-3 block text-3xl text-zinc-100">
              R$ 45.000,00
            </strong>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-800 px-3 py-1 text-xs font-medium text-indigo-300">
            Entrada
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-xl shadow-black/10 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Lucro
            </p>
            <strong className="mt-3 block text-3xl text-zinc-100">
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
