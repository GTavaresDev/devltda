"use client";

import Table from "@/app/components/Table";
import { useUsers } from "@/app/contexts/users-context";

export default function List() {
  const { users } = useUsers();

  return (
    <section className="mt-8 rounded-xl bg-gray-800 p-6 shadow text-white">
      <h3 className="mb-4 text-xl font-bold">Funcionários</h3>
      <Table users={users} />
    </section>
  );
}
