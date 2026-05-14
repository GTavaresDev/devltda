import InputForm from "./components/InputForm";
import { redirect } from "next/navigation";

import { db } from "@/db";

export default async function CreateLogPage() {
  const statuses = await db.status.findMany({
    orderBy: { id: "asc" },
  });

  async function createLog(formData: FormData) {
    "use server";

    const notaFiscal = Number(formData.get("notaFiscal"));
    const senderName = String(formData.get("senderName") ?? "").trim();
    const arrivedAtValue = String(formData.get("arrivedAt") ?? "").trim();
    const statusId = Number(formData.get("statusId"));

    if (!Number.isInteger(notaFiscal) || notaFiscal <= 0) {
      throw new Error("Nota fiscal invalida.");
    }

    if (!senderName || !arrivedAtValue) {
      throw new Error("Destinatario e data de previsao sao obrigatorios.");
    }

    if (!Number.isInteger(statusId) || statusId <= 0) {
      throw new Error("Status invalido.");
    }

    const status = await db.status.findUnique({
      where: { id: statusId },
      select: { id: true },
    });

    if (!status) {
      throw new Error("O status selecionado nao existe.");
    }

    const arrivedAt = new Date(arrivedAtValue);

    if (Number.isNaN(arrivedAt.getTime())) {
      throw new Error("Data de previsao invalida.");
    }

    await db.log.create({
      data: {
        notaFiscal,
        senderName,
        arrivedAt,
        statusId,
      },
    });

    redirect("/rastreamento");
  }

  return (
    <div className="flex justify-center px-0 py-2 sm:px-2 md:py-4">
      <InputForm createLog={createLog} statuses={statuses} />
    </div>
  );
}
