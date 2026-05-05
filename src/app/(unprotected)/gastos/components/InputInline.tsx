import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input
        className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
        type="add"
        placeholder="Adicionar gasto..."
      />
      <Button
        className="bg-blue-600 text-white hover:bg-blue-700"
        type="submit"
      >
        Adicionar
      </Button>
    </Field>
  );
}
