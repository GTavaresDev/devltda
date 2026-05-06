"use client";

import Header from "./components/Header";
import UsersTable from "./components/UsersTable";
import { useUsers } from "@/app/contexts/users-context";

export default function UsuariosPage() {
  const { users } = useUsers();

  return (
    <div>
      <Header />

      <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 text-white shadow-xl shadow-black/10">
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
