"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import {
  User,
  ShieldCheck,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ZoomIn,
  Share2,
} from "lucide-react";

export default function NossoEspacoPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galeriaCards = [
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

  const estrutura = [
    {
      title: "Acessibilidade",
      description:
        "Prédio com elevadores e estrutura adaptada para pessoas com mobilidade reduzida.",
      icon: User,
    },
    {
      title: "Segurança",
      description:
        "Portaria 24h e monitoramento para sua tranquilidade durante as consultas.",
      icon: ShieldCheck,
    },
    {
      title: "Conforto",
      description:
        "Ambientes climatizados e wi-fi disponível para pacientes e acompanhantes.",
      icon: Star,
    },
    {
      title: "Localização",
      description:
        "No centro de Canoas, próximo a estacionamentos e transporte público.",
      icon: Users,
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % galeriaCards.length));
  }, [selectedIndex, galeriaCards.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + galeriaCards.length) % galeriaCards.length));
  }, [selectedIndex, galeriaCards.length]);

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
    <div>
      {/* 1. HERO BANNER NOSSO ESPAÇO */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            NOSSO ESPAÇO
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Acolhimento que se Sente
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Cada detalhe da nossa clínica foi pensado para que você se sinta confortável e seguro.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. GRID DA GALERIA COM CARDS E DESCRITIVOS (6 CARDS) */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galeriaCards.map((item, idx) => (
            <Card
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-[#EAE8DD] p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
              onClick={() => openLightbox(idx)}
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

                {/* TEXTOS DO CARD */}
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#495045]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* 3. ESTRUTURA COMPLETA (4 CARDS COM ÍCONES) */}
      <SectionWrapper bg="default">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Estrutura Completa
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Tudo o que você precisa para um atendimento de excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {estrutura.map((est, i) => {
            const IconComp = est.icon;
            return (
              <Card
                key={i}
                className="bg-white text-center p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EAE8DD] flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5F4EE] border border-[#EAE8DD] flex items-center justify-center text-[#556151] mb-1">
                  <IconComp size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#495045]">
                  {est.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                  {est.description}
                </p>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 4. CTA VENHA NOS VISITAR */}
      <CTASection
        title="Venha nos visitar"
        subtitle="Estamos de portas abertas para receber você."
        buttonTextPrimary="Agendar Visita"
      />

      {/* MODAL LIGHTBOX FULLSCREEN PARA AS FOTOS DA GALERIA */}
      {selectedIndex !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-6 select-none"
          onClick={closeLightbox}
          style={{ zIndex: 999999 }}
        >
          {/* BARRA SUPERIOR DO MODAL */}
          <div className="w-full flex items-center justify-between text-white z-[1000000] px-2 sm:px-4">
            <span
              className="font-sans text-sm sm:text-base font-medium !text-white"
              style={{ color: "#ffffff" }}
            >
              {selectedIndex + 1}/{galeriaCards.length}
            </span>

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

          {/* SETAS DE NAVEGAÇÃO LATERAL */}
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

          {/* IMAGEM POPUP CENTRALIZADA */}
          <div
            className="relative flex-1 flex flex-col items-center justify-center my-auto max-w-4xl max-h-[75vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl max-h-[68vh] flex items-center justify-center bg-black/40">
              <img
                src={galeriaCards[selectedIndex].src}
                alt={galeriaCards[selectedIndex].title}
                className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* TÍTULO DA FOTO NO RODAPÉ */}
          <div className="w-full text-center text-white z-[1000000] pb-2">
            <h3
              className="font-sans text-base sm:text-lg font-bold tracking-wide !text-white"
              style={{ color: "#ffffff" }}
            >
              {galeriaCards[selectedIndex].title}
            </h3>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
