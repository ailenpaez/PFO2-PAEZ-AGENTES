"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Fixture", href: "/#fixture" },
  { label: "Simulador", href: "/#simulador" },
  { label: "Características", href: "/#caracteristicas" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Sobre la autora", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">⚽</span>
            <div>
              <span className="font-display font-800 text-xl text-white tracking-tight">
                Copa<span className="text-gradient">Tracker</span>
              </span>
              <span className="block text-[10px] text-[#00B4D8] font-medium tracking-widest uppercase -mt-0.5">
                2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-all" />
            <span className="block w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
