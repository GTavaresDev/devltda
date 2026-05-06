"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/usuarios", label: "Usuários" },
  { href: "/salarios", label: "Salários" },
  { href: "/cargos", label: "Cargos" },
  { href: "/gastos", label: "Gastos" },
];

export default function SideBar() {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="sticky top-0 min-h-screen w-72 shrink-0 border-r border-zinc-800 bg-zinc-950/95 px-6 py-8 text-zinc-100 backdrop-blur">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
          DevLtda
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Empresa</h1>
      </div>

      <nav className="flex flex-col gap-4">
        {links.map((link) => {
          const isActive = isActiveLink(link.href);

          return (
            <Link
              key={link.href}
              className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "border-indigo-500/40 bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/10"
                  : "border-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900 hover:text-zinc-100"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
