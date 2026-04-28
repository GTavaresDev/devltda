export default function SistemaEmpresa() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Empresa</h1>

        <nav className="flex flex-col gap-4">
          <a className="rounded-lg bg-gray-700 px-4 py-3" href="#">
            Dashboard
          </a>

          <a className="rounded-lg px-4 py-3 hover:bg-gray-700" href="#">
            Usuários
          </a>

          <a className="rounded-lg px-4 py-3 hover:bg-gray-700" href="#">
            Salários
          </a>

          <a className="rounded-lg px-4 py-3 hover:bg-gray-700" href="#">
            Gastos
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="text-gray-500">
            Visão geral dos dados da empresa
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
            <p className="text-gray-400">Gastos da Empresa</p>
            <strong className="mt-2 block text-3xl text-red-400">
              R$ 18.500,00
            </strong>
          </div>

          <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
            <p className="text-gray-400">Receita</p>
            <strong className="mt-2 block text-3xl text-green-400">
              R$ 45.000,00
            </strong>
          </div>

          <div className="rounded-xl bg-gray-800 p-6 shadow text-white">
            <p className="text-gray-400">Lucro</p>
            <strong className="mt-2 block text-3xl text-blue-400">
              R$ 26.500,00
            </strong>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-gray-800 p-6 shadow text-white">
          <h3 className="mb-4 text-xl font-bold">Funcionários</h3>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-3">ID</th>
                <th className="py-3">Nome</th>
                <th className="py-3">Cargo</th>
                <th className="py-3">Salário</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">1</td>
                <td className="py-3">Ana Souza</td>
                <td className="py-3">Desenvolvedora Front-end</td>
                <td className="py-3">R$ 5.500,00</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">2</td>
                <td className="py-3">Carlos Lima</td>
                <td className="py-3">Designer UI/UX</td>
                <td className="py-3">R$ 4.800,00</td>
              </tr>

              <tr>
                <td className="py-3">3</td>
                <td className="py-3">Marina Alves</td>
                <td className="py-3">Gerente de Projetos</td>
                <td className="py-3">R$ 8.200,00</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}