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
    <>
      <div className="grid gap-3 md:hidden">
        {props.users.map((user) => (
          <article
            key={user.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Usuário
                </p>
                <h3 className="mt-2 break-words text-base font-semibold text-zinc-100">
                  {user.name}
                </h3>
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] text-zinc-400">
                #{user.id}
              </span>
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-zinc-500">Cargo</dt>
                <dd className="mt-1 text-zinc-200">{user.cargo}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Salário</dt>
                <dd className="mt-1 font-medium text-zinc-100">
                  R$ {user.salary.toLocaleString("pt-BR")}
                </dd>
              </div>
            </dl>

            <div className="mt-4">
              <ViewDetailButton userId={user.id} />
            </div>
          </article>
        ))}
      </div>

      <div className="hidden md:block">
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
      </div>
    </>
  );
}
