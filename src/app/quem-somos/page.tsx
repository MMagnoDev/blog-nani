import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { ShieldCheck, Heart, Sparkles, Eye, Check } from "lucide-react";

export default function QuemSomosPage() {
  const valores = [
    {
      title: "Ética",
      description: "Compromisso absoluto com o sigilo, a responsabilidade técnica e o respeito à dignidade humana.",
      icon: ShieldCheck,
    },
    {
      title: "Acolhimento",
      description: "Criação de um ambiente seguro e livre de julgamentos, onde cada pessoa se sinta verdadeiramente ouvida.",
      icon: Heart,
    },
    {
      title: "Singularidade",
      description: "Respeito à individualidade de cada sujeito, compreendendo que cada ritmo de desenvolvimento é único.",
      icon: Sparkles,
    },
    {
      title: "Presença",
      description: "Escuta ativa e qualificada que valida a existência e a história de cada pessoa.",
      icon: Eye,
    },
  ];

  const espacoBullets = [
    "Salas climatizadas e com isolamento acústico",
    "Ambientes adequados para atendimento infantil",
    "Recepção acolhedora com café e chás",
    "Localização central e de fácil acesso em Canoas",
  ];

  return (
    <div>
      {/* 1. HERO BANNER - NOSSA HISTÓRIA */}
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
          <p className="text-xs sm:text-sm md:text-base text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Conheça a trajetória da Clover Psicologia e os valores que guiam nosso trabalho.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. A PSICOLOGIA COMO PRÁTICA DE PRESENÇA */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Imagem em formato folha à esquerda */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="bg-white shadow-lg border border-white/60 p-2 block w-full max-w-sm"
              style={{
                borderRadius: "40px 0px 40px 0px",
              }}
            >
              <div
                className="relative w-full aspect-[4/5] overflow-hidden"
                style={{
                  borderRadius: "32px 0px 32px 0px",
                }}
              >
                <img
                  src="/img/primeiro-passo.png"
                  alt="Planta Clover"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Texto descritivo à direita */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#495045] leading-tight">
              A Psicologia como Prática de Presença
            </h2>
            <div className="space-y-4 text-xs sm:text-sm lg:text-base text-[#787F74] font-light leading-relaxed">
              <p>
                A Clover Psicologia nasceu do desejo profundo de criar um espaço onde a saúde mental fosse abordada com a seriedade, o afeto e o respeito que cada história de vida merece.
              </p>
              <p>
                Fundada por Nani Adriana Hutton Iochins, a clínica traz em seu nome — Clover (trevo) — a simbologia de sorte, resiliência e cuidado. Cada folha do trevo representa um pilar fundamental do nosso trabalho: Ética, Acolhimento, Técnica e Presença.
              </p>
              <p>
                Acreditamos que a psicologia não é apenas sobre tratar sintomas, mas sobre oferecer uma escuta qualificada que permita ao indivíduo se reconectar consigo mesmo e construir novos caminhos.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. NOSSOS VALORES */}
      <SectionWrapper bg="default">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Nossos Valores
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Princípios que norteiam cada atendimento e decisão na Clover
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v, i) => {
            const IconComp = v.icon;
            return (
              <Card key={i} className="text-center flex flex-col items-center p-6 bg-white border border-[#EAE8DD] rounded-2xl shadow-xs hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#B9C1AE]/20 text-[#6F7A69] flex items-center justify-center mb-5">
                  <IconComp size={20} />
                </div>
                <h3 className="font-sans text-sm sm:text-base font-bold text-[#495045] mb-2.5">
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

      {/* 4. NOSSO ESPAÇO */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Lado esquerdo: Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#6F7A69]">
              —— NOSSO ESPAÇO ——
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#495045] leading-tight">
              A Psicologia como Prática de Presença
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#787F74] font-light leading-relaxed">
              A Clover Psicologia nasceu do desejo profundo de criar um espaço onde a saúde mental fosse abordada com a seriedade, o afeto e o respeito que cada história de vida merece.
            </p>
            <ul className="space-y-3 pt-2">
              {espacoBullets.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#555C51]">
                  <Check size={16} className="text-[#6F7A69] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lado direito: Staggered grid de imagens */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/img/galeria/sala_de_atendimento_adulto.png"
                alt="Consultório"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
              />
              <img
                src="/img/galeria/ambiente_terapeutico.png"
                alt="Poltrona de atendimento"
                className="w-full aspect-square object-cover rounded-2xl shadow-sm"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="/img/galeria/detalhes_que_acolhem.png"
                alt="Detalhes decoração"
                className="w-full aspect-square object-cover rounded-2xl shadow-sm"
              />
              <img
                src="/img/galeria/espaco_ludico_infantil.png"
                alt="Espaço infantil"
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. CTA - VENHA NOS CONHECER */}
      <section className="relative overflow-hidden py-20 text-center border-t border-[#E5E4DB]">
        {/* Background Image of pot clover */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-center bg-cover filter blur-[1px]"
          style={{
            backgroundImage: "url('/img/primeiro-passo.png')",
          }}
        />
        {/* Sage green overlay */}
        <div className="absolute inset-0 bg-[#6F7A69]/75 z-10" />

        <div className="relative z-20 max-w-3xl mx-auto space-y-5 px-4 text-white">
          <h2 className="font-serif text-2xl sm:text-4xl font-semibold !text-white">
            Venha nos conhecer
          </h2>
          <p className="text-xs sm:text-base !text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            Agende uma visita e conheça nosso espaço e nossa equipe.
          </p>
          <div className="pt-2">
            <Button
              href="/contato"
              variant="primary"
              className="px-6 py-3 !bg-white !text-[#495045] hover:!bg-white/95 transition-colors duration-300 font-medium text-xs sm:text-sm border-0 rounded-full"
              style={{ color: "#495045", backgroundColor: "#ffffff" }}
            >
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
