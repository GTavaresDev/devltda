"use client";

import { useRouter } from "next/navigation";

export default function ViewDetailButton({ userId }: { userId: number }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/usuarios/${userId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-100 transition-all duration-200 hover:bg-indigo-500/20"
    >
      Editar
    </button>
  );
}
