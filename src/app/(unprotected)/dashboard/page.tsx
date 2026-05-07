import Header from "./components/Header";
import List from "./components/List";
import Statistic from "./components/Statistic";

export default function DashboardPage() {
  return (
    <div className="page-stack">
      <Header />
      <Statistic />
      <List />
    </div>
  );
}
