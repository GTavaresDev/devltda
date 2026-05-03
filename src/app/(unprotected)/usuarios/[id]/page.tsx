import { notFound } from "next/navigation";

import users from "@/app/data/users";
import Voltar from "../components/Voltar";

interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    notFound();
  }

  return (
    <div>
      <Voltar />
      <section className="rounded-xl bg-gray-800 p-6 shadow text-white">
        <h1 className="mb-6 text-2xl font-bold">Detalhes do Usuário</h1>

        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <p className="text-sm text-gray-400">ID</p>
            <strong className="mt-1 block text-lg">#{user.id}</strong>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <p className="text-sm text-gray-400">Nome</p>
            <strong className="mt-1 block text-lg">{user.name}</strong>
          </div>

          <div className="border-b border-gray-700 pb-4">
            <p className="text-sm text-gray-400">Cargo</p>
            <strong className="mt-1 block text-lg">{user.cargo}</strong>
          </div>

          <div>
            <p className="text-sm text-gray-400">Salário</p>
            <strong className="mt-1 block text-lg text-green-400">
              R$ {user.salary.toLocaleString("pt-BR")}
            </strong>
          </div>
        </div>
      </section>
    </div>
  );
}
