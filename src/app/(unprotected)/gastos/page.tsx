import InputInline from "./components/InputInline";
import ExpensesTable from "./components/ExpensesTable";

export default function GastosPage() {
  return (
    <div className="mt-8 rounded-xl bg-gray-800 p-6 text-white shadow">
      <h1 className="mb-4 text-xl font-bold">Gastos</h1>
      <InputInline />
      <div className="mt-8 rounded-xl bg-gray-800 p-6 text-white shadow">
        <ExpensesTable />
      </div>
    </div>
  );
}
