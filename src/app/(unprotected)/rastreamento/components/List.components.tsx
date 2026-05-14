import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Log } from "@/app/types/log-types";
import ViewDetailButton from "./ViewDetailButton";
import EditDetailButton from "./EditDetailButton";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

type ListProps = {
  log: Log[];
};

export default function List({ log }: ListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nota Fiscal</TableHead>
          <TableHead>Destinatario</TableHead>
          <TableHead>Data de Previsão</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {log.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="font-medium text-zinc-100">
              {item.notaFiscal}
            </TableCell>
            <TableCell>{item.senderName}</TableCell>
            <TableCell>{item.arrivedAt.toLocaleDateString("pt-BR")}</TableCell>
            <TableCell>{item.statusId}</TableCell>
            <TableCell>
              <ViewDetailButton logId={item.id} />
              <EditDetailButton logId={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
