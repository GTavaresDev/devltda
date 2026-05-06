"use client";

import { useRouter } from "next/navigation";

export default function Voltar() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/usuarios`);
  };

  return (
    <button
      onClick={handleClick}
      className="mb-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 shadow-sm transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
    >
      ← Voltar
    </button>
  );
}
