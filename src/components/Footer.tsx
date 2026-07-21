import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#FAF9F1] border-t border-[#E5E4DB] pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-[#E5E4DB] items-start">
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90 duration-300">
              <img
                src="/marcadagua_footer.png"
                alt="Clover Psicologia"
                className="h-24 sm:h-32 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#495045] mb-3 sm:mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-[#787F74]">
              <li>
                <Link href="/quem-somos" className="hover:text-[#6F7A69] transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/#espaco" className="hover:text-[#6F7A69] transition-colors">
                  Nosso espaço
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="hover:text-[#6F7A69] transition-colors">
                  Serviços
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#495045] mb-3 sm:mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs text-[#787F74]">
              <li>
                <Link href="/especialidades" className="hover:text-[#6F7A69] transition-colors">
                  Psicoterapia Infantil
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="hover:text-[#6F7A69] transition-colors">
                  Psicoterapia Adulto
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="hover:text-[#6F7A69] transition-colors">
                  Avaliação Psicológica
                </Link>
              </li>
              <li>
                <Link href="/especialidades" className="hover:text-[#6F7A69] transition-colors">
                  Orientação de Pais
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold text-[#495045] mb-3 sm:mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-xs text-[#787F74]">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-[#6F7A69] shrink-0" />
                <a
                  href="https://wa.me/5551985426371?text=Ol%C3%A1%21%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20atendimentos%20da%20Clover%20Psicologia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6F7A69] transition-colors"
                >
                  (51) 98542-6371
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#6F7A69] shrink-0" />
                <a
                  href="mailto:cloverpsicologia@gmail.com"
                  className="hover:text-[#6F7A69] transition-colors truncate"
                >
                  cloverpsicologia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#6F7A69] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href="https://www.instagram.com/cloverpsicologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6F7A69] transition-colors"
                >
                  @cloverpsicologia
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-[#6F7A69] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>Seg - Sex: 08:00 - 20:00</div>
                  <div>Sáb: 08:00 - 12:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-[11px] sm:text-xs text-[#787F74]">
          Clover Psicologia © 2025 – Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/agenciaminimum/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#495045] hover:text-[#6F7A69] underline transition-colors"
          >
            Minimum Design
          </a>
        </div>
      </div>
    </footer>
  );
}
