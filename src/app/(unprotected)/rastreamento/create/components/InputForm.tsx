import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type StatusOption = {
  id: number;
  title: string;
  subTitle: string;
};

type InputFormProps = {
  createLog: (formData: FormData) => Promise<void>;
  statuses: StatusOption[];
};

export default function InputForm({
  createLog,
  statuses,
}: InputFormProps) {
  const hasStatuses = statuses.length > 0;

  return (
    <form
      action={createLog}
      className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white shadow-xl shadow-black/10 sm:p-5 md:p-6"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Rastreamento
        </p>
        <h1 className="mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
          Novo registro
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Preencha os dados para cadastrar uma entrega no sistema.
        </p>
        {!hasStatuses ? (
          <p className="mt-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
            Nenhum status foi cadastrado. Crie um registro em `Status`
            antes de adicionar um rastreamento.
          </p>
        ) : null}
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-notaFiscal">
            Nota fiscal
          </FieldLabel>
          <Input
            id="form-notaFiscal"
            name="notaFiscal"
            type="number"
            min="1"
            step="1"
            placeholder="123456"
            required
            disabled={!hasStatuses}
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-senderName">
            Destinatário
          </FieldLabel>
          <Input
            id="form-senderName"
            name="senderName"
            type="text"
            placeholder="Joao Silva"
            required
            disabled={!hasStatuses}
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-arrivedAt">
            Data de previsão
          </FieldLabel>
          <Input
            id="form-arrivedAt"
            name="arrivedAt"
            type="datetime-local"
            required
            disabled={!hasStatuses}
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-statusId">
            Status
          </FieldLabel>
          <select
            id="form-statusId"
            name="statusId"
            defaultValue={hasStatuses ? String(statuses[0].id) : ""}
            required
            disabled={!hasStatuses}
            className="flex h-11 w-full rounded-xl border border-input bg-input px-4 py-3 text-sm text-foreground shadow-sm ring-offset-background transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.title} - {status.subTitle}
              </option>
            ))}
          </select>
        </Field>
        <Field orientation="horizontal">
          <Button asChild className="sm:min-w-32" variant="outline">
            <Link href="/rastreamento">Cancelar</Link>
          </Button>
          <Button className="sm:min-w-32" type="submit" disabled={!hasStatuses}>
            Salvar
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
