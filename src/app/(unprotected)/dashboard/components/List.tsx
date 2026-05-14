import Table from "@/app/components/Table";
import { getUsers } from "@/app/data/users";

export default async function List() {
  const users = await getUsers();

  return (
    <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-xl shadow-black/10 text-white sm:p-5 md:mt-8 md:p-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Pessoas
        </p>
        <h3 className="mt-2 text-xl font-bold text-zinc-100">Funcionários</h3>
      </div>
      <Table users={users} />
    </section>
  );
}
