"use client";

import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import { useUsers } from "@/app/contexts/users-context";

export default function UsuariosPage() {
  const { users } = useUsers();

  return (
    <div>
      <Header />

      <section className="mt-8 rounded-xl bg-gray-800 p-6 text-white shadow">
        <h1 className="mb-4 text-xl font-bold">Usuários</h1>
        <UsersTable users={users} />
      </section>
    </div>
  );
}
