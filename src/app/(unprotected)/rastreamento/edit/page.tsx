import { notFound } from "next/navigation";

import { getLog } from "@/app/data/log";
import { getTrackingStatuses } from "@/app/data/status";
import { updateTrackingLogStatus } from "@/app/(unprotected)/rastreamento/actions";
import EditStatusForm from "./components/EditStatusForm";

interface EditTrackingPageProps {
  searchParams: Promise<{
    logId?: string;
  }>;
}

export default async function EditTrackingPage({
  searchParams,
}: EditTrackingPageProps) {
  const [{ logId: requestedLogId }, logs, statuses] = await Promise.all([
    searchParams,
    getLog(),
    getTrackingStatuses(),
  ]);

  if (logs.length === 0 || statuses.length === 0) {
    notFound();
  }

  const parsedLogId = Number(requestedLogId);
  const defaultLogId =
    Number.isInteger(parsedLogId) && logs.some((log) => log.id === parsedLogId)
      ? parsedLogId
      : logs[0].id;

  return (
    <div className="flex justify-center px-0 py-2 sm:px-2 md:py-4">
      <EditStatusForm
        logs={logs}
        statuses={statuses}
        defaultLogId={defaultLogId}
        updateStatus={updateTrackingLogStatus}
      />
    </div>
  );
}
