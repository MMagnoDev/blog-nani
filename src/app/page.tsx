import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import Card from "@/components/Card";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import { ArrowRight, User } from "lucide-react";

export default function HomePage() {
  const serviciosData = [
    {
      title: "Psicoterapia Infantil",
      description:
        "Espaço lúdico e seguro para crianças expressarem suas emoções e superarem desafios do desenvolvimento.",
    },
    {
      title: "Psicoterapia Adulto",
      description:
        "Acolhimento para questões emocionais, ansiedade, autoconhecimento e desenvolvimento pessoal.",
    },
    {
      title: "Avaliação Psicológica",
      description:
        "Investigação detalhada e diagnóstica para orientar tratamentos e condutas de forma precisa.",
    },
  ];

  const diferenciaisData = [
    {
      number: "1",
      title: "Equipe multidisciplinar especializada",
      description: "Profissionais experientes e em constante atualização científica.",
    },
    {
      number: "2",
      title: "Ambiente acolhedor e seguro",
      description: "Salas preparadas para garantir conforto e total privacidade.",
    },
    {
      number: "3",
      title: "Atendimento ético e personalizado",
      description: "Planos terapêuticos adaptados às reais necessidades de cada pessoa.",
    },
    {
      number: "4",
      title: "Localização central em Canoas",
      description: "Espaço de fácil acesso, com conveniência e tranquilidade.",
    },
  ];

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 overflow-hidden">
        {/* ULTRA DISCREET WATERMARK LOGO BACKGROUND (Hero: opacity 3.5%) */}
        <div className="absolute -top-16 -left-20 sm:-left-28 w-[800px] sm:w-[1100px] h-[800px] sm:h-[1100px] pointer-events-none opacity-[0.035] mix-blend-multiply z-0">
          <img
            src="/logo_background.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ESQUERDA */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAE8DD]/80 text-[#555C51] text-[11px] sm:text-xs font-medium tracking-wide border border-[#E5E4DB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F7A69]" />
                Cuidar é a nossa natureza
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#495045] leading-[1.18] sm:leading-[1.15] tracking-tight">
                Onde o Cuidado <br />
                <span className="italic font-normal text-[#6F7A69]">Encontra a Escuta</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#787F74] leading-relaxed font-light max-w-lg">
                No coração de Canoas, somos um espaço de acolhimento genuíno, onde cada pessoa encontra o suporte necessário para sua jornada de autoconhecimento.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button href="/#contato" variant="primary" className="gap-2 py-3.5 sm:py-3 text-xs sm:text-sm">
                  Agendar consulta <ArrowRight size={16} />
                </Button>
                <Button href="/quem-somos" variant="outline" className="py-3.5 sm:py-3 text-xs sm:text-sm bg-white/70 hover:bg-white">
                  Conheça nossa história
                </Button>
              </div>
            </div>

            {/* DIREITA */}
            <div className="relative group">
              <PlaceholderImage
                src="/img/perfil_hero.jpg"
                alt="Equipe Clover Psicologia"
                aspectRatio="aspect-[4/3]"
                shapeVariant="diagonal-left"
                className="min-h-[260px] sm:min-h-[340px] md:min-h-[420px] transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FRASE DE IMPACTO */}
      <section className="py-10 sm:py-16 bg-[#AEB5A3]/15 border-y border-[#E5E4DB] text-center relative z-10">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-3 sm:space-y-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FAF9F1] border border-[#6F7A69]/40 flex items-center justify-center text-[#6F7A69] shadow-xs">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8.5 9 10 10.5 11C9 12 7.5 13.5 7.5 15.5C7.5 18 9.5 20 12 20C14.5 20 16.5 18 16.5 15.5C16.5 13.5 15 12 13.5 11C15 10 16.5 8.5 16.5 6.5C16.5 4 14.5 2 12 2Z" opacity="0.3"/>
              <path d="M12 4A4 4 0 1 0 12 12A4 4 0 1 0 12 4Z" fill="currentColor"/>
            </svg>
          </div>
          <p className="font-serif text-lg sm:text-2xl md:text-4xl italic text-[#495045] leading-relaxed font-normal">
            “Escutar é também oferecer presença. Cuidar da mente é também se permitir ser escutado.”
          </p>
        </div>
      </section>

      {/* SERVIÇOS (3 CARDS) */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        {/* ULTRA DISCREET WATERMARK LOGO BACKGROUND (Serviços: opacity 3%) */}
        <div className="absolute top-1/2 -right-40 sm:-right-60 -translate-y-1/2 w-[1000px] sm:w-[1300px] h-[1000px] sm:h-[1300px] pointer-events-none opacity-[0.03] mix-blend-multiply z-0">
          <img
            src="/logo_background.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
              <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
              NOSSOS SERVIÇOS
              <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
              Cuidado Integral para <br className="hidden sm:inline" /> Todas as Fases
            </h2>
            <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
              Oferecemos um olhar atento e especializado para cada momento da vida, respeitando a singularidade de cada história.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {serviciosData.map((service, idx) => (
              <Card key={idx} className="h-full flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 p-6 sm:p-8 bg-white/95 backdrop-blur-xs">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF9F1] border border-[#E5E4DB] flex items-center justify-center text-[#6F7A69] mb-5 sm:mb-6 group-hover:bg-[#6F7A69] group-hover:text-white transition-colors duration-300">
                    <User size={20} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045] mb-2.5 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#787F74] leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>
                <div>
                  <Button
                    href="/especialidades"
                    variant="outline"
                    className="w-full justify-between group-hover:border-[#6F7A69] py-2.5 text-xs"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <SectionWrapper id="equipe" bg="white">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            NOSSA EQUIPE
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Profissionais que Cuidam
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Conheça os especialistas dedicados a oferecer um atendimento ético, acolhedor e transformador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ESQUERDA */}
          <PlaceholderImage
            aspectRatio="aspect-[4/5]"
            shapeVariant="diagonal-right"
            label="Foto Nani Adriana Hutton Iochins"
            className="min-h-[280px] sm:min-h-[360px] md:min-h-[420px]"
          />

          {/* DIREITA */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#555C51] bg-[#EAE8DD] px-3.5 py-1 rounded-full border border-[#E5E4DB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6F7A69]" />
                Fundadora
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045] mt-3 sm:mt-4 mb-2.5 sm:mb-3">
                Nani Adriana Hutton Iochins
              </h3>
            </div>

            <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm text-[#787F74] leading-relaxed font-light">
              <p>
                “Olá! Sou a Nani, psicóloga clínica e fundadora da Clover Psicologia. A psicologia sempre foi muito mais do que uma escolha profissional para mim — é um propósito de vida.”
              </p>
              <p>
                “A Psicologia é minha segunda graduação, uma escolha madura que me trouxe a certeza de estar exatamente onde deveria. Já o nome <strong className="font-semibold text-[#495045]">Clover</strong> (trevo) simboliza os pilares do meu trabalho: ética, técnica, afeto e esperança — um lembrete constante do compromisso de oferecer um espaço onde cada paciente possa florescer em seu próprio tempo.”
              </p>
            </div>

            {/* 2 COLUNAS DE DETALHES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 border-t border-[#E5E4DB]">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-semibold text-[#495045] mb-0.5 sm:mb-1">
                  Ética
                </h4>
                <p className="text-xs text-[#787F74]">
                  Compromisso e sigilo absoluto
                </p>
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-semibold text-[#495045] mb-0.5 sm:mb-1">
                  Acolhimento
                </h4>
                <p className="text-xs text-[#787F74]">
                  Escuta ativa sem julgamentos
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/quem-somos" variant="primary" className="w-full sm:w-auto gap-2 text-xs sm:text-sm">
                Conheça nossa equipe completa <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* NOSSO ESPAÇO */}
      <SectionWrapper id="espaco">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            NOSSO ESPAÇO
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Um Ambiente Acolhedor
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Conheça nossa clínica, preparada para oferecer o máximo conforto, segurança e privacidade.
          </p>
        </div>

        {/* Grid 3x3 Placeholders com efeito zoom no hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl">
              <PlaceholderImage
                aspectRatio="aspect-[4/3]"
                shapeVariant="standard"
                label={`Espaço ${i + 1}`}
                rounded="rounded-2xl"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/quem-somos" variant="outline" className="w-full sm:w-auto text-xs sm:text-sm">
            Ver Galeria Completa
          </Button>
        </div>
      </SectionWrapper>

      {/* DIFERENCIAIS (4 CARDS) */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
        {/* ULTRA DISCREET WATERMARK LOGO BACKGROUND (Diferenciais: opacity 3%) */}
        <div className="absolute top-1/2 -left-32 sm:-left-44 -translate-y-1/2 w-[1000px] sm:w-[1300px] h-[1000px] sm:h-[1300px] pointer-events-none opacity-[0.03] mix-blend-multiply z-0">
          <img
            src="/logo_background.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
              Por que escolher a <span className="italic font-normal text-[#6F7A69]">Clover?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
              Porque na Clover você encontra um cuidado humanizado, ético e atento à sua individualidade, com uma equipe preparada para oferecer suporte em um ambiente seguro e acolhedor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {diferenciaisData.map((item) => (
              <Card key={item.number} className="text-center p-6 flex flex-col items-center justify-start group hover:-translate-y-1.5 transition-all duration-300 bg-white/95 backdrop-blur-xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#B9C1AE]/20 font-serif text-xl sm:text-2xl font-semibold text-[#6F7A69] flex items-center justify-center mb-4 group-hover:bg-[#6F7A69] group-hover:text-white transition-colors duration-300">
                  {item.number}
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#495045] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection />
    </div>
  );
}
