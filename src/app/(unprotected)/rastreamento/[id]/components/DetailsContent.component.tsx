import InfoCard from "./InfoCard.component";

type DetailsContentProps = {
  id: number;
  notaFiscal: number;
  senderName: string;
  arrivedAt: Date;
  statusId: number;
};

export default function DetailsContent({
  id,
  notaFiscal,
  senderName,
  arrivedAt,
  statusId,
}: DetailsContentProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-[30%_1fr]">
        <InfoCard label="Nota fiscal" value={notaFiscal} />
        <InfoCard label="Destinatário" value={senderName} />
      </div>
      <InfoCard
        label="Previsão de chegada"
        value={arrivedAt.toLocaleDateString("pt-BR")}
      />
      <InfoCard label="Status" value={statusId} />
      <InfoCard label="Registro" value={`Registro #${id}`} />
    </div>
  );
}
