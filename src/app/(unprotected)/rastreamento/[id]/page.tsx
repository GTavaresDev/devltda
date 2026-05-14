import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { notFound } from "next/navigation";
import { getLogById } from "@/app/data/log";
import { getTrackingStatuses } from "@/app/data/status";
import DetailsContent from "./components/DetailsContent.component";
import Header from "./components/Header.component";

interface RastreamentoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function RastreamentoPage({
  params,
}: RastreamentoPageProps) {
  const { id } = await params;
  const logId = Number(id);

  if (!Number.isInteger(logId) || logId <= 0) {
    notFound();
  }

  const log = await getLogById(logId);
  const statuses = await getTrackingStatuses();

  if (!log || statuses.length === 0) {
    notFound();
  }

  return (
    <div className="flex justify-center px-0 py-2 sm:px-2 md:py-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <Header />
        </CardHeader>
        <CardContent>
          <DetailsContent
            id={log.id}
            notaFiscal={log.notaFiscal}
            senderName={log.senderName}
            arrivedAt={log.arrivedAt}
            statusId={log.statusId}
            updatedAt={log.updatedAt}
            statuses={statuses}
          />
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  );
}
