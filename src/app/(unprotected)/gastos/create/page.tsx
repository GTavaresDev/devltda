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
    <div className="flex flex-col items-center px-0 py-2 sm:px-2 md:py-4">
      <div className="w-full max-w-md">
        <Link
          href="/gastos"
          className="mb-4 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Voltar
        </Link>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Financeiro
        </p>

        <h1 className="mb-6 mt-3 text-2xl font-extrabold tracking-tight text-zinc-100 md:text-3xl">
          Criar Gasto
        </h1>

        <Form addGastos={addGastos} />
      </div>
    </div>
  );
}
