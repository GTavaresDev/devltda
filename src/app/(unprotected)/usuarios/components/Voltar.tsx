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
      className="mb-4 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700"
    >
      ← Voltar
    </button>
  );
}
