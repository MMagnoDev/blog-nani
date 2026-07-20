"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Quem somos", href: "/quem-somos" },
    { name: "Equipe", href: "/#equipe" },
    { name: "Especialidades", href: "/especialidades" },
    { name: "Nosso espaço", href: "/#espaco" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F1]/95 backdrop-blur-md border-b border-[#E5E4DB] transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo Header Image */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90 duration-300">
          <img
            src="/logo_header.png"
            alt="Clover Psicologia"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-wider font-medium text-[#656C60] hover:text-[#6F7A69] transition-colors duration-300 py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#6F7A69] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/#contato" variant="primary" className="px-5 py-2 text-xs uppercase tracking-wider font-semibold hover:shadow-md transition-all duration-300">
            Agendar
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#495045] p-2 focus:outline-none hover:text-[#6F7A69] transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Full Overlay Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[64px] sm:top-[80px] bottom-0 bg-[#FAF9F1] z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between border-t border-[#E5E4DB] lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#495045] hover:text-[#6F7A69] transition-colors py-2 border-b border-[#E5E4DB]/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#6F7A69] text-sm">→</span>
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t border-[#E5E4DB] space-y-4">
            <Button href="/#contato" variant="primary" onClick={() => setIsOpen(false)} className="w-full py-3.5 text-sm uppercase tracking-wider">
              Agendar Consulta
            </Button>
            <p className="text-center text-xs text-[#787F74]">
              Canoas - RS | (51) 99999-9999
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
