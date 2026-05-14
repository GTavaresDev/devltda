import Link from "next/link";

export default function EditDetailButton({ logId }: { logId: number }) {
  return (
    <Link
      href={`/rastreamento/edit?logId=${logId}`}
      className="w-full rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-center text-sm font-semibold text-indigo-100 transition-all duration-200 hover:bg-indigo-500/20 md:w-auto"
    >
      Editar status
    </Link>
  );
}
