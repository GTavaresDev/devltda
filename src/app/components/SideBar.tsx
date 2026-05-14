"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/usuarios", label: "Usuários" },
  { href: "/salarios", label: "Salários" },
  { href: "/cargos", label: "Cargos" },
  { href: "/gastos", label: "Gastos" },
  { href: "/rastreamento", label: "Rastreamento" },
];

export default function SideBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/" || pathname === "/dashboard";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const baseLinkClass =
    "rounded-xl border px-4 py-3 text-sm font-medium transition-all";

  const getLinkClassName = (href: string) => {
    const isActive = isActiveLink(href);

    return `${baseLinkClass} ${
      isActive
        ? "border-indigo-500/40 bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/10"
        : "border-transparent text-zinc-400 hover:border-zinc-800 hover:bg-zinc-900 hover:text-zinc-100"
    }`;
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 px-4 py-4 text-zinc-100 backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              DevLtda
            </p>
            <h1 className="mt-1 truncate text-xl font-bold tracking-tight">
              Empresa
            </h1>
          </div>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-semibold text-zinc-100 transition-all hover:border-zinc-700 hover:bg-zinc-800"
          >
            Menu
          </button>
        </div>

        {isMobileMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-4 flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-3"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                className={getLinkClassName(link.href)}
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <aside className="sticky top-0 hidden min-h-screen w-72 shrink-0 border-r border-zinc-800 bg-zinc-950/95 px-6 py-8 text-zinc-100 backdrop-blur md:block">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
            DevLtda
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight">Empresa</h1>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className={getLinkClassName(link.href)}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
