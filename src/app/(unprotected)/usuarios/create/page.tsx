import InputForm from "./components/InputForm";
import { redirect } from "next/navigation";

import { db } from "@/db";

export default function CreateUserPage() {
  async function createUser(formData: FormData) {
    "use server";

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const cargo = String(formData.get("cargo") ?? "").trim();
    const salary = Number(formData.get("salary"));

    if (!name || !email || !cargo) {
      throw new Error("Nome, email e cargo sao obrigatorios.");
    }

    if (!Number.isFinite(salary) || salary < 0) {
      throw new Error("Salario invalido.");
    }

    await db.usuario.create({
      data: {
        name,
        email,
        cargo,
        salary,
      },
    });

    redirect("/usuarios");
  }

  return (
    <div className="flex justify-center px-0 py-2 sm:px-2 md:py-4">
      <InputForm createUser={createUser} />
    </div>
  );
}
