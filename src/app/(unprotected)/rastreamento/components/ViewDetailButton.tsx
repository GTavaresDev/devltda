import Link from "next/link";

export default function ViewDetailButton({ logId }: { logId: number }) {
  return (
    <Link
      href={`/rastreamento/${logId}`}
      className="w-full rounded-xl border border-indigo-900 bg-indigo-900/10 px-4 py-2 text-center text-sm font-semibold text-indigo-100 transition-all duration-200 hover:bg-indigo-500/20 md:w-auto"
    >
      Ver Detalhes
    </Link>
  );
}
