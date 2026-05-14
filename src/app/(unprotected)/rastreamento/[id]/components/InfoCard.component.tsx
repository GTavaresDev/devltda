import { CardDescription } from "@/components/ui/card";

type InfoCardProps = {
  label: string;
  value: React.ReactNode;
};

export default function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <CardDescription>{label}</CardDescription>
      <p className="mt-2 text-xl font-semibold text-zinc-100">{value}</p>
    </div>
  );
}
