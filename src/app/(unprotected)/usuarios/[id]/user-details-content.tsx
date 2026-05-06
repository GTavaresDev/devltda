"use client";

import { notFound } from "next/navigation";

import { useUsers } from "@/app/contexts/users-context";

import Voltar from "../components/Voltar";

export default function UserDetailsContent({ id }: { id: string }) {
  const { users } = useUsers();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    notFound();
  }

  return (
    <div>
      <Voltar />
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-xl shadow-black/10 text-white sm:p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Perfil
        </p>
        <h1 className="mb-6 mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
          Detalhes do Usuário
        </h1>

        <div className="space-y-4">
          <div className="border-b border-zinc-800 pb-4">
            <p className="text-sm text-zinc-500">ID</p>
            <strong className="mt-1 block text-lg">#{user.id}</strong>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <p className="text-sm text-zinc-500">Nome</p>
            <strong className="mt-1 block text-lg">{user.name}</strong>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <p className="text-sm text-zinc-500">Cargo</p>
            <strong className="mt-1 block text-lg">{user.cargo}</strong>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Salário</p>
            <strong className="mt-1 block text-lg text-indigo-300">
              R$ {user.salary.toLocaleString("pt-BR")}
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}
