import List from "./components/List.components";
import Section from "./components/Section.components";
import { getLog } from "@/app/data/log";

export default async function UsuariosPage() {
  const logs = await getLog();

  return (
    <div>
      <Section>
        <List log={logs} />
      </Section>
    </div>
  );
}
