"use client";

import InfoCard from "./InfoCard.component";
import Timeline from "./Timeline.component";

import type { TrackingStatus } from "@/app/types/status-types";
import { useTrackingStatusStore } from "@/app/(unprotected)/rastreamento/store/useTrackingStatusStore";

type DetailsContentProps = {
  id: number;
  notaFiscal: number;
  senderName: string;
  arrivedAt: Date;
  statusId: number;
  updatedAt: Date;
  statuses: TrackingStatus[];
};

export default function DetailsContent({
  id,
  notaFiscal,
  senderName,
  arrivedAt,
  statusId,
  updatedAt,
  statuses,
}: DetailsContentProps) {
  const storeStatusId = useTrackingStatusStore(
    (state) => state.statusByLogId[id],
  );
  const effectiveStatusId = storeStatusId ?? statusId;

  return (
    <div className="space-y-4">
      <div className="flex justify-end"></div>
      <div className="grid gap-4 sm:grid-cols-[30%_1fr]">
        <InfoCard label="Nota fiscal" value={notaFiscal} />
        <InfoCard label="Destinatário" value={senderName} />
      </div>
      <InfoCard
        label="Previsão de chegada"
        value={arrivedAt.toLocaleDateString("pt-BR")}
      />
      <Timeline
        items={statuses}
        currentStatusId={effectiveStatusId}
      />
    </div>
  );
}
