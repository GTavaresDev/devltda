"use server";

import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { updateLogStatusById } from "@/app/data/log";

type UpdateLogStatusResult =
  | {
      success: true;
      logId: number;
      statusId: number;
    }
  | {
      success: false;
      message: string;
    };

export async function updateTrackingLogStatus(
  formData: FormData
): Promise<UpdateLogStatusResult> {
  const logId = Number(formData.get("logId"));
  const statusId = Number(formData.get("statusId"));

  if (!Number.isInteger(logId) || logId <= 0) {
    return { success: false, message: "Log invalido." };
  }

  if (!Number.isInteger(statusId) || statusId <= 0) {
    return { success: false, message: "Status invalido." };
  }

  const [log, status] = await Promise.all([
    db.log.findUnique({
      where: { id: logId },
      select: { id: true },
    }),
    db.status.findUnique({
      where: { id: statusId },
      select: { id: true },
    }),
  ]);

  if (!log) {
    return { success: false, message: "O log informado nao existe." };
  }

  if (!status) {
    return { success: false, message: "O status informado nao existe." };
  }

  await updateLogStatusById(logId, statusId);

  revalidatePath("/rastreamento");
  revalidatePath(`/rastreamento/${logId}`);

  return {
    success: true,
    logId,
    statusId,
  };
}
