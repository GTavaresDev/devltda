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
      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition-colors duration-300 hover:bg-cyan-400/20"
    >
      Editar
    </button>
  );
}
