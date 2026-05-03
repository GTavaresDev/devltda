import users from "@/app/data/users";
import Header from "./components/Header";
import UsersTable from "./components/UsersTable";

export default function UsuariosPage() {
  return (
    <div>
      <Header />
      <section className="mt-8 rounded-xl bg-gray-800 p-6 shadow text-white">
        <h3 className="mb-4 text-xl font-bold">Usuários</h3>
        <UsersTable users={users} />
      </section>
    </div>
  );
}
