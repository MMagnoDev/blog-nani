"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn, Share2 } from "lucide-react";

export interface GalleryItem {
  src: string;
  title: string;
  description?: string;
}

const defaultImages: GalleryItem[] = [
  {
    src: "/img/galeria/recepcao_aconchegante.png",
    title: "Recepção Aconchegante",
    description:
      "Um espaço pensado para o seu conforto enquanto aguarda, com café, chá e leitura.",
  },
  {
    src: "/img/galeria/sala_de_atendimento_adulto.png",
    title: "Sala de Atendimento Adulto",
    description:
      "Ambiente reservado, com isolamento acústico e poltronas confortáveis para o diálogo terapêutico.",
  },
  {
    src: "/img/galeria/espaco_ludico_infantil.png",
    title: "Espaço Lúdico Infantil",
    description:
      "Sala equipada com brinquedos e materiais específicos para o atendimento de crianças.",
  },
  {
    src: "/img/galeria/Avaliacoes_Psicologicas_e_Neuropsicologicas.png",
    title: "Avaliações Psicológicas e Neuropsicológicas",
    description:
      "Espaço preparado com testes padronizados e materiais adequados para avaliações precisas e confiáveis.",
  },
  {
    src: "/img/galeria/detalhes_que_acolhem.png",
    title: "Detalhes que Acolhem",
    description:
      "Decoração suave, plantas e iluminação pensada para promover relaxamento.",
  },
  {
    src: "/img/galeria/ambiente_terapeutico.png",
    title: "Ambiente Terapêutico",
    description:
      "Cada detalhe pensado para proporcionar bem-estar e acolhimento.",
  },
  {
    src: "/img/galeria/espaco_ludico.png",
    title: "Espaço Lúdico",
    description:
      "Ambiente preparado para atividades lúdicas e psicoterapêuticas integradas.",
  },
  {
    src: "/img/galeria/sala_de_avaliacao.png",
    title: "Sala de Avaliação",
    description:
      "Espaço silencioso e estruturado para aplicação de testes e entrevistas de avaliação.",
  },
  {
    src: "/img/galeria/cafe.png",
    title: "Cantinho do Café",
    description:
      "Um espaço preparado com carinho para você desfrutar de um café ou chá enquanto aguarda seu atendimento.",
  },
];

interface GalleryLightboxProps {
  images?: GalleryItem[];
}

export default function GalleryLightbox({ images = defaultImages }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
  }, [selectedIndex, images.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  }, [selectedIndex, images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      {/* GRID DA GALERIA (FORMATO IGUAL A REFERÊNCIA COM ESPAÇAMENTO INTERNO E CANTOS ARREDONDADOS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {images.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-[#EAE8DD] p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              {/* IMAGEM COM CANTOS ARREDONDADOS E ESPAÇAMENTO INTERNO */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-4 sm:mb-5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3 z-20 pointer-events-none">
                  <div className="bg-white/90 text-[#495045] p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                    <Maximize2 size={14} />
                  </div>
                </div>
              </div>

              {/* CONTEÚDO DO CARD */}
              <div className="space-y-2">
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#495045] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                  {item.description || "Um espaço pensado para o seu conforto e bem-estar."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL LIGHTBOX FULLSCREEN RENDERIZADO VIA PORTAL NO BODY */}
      {selectedIndex !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-6 select-none"
          onClick={closeLightbox}
          style={{ zIndex: 999999 }}
        >
          {/* BARRA SUPERIOR DO MODAL: CONTADOR À ESQUERDA + BOTOES DE ACAO À DIREITA */}
          <div className="w-full flex items-center justify-between text-white z-[1000000] px-2 sm:px-4">
            <span
              className="font-sans text-sm sm:text-base font-medium !text-white"
              style={{ color: "#ffffff" }}
            >
              {selectedIndex + 1}/{images.length}
            </span>

            {/* ÍCONES DE AÇÃO: FULLSCREEN, ZOOM, SHARE, CLOSE */}
            <div className="flex items-center gap-2 sm:gap-3 text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    document.documentElement.requestFullscreen();
                  }
                }}
                className="p-2 text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title="Tela cheia"
              >
                <Maximize2 size={18} />
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title="Zoom"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-white hover:bg-white/15 rounded-lg transition-colors cursor-pointer"
                title="Compartilhar"
              >
                <Share2 size={18} />
              </button>
              <button
                onClick={closeLightbox}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors cursor-pointer ml-1"
                aria-label="Fechar"
              >
                <X size={22} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* NAVEGAÇÃO LATERAL COM SETAS DA REFERENCIA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/15 transition-all z-[1000000] cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={36} className="stroke-[2]" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-white/15 transition-all z-[1000000] cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight size={36} className="stroke-[2]" />
          </button>

          {/* CENTRO: CARTÃO DA IMAGEM POPUP */}
          <div
            className="relative flex-1 flex flex-col items-center justify-center my-auto max-w-4xl max-h-[75vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[68vh] flex items-center justify-center bg-black/40">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* RODAPÉ DO MODAL: TÍTULO EM BRANCO BOLD EMBAIXO */}
          <div className="w-full text-center text-white z-[1000000] pb-2">
            <h3
              className="font-sans text-base sm:text-lg font-bold tracking-wide !text-white"
              style={{ color: "#ffffff" }}
            >
              {images[selectedIndex].title}
            </h3>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
