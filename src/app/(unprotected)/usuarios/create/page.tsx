import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InputForm() {
  return (
    <form className="w-full max-w-2xl rounded-xl bg-gray-800 p-6 text-white shadow">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Novo usuário</h1>
        <p className="mt-2 text-sm text-gray-400">
          Preencha os dados para cadastrar um colaborador no sistema.
        </p>
      </div>

      <FieldGroup>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-name">
            Name
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
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
          />
          <FieldDescription className="text-gray-400">
            We&apos;ll never share your email with anyone.
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel className="text-gray-100" htmlFor="form-phone">
              Phone
            </FieldLabel>
            <Input
              className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
              id="form-phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
            />
          </Field>
          <Field>
            <FieldLabel className="text-gray-100" htmlFor="form-country">
              Country
            </FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger
                className="border-gray-700 bg-gray-900 text-white focus:ring-gray-400"
                id="form-country"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="border-gray-700 bg-gray-900 text-white">
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel className="text-gray-100" htmlFor="form-address">
            Address
          </FieldLabel>
          <Input
            className="border-gray-700 bg-gray-900 text-white placeholder:text-gray-500 focus-visible:ring-gray-400"
            id="form-address"
            type="text"
            placeholder="123 Main St"
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
