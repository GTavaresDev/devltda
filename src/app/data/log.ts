import { cache } from "react";

import { db } from "@/db";
import type { Log } from "@/app/types/log-types";

function mapLog(log: {
  id: number;
  notaFiscal: number;
  senderName: string;
  arrivedAt: Date;
  statusId: number;
  createdAt: Date;
  updatedAt: Date;
}): Log {
  return {
    id: log.id,
    notaFiscal: log.notaFiscal,
    senderName: log.senderName,
    arrivedAt: log.arrivedAt,
    statusId: log.statusId,
    createdAt: log.createdAt,
    updatedAt: log.updatedAt,
  };
}

export const getLog = cache(async (): Promise<Log[]> => {
  const log = await db.log.findMany({
    orderBy: { createdAt: "desc" },
  });

  return log.map(mapLog);
});

export async function getLogById(id: number): Promise<Log | null> {
  const log = await db.log.findUnique({
    where: { id },
  });

  return log ? mapLog(log) : null;
}
