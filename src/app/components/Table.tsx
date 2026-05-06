import {
  Table as UITable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Table(props: {
  users: { id: number; name: string; cargo: string; salary: number }[];
}) {
  return (
    <UITable>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Cargo</TableHead>
          <TableHead>Salário</TableHead>
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
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  );
}
