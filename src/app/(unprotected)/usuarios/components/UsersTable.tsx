import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import ViewDetailButton from "./ViewDetailButton";

export default function UsersTable(props: {
  users: { id: number; name: string; cargo: string; salary: number }[];
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Salário</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell className="font-medium text-zinc-100">
              {user.name}
            </TableCell>
            <TableCell>{user.cargo}</TableCell>
            <TableCell>R$ {user.salary.toLocaleString("pt-BR")}</TableCell>
            <TableCell>
              <ViewDetailButton userId={user.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
