"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#horarios", label: "Horários" },
  { href: "#localizacao", label: "Localização" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(13,5,0,0.97)] backdrop-blur-md border-b-2 border-[#8b1a1a]">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Churrascaria Viapiana — Página inicial">
          <Image
            src="/images/logo-viapiana.png"
            alt="Logo Churrascaria Viapiana"
            width={160}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex gap-7 list-none">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-xs text-white/60 uppercase tracking-wider hover:text-[#d4a017] transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Desktop */}
        <a
          href="#localizacao"
          className="hidden md:inline-block bg-[#8b1a1a] hover:bg-[#a51f1f] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors duration-200"
        >
          Fazer Reserva
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          aria-label="Navegação mobile"
          className="md:hidden bg-[#0d0400] border-t border-[#8b1a1a]/40 px-6 py-4"
        >
          <ul className="flex flex-col gap-4 list-none">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-white/70 uppercase tracking-wider hover:text-[#d4a017] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="block bg-[#8b1a1a] text-white text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-sm text-center"
              >
                Fazer Reserva
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
