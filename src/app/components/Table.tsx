export default function Table(props: {
  users: { id: number; name: string; cargo: string; salary: number }[];
}) {
  return (
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
        {props.users.map((user) => (
          <tr key={user.id} className="border-b hover:bg-gray-700">
            <td className="py-3">{user.id}</td>
            <td className="py-3">{user.name}</td>
            <td className="py-3">{user.cargo}</td>
            <td className="py-3">R$ {user.salary.toLocaleString("pt-BR")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
