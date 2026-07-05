"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#collections", label: "Collections" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navText = isHome
    ? "text-primary-foreground/90 hover:text-accent"
    : "text-primary/90 hover:text-accent";
  const logoText = isHome ? "text-primary-foreground" : "text-primary";
  const menuIcon = isHome ? "text-primary-foreground" : "text-primary";
  const headerBg = isHome ? "" : "bg-background border-b border-border";

  return (
    <header className={`absolute top-0 inset-x-0 z-30 ${headerBg}`}>
      <div className="container-narrow flex items-center justify-between py-6">
        <Link
          href="/"
          className={`font-display text-2xl ${logoText} tracking-wider transition-colors`}
        >
          Maison <span className="text-accent">Olive</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={isHome ? l.href : `/${l.href}`}
              className={`text-sm ${navText} transition-colors tracking-wide`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button variant={isHome ? "hero" : "gold"} size="sm" asChild>
            <a href="tel:+213000000000">
              <Phone /> Appelez-nous
            </a>
          </Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${menuIcon}`}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div
          className={`lg:hidden animate-fade-up ${isHome ? "bg-primary text-primary-foreground" : "bg-background text-primary border-b border-border"}`}
        >
          <div className="container-narrow py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={isHome ? l.href : `/${l.href}`}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide"
              >
                {l.label}
              </a>
            ))}
            <Button variant={isHome ? "hero" : "gold"} size="sm" asChild>
              <a href="tel:+213000000000">
                <Phone /> Appelez-nous
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
