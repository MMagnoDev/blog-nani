import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#FAF9F1] border-t border-[#E5E4DB] pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-[#E5E4DB] items-start">
          {/* Coluna 1: Watermark Logo & Sobre */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90 duration-300">
              <img
                src="/marcadagua_footer.png"
                alt="Clover Psicologia"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-[#787F74] leading-relaxed max-w-sm">
              Acolhimento humano, escuta ativa e um espaço onde você pode ser quem é.
            </p>
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
                <span>(51) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#6F7A69] shrink-0" />
                <span className="truncate">contato@cloverpsicologia.com.br</span>
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
                <span>@cloverpsicologia</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-[#6F7A69] shrink-0 mt-0.5" />
                <span>Seg - Sex: 08h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-center text-[11px] sm:text-xs text-[#787F74]">
          © {new Date().getFullYear()} Clover Psicologia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
