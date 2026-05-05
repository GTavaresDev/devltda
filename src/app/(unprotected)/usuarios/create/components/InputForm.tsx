import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { User } from "@/app/types/users-type";
import { useState } from "react";

type InputFormProps = {
  onAddUser: (newUser: User) => void;
};

export default function InputForm({ onAddUser }: InputFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [salary, setSalary] = useState("");

  function onAddUserSubmit() {
    if (!name.trim() || !email.trim() || !cargo.trim() || !salary.trim()) {
      return;
    }

    const parsedSalary = Number(salary);

    if (Number.isNaN(parsedSalary) || parsedSalary < 0) {
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      cargo,
      salary: parsedSalary,
    };
    onAddUser(newUser);
    setName("");
    setEmail("");
    setCargo("");
    setSalary("");
  }

  return (
    <form
      className="w-full max-w-2xl rounded-xl bg-gray-800 p-6 text-white shadow"
      onSubmit={(e) => {
        e.preventDefault();
        onAddUserSubmit();
      }}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Novo usuário</h1>
        <p className="mt-2 text-sm text-gray-400">
          Preencha os dados para cadastrar um colaborador no sistema.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-name">
            Nome
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-name"
            type="text"
            placeholder="John Doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-email">
            Email
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-email"
            type="email"
            placeholder="john@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-cargo">
            Cargo
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-cargo"
            type="text"
            placeholder="Desenvolvedor"
            required
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Field>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-salary">
            Salário
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-salary"
            type="number"
            min="0"
            step="0.01"
            placeholder="5000"
            required
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Field>
        <Field orientation="horizontal">
          <Button
            className="border-gray-600 bg-transparent text-gray-100 hover:bg-gray-700 hover:text-white"
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700" type="submit">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
