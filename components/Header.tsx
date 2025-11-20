"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact / Quote" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-emerald-700 flex items-center justify-center text-white font-bold">
            CF
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900">Cypress Freight</div>
            <div className="text-xs text-slate-500">
              Freight & Logistics Services
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-emerald-700 font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact#quote"
          className="hidden md:inline-flex rounded-full border border-emerald-700 bg-emerald-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-emerald-800 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

