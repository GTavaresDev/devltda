import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type InputFormProps = {
  createUser: (formData: FormData) => Promise<void>;
};

export default function InputForm({ createUser }: InputFormProps) {
  return (
    <form
      action={createUser}
      className="w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-white shadow-xl shadow-black/10 sm:p-5 md:p-6"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Cadastro
        </p>
        <h1 className="mt-3 text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl">
          Novo usuário
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Preencha os dados para cadastrar um colaborador no sistema.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-name">
            Nome
          </FieldLabel>
          <Input
            id="form-name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-email">
            Email
          </FieldLabel>
          <Input
            id="form-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-cargo">
            Cargo
          </FieldLabel>
          <Input
            id="form-cargo"
            name="cargo"
            type="text"
            placeholder="Desenvolvedor"
            required
          />
        </Field>
        <Field>
          <FieldLabel className="text-zinc-400" htmlFor="form-salary">
            Salário
          </FieldLabel>
          <Input
            id="form-salary"
            name="salary"
            type="number"
            min="0"
            step="0.01"
            placeholder="5000"
            required
          />
        </Field>
        <Field orientation="horizontal">
          <Button
            className="sm:min-w-32"
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button className="sm:min-w-32" type="submit">
            Salvar
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
