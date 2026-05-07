import { db } from "@/db";
import Form from "../components/Form.component";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function CreateGastos() {
  const addGastos = async (formData: FormData) => {
    "use server";
    const titulo = formData.get("titulo") as string;
    const descricao = formData.get("descricao") as string;
    const valor = formData.get("valor") as string;

    await db.gastos.create({
      data: {
        titulo,
        descricao,
        valor: parseFloat(valor),
      },
    });

    redirect("/gastos");
  };

  return (
    <div className="flex flex-col items-center py-2 md:py-4">
      <div className="w-full max-w-2xl">
        <Link
          href="/gastos"
          className="mb-4 inline-flex min-h-11 items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
        >
          ← Voltar
        </Link>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Financeiro
        </p>

        <h1 className="mb-6 mt-3 text-[clamp(1.75rem,1.45rem+1vw,2.5rem)] font-extrabold tracking-tight text-zinc-100">
          Criar Gasto
        </h1>

        <Form addGastos={addGastos} />
      </div>
    </div>
  );
}
