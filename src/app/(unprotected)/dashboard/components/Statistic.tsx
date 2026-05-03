import expenses from "@/app/data/expenses";

export default function Statistic() {
  const totalExpenses = expenses
    .reduce((total, expense) => total + expense.amount, 0)
    .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              Gastos
            </p>
            <strong className="mt-3 block text-3xl text-red-400">
              {totalExpenses}
            </strong>
          </div>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-red-400">
            Saidas
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              Receita
            </p>
            <strong className="mt-3 block text-3xl text-green-400">
              R$ 45.000,00
            </strong>
          </div>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-green-400">
            Entrada
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              Lucro
            </p>
            <strong className="mt-3 block text-3xl text-blue-400">
              R$ 26.500,00
            </strong>
          </div>
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-blue-400">
            Saldo
          </span>
        </div>
      </div>
    </section>
  );
}
