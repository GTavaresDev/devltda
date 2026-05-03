import Link from "next/link";
export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Lista de Funcionarios da empresa</h2>

      <Link
        href="/usuarios/create"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Adicionar Usuário
      </Link>
    </header>
  );
}
