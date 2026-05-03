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
    <aside className="min-h-screen w-64 shrink-0 bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold mb-8">Empresa</h1>

      <nav className="flex flex-col gap-4">
        {links.map((link) => {
          const isActive = isActiveLink(link.href);

          return (
            <Link
              key={link.href}
              className={`rounded-lg px-4 py-3 transition-colors ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700/70"
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
