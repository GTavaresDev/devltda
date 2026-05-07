"use client";

import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import { useUsers } from "@/app/contexts/users-context";

export default function UsuariosPage() {
  const { users } = useUsers();

  return (
    <div className="page-stack">
      <Header />

      <section className="surface-card section-block text-white">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Gestão
          </p>
          <h1 className="mt-2 text-xl font-bold text-zinc-100">Usuários</h1>
        </div>
        <UsersTable users={users} />
      </section>
    </div>
  );
}
