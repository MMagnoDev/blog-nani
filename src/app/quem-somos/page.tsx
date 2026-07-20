import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Heart, UserCheck, Eye, CheckCircle2 } from "lucide-react";

export default function QuemSomosPage() {
  const valores = [
    {
      title: "Ética",
      description: "Compromisso rigoroso com o sigilo, respeito e conduta profissional em todos os atendimentos.",
      icon: ShieldCheck,
    },
    {
      title: "Acolhimento",
      description: "Um espaço seguro e livre de julgamentos para expressar angústias e vivências com calma.",
      icon: Heart,
    },
    {
      title: "Singularidade",
      description: "Respeito à individualidade e ao ritmo único do desenvolvimento de cada sujeito.",
      icon: UserCheck,
    },
    {
      title: "Presença",
      description: "Escuta ativa e qualificada que valida a existência e a história de cada pessoa.",
      icon: Eye,
    },
  ];

  const espacoBullets = [
    "Salas climatizadas e acusticamente isoladas para máxima privacidade",
    "Ambientes especialmente adaptados para atendimentos infantil, adulto e familiar",
    "Recepção acolhedora com espaço de espera reservado e ambiente tranquilo",
    "Localização central em Canoas, com fácil acesso e estacionamento",
  ];

  return (
    <div>
      {/* HERO */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            QUEM SOMOS
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Nossa História
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#787F74] font-light max-w-xl mx-auto">
            Conheça a trajetória da Clover Psicologia e os valores que guiam nosso trabalho.
          </p>
        </div>
      </SectionWrapper>

      {/* HISTÓRIA */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagem placeholder à esquerda */}
          <PlaceholderImage
            aspectRatio="aspect-[4/3]"
            shapeVariant="diagonal-left"
            label="Imagem História Clover"
            className="min-h-[260px] sm:min-h-[340px] md:min-h-[360px]"
          />

          {/* Texto à direita */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
              A Psicologia como Prática de Presença
            </h2>
            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm md:text-base text-[#787F74] font-light leading-relaxed">
              <p>
                A Clover Psicologia nasceu do desejo de criar um refúgio de acolhimento e escuta sensível em Canoas. Acreditamos que a saúde mental se constrói na relação, na presença genuína e no respeito ao tempo e à dor de cada indivíduo.
              </p>
              <p>
                Nossa atuação fundamenta-se na ética e na excelência clínica, unindo constante atualização científica a um olhar profundamente humano. Cada sala, cada atendimento e cada detalhe da nossa estrutura foram desenhados para proporcionar segurança e conforto.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* VALORES (4 CARDS) */}
      <SectionWrapper bg="default">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            PRINCÍPIOS FUNDAMENTAIS
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Nossos Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {valores.map((v, i) => {
            const IconComp = v.icon;
            return (
              <Card key={i} className="text-center flex flex-col items-center p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#B9C1AE]/20 text-[#6F7A69] flex items-center justify-center mb-4 sm:mb-5">
                  <IconComp size={22} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045] mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                  {v.description}
                </p>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* NOSSO ESPAÇO (com bullets) */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
              <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
              CONFORTO & SIGILO
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
              Nosso Espaço
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#787F74] font-light leading-relaxed">
              Pensado nos mínimos detalhes para que sua experiência terapêutica seja agradável, tranquila e inteiramente preservada.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 pt-2">
              {espacoBullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-[#555C51]">
                  <CheckCircle2 size={16} className="text-[#6F7A69] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <PlaceholderImage
            aspectRatio="aspect-[4/3]"
            shapeVariant="diagonal-right"
            label="Ambiente e Salas Clover"
            className="min-h-[260px] sm:min-h-[340px]"
          />
        </div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <CTASection
        title="Venha nos conhecer"
        subtitle="Agende uma visita à nossa clínica ou fale com nossa equipe."
        buttonTextPrimary="Agendar visita"
        buttonTextSecondary="Falar no WhatsApp"
      />
    </div>
  );
}
