import Table from "@/app/components/Table";
import users from "@/app/data/users";

export default function List() {
  return (
    <section className="mt-8 rounded-xl bg-gray-800 p-6 shadow text-white">
      <h3 className="mb-4 text-xl font-bold">Funcionários</h3>
      <Table users={users} />
    </section>
  );
}
