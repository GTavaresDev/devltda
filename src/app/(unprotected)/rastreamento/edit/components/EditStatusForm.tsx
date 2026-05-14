"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import type { Log } from "@/app/types/log-types";
import type { TrackingStatus } from "@/app/types/status-types";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useTrackingStatusStore } from "@/app/(unprotected)/rastreamento/store/useTrackingStatusStore";

type UpdateStatusAction = (formData: FormData) => Promise<
  | {
      success: true;
      logId: number;
      statusId: number;
    }
  | {
      success: false;
      message: string;
    }
>;

type EditStatusFormProps = {
  logs: Log[];
  statuses: TrackingStatus[];
  defaultLogId: number;
  updateStatus: UpdateStatusAction;
};

export default function EditStatusForm({
  logs,
  statuses,
  defaultLogId,
  updateStatus,
}: EditStatusFormProps) {
  const router = useRouter();
  const setLogStatus = useTrackingStatusStore((state) => state.setLogStatus);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [selectedLogId, setSelectedLogId] = useState(defaultLogId);
  const [selectedStatusId, setSelectedStatusId] = useState(
    logs.find((log) => log.id === defaultLogId)?.statusId ??
      statuses[0]?.id ??
      0,
  );

  const selectedLog = useMemo(
    () => logs.find((log) => log.id === selectedLogId) ?? null,
    [logs, selectedLogId],
  );

  const hasOptions = logs.length > 0 && statuses.length > 0;

  function handleLogChange(nextLogId: number) {
    const nextLog = logs.find((log) => log.id === nextLogId);

    setSelectedLogId(nextLogId);
    setSelectedStatusId(nextLog?.statusId ?? statuses[0]?.id ?? 0);
    setMessage(null);
  }

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await updateStatus(formData);

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      setLogStatus(result.logId, result.statusId);
      setMessage("Status atualizado com sucesso.");
      router.push(`/rastreamento`);
      router.refresh();
    });
  }

  return (
    <form
      action={handleSubmit}
      className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white shadow-xl shadow-black/10 sm:p-5 md:p-6"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Rastreamento
        </p>
        <h1 className="mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
          Editar status
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Persista a alteracao no banco e reflita o ultimo status confirmado na
          UI.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="edit-logId">Registro</FieldLabel>
          <select
            id="edit-logId"
            name="logId"
            value={selectedLogId}
            onChange={(event) => handleLogChange(Number(event.target.value))}
            disabled={!hasOptions || isPending}
            className="flex h-11 w-full rounded-xl border border-input bg-input px-4 py-3 text-sm text-foreground shadow-sm ring-offset-background transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {logs.map((log) => (
              <option key={log.id} value={log.id}>
                Registro #{log.id} - NF {log.notaFiscal}
              </option>
            ))}
          </select>
          {selectedLog ? (
            <FieldDescription>
              Destinatario: {selectedLog.senderName}. Status atual no banco: #
              {selectedLog.statusId}.
            </FieldDescription>
          ) : null}
        </Field>

        <Field>
          <FieldLabel htmlFor="edit-statusId">Novo status</FieldLabel>
          <select
            id="edit-statusId"
            name="statusId"
            value={selectedStatusId}
            onChange={(event) =>
              setSelectedStatusId(Number(event.target.value))
            }
            disabled={!hasOptions || isPending}
            className="flex h-11 w-full rounded-xl border border-input bg-input px-4 py-3 text-sm text-foreground shadow-sm ring-offset-background transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.title} - {status.subTitle}
              </option>
            ))}
          </select>
          {selectedStatusId ? (
            <FieldDescription>
              {statuses.find((status) => status.id === selectedStatusId)
                ?.content ?? "Selecione um status valido."}
            </FieldDescription>
          ) : null}
        </Field>

        {message ? (
          <p className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300">
            {message}
          </p>
        ) : null}

        <Field orientation="horizontal">
          <Button asChild className="sm:min-w-32" variant="outline">
            <Link
              href={
                selectedLog
                  ? `/rastreamento/${selectedLog.id}`
                  : "/rastreamento"
              }
            >
              Cancelar
            </Link>
          </Button>
          <Button
            className="sm:min-w-32"
            type="submit"
            disabled={!hasOptions || isPending}
          >
            {isPending ? "Salvando..." : "Salvar"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
