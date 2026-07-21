import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import { Heart, Star, Users } from "lucide-react";

export default function EquipePage() {
  const naniTags = [
    "Psicanálise Clínica",
    "Avaliação Psicológica",
    "ABA / TEA",
    "Avaliação Neuropsicológica",
    "Reabilitação Cognitiva",
    "Crianças e Adolescentes",
    "Jovens Adultos e Adultos",
  ];

  const pedroTags = [
    "Avaliação Neuropsicológica",
    "Psicoterapia Analítica",
    "Avaliação Psicológica",
    "Aconselhamento de Carreira",
    "Supervisão Clínica",
  ];

  const nataliaTags = [
    "Crianças & Adultos",
    "Orientação de Pais",
    "Desenvolvimento",
  ];

  const outrasEspecialidades = [
    {
      title: "Psicólogo Humanista",
      description:
        "Foco no desenvolvimento pessoal e na capacidade inata de crescimento, valorizando a experiência subjetiva e a autenticidade.",
      icon: Heart,
    },
    {
      title: "Psicólogo TCC",
      description:
        "Terapia Cognitivo-Comportamental focada em identificar e modificar padrões de pensamento e comportamento para promover mudanças positivas.",
      icon: Star,
    },
    {
      title: "Psicopedagogo",
      description:
        "Especialista nos processos de aprendizagem, auxiliando crianças e adolescentes a superarem dificuldades escolares e cognitivas.",
      icon: Users,
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER EQUIPE */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            NOSSA EQUIPE
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Profissionais que Cuidam
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Conheça os especialistas dedicados a oferecer um atendimento ético, acolhedor e transformador.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. PERFIL PRINCIPAL: NANI ADRIANA HUTTON IOCHINS */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* FOTO NANI À ESQUERDA */}
          <div className="lg:col-span-5">
            <PlaceholderImage
              src="/img/equipe_nani.jpg"
              alt="Nani Adriana Hutton Iochins"
              aspectRatio="aspect-[4/5]"
              shapeVariant="diagonal-left"
              label="Nani Adriana Hutton Iochins"
              className="w-full shadow-lg"
            />
          </div>

          {/* BIO E DETALHES DE NANI À DIREITA */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#495045] leading-tight">
                Nani Adriana Hutton Iochins
              </h2>
              <p className="text-sm sm:text-base font-medium text-[#6F7A69] mt-1">
                Fundadora & Psicóloga Clínica
              </p>
              <p className="text-xs text-[#9AA096] uppercase tracking-wider mt-0.5 font-light">
                CRP 07/39089
              </p>
            </div>

            {/* BIO NANI (4 PARÁGRAFOS EXATOS DA REFERÊNCIA) */}
            <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-[#656C60] font-light leading-relaxed">
              <p>
                Olá! Sou a Nani, psicóloga clínica e fundadora da Clover Psicologia. A psicologia sempre foi muito mais do que uma escolha profissional para mim — é um propósito de vida.
              </p>
              <p>
                A Psicologia é minha segunda graduação, uma escolha madura que me trouxe a certeza de estar exatamente onde deveria. Já o nome <strong className="font-semibold text-[#495045]">Clover</strong> (trevo) simboliza os pilares do meu trabalho: cada folha representa ética, acolhimento, técnica e presença.
              </p>
              <p>
                Sou especialista em <strong className="font-semibold text-[#495045]">Psicanálise Clínica</strong>, <strong className="font-semibold text-[#495045]">Avaliação Psicológica</strong>, <strong className="font-semibold text-[#495045]">Avaliação Neuropsicológica</strong> e <strong className="font-semibold text-[#495045]">Análise do Comportamento Aplicada (ABA)</strong>, com foco especial no TEA. Atendo <strong className="font-semibold text-[#495045]">Crianças, Adolescentes, Jovens Adultos e Adultos</strong>, além de realizar <strong className="font-semibold text-[#495045]">Reabilitação Cognitiva</strong>. Atualmente, sou mestranda em Saúde e Desenvolvimento Humano, aprofundando meu olhar sobre o ser humano em suas múltiplas dimensões.
              </p>
              <p>
                Fora do consultório, sou casada, mãe de dois meninos adolescentes, os amores da minha vida, e de vários pets. Tenho uma paixão especial por plantas — amo cultivar temperos e orquídeas, e acredito que cuidar do que cresce ao redor também é uma forma de cuidar de si mesmo.
              </p>
            </div>

            {/* TAGS DE ESPECIALIDADES DE NANI */}
            <div className="pt-3 flex flex-wrap gap-2">
              {naniTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F5F4EE] text-[#556151] border border-[#EAE8DD] shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Botão de WhatsApp de Nani (Clínica) */}
            <div className="pt-4">
              <a
                href="https://wa.me/5551985426371?text=Ol%C3%A1%21%20Encontrei%20seu%20contato%20pelo%20site%20da%20cl%C3%ADnica%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-xs hover:shadow-md active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.76.459 3.477 1.334 4.992l-1.417 5.176 5.297-1.389c1.464.799 3.119 1.22 4.773 1.22h.004c5.507 0 9.986-4.479 9.986-9.988 0-2.668-1.039-5.176-2.926-7.063s-4.395-2.931-7.064-2.931zm5.834 14.364c-.244.686-1.423 1.31-1.956 1.391-.497.075-1.139.108-1.841-.116-.426-.135-.972-.313-1.687-.623-2.973-1.288-4.908-4.298-5.056-4.496-.148-.198-1.205-1.603-1.205-3.058 0-1.455.762-2.171 1.032-2.464.27-.293.589-.366.786-.366.197 0 .394.002.564.01.182.008.427-.069.667.508.246.592.836 2.039.909 2.188.074.148.123.321.025.518-.099.198-.148.321-.295.494-.148.173-.31.388-.443.52-.148.148-.303.309-.13.606.173.297.768 1.267 1.647 2.049 1.131 1.006 2.083 1.318 2.38 1.466.297.148.47.123.644-.074.173-.198.746-.867.943-1.164.198-.297.394-.247.665-.148.271.099 1.72.811 2.016.958.296.148.493.222.566.346.074.123.074.714-.17 1.401z" />
                </svg>
                <span>Falar com Nani (WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. PARCEIROS DA CLOVER (2 CARDS LADO A LADO) */}
      <SectionWrapper bg="default">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Parceiros da Clover
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Profissionais que compartilham dos mesmos valores de cuidado, ética e escuta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* CARD 1: PEDRO ZUGNO MOREIRA */}
          <Card className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EAE8DD] flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Foto Pedro */}
              <PlaceholderImage
                src="/img/equipe_pedro.png"
                aspectRatio="aspect-[4/3]"
                shapeVariant="standard"
                label="Pedro Zugno Moreira"
                className="w-full"
              />

              <div className="text-center">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045]">
                  Pedro Zugno Moreira
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#6F7A69] mt-0.5">
                  Psicólogo Clínico & Avaliador
                </p>
                <p className="text-[11px] text-[#9AA096] uppercase tracking-wider mt-0.5 font-light">
                  CRP 07/34037
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#656C60] font-light leading-relaxed">
                <p>
                  Sou Pedro Moreira, psicólogo clínico especializado em <strong className="font-semibold text-[#495045]">Avaliação Psicológica</strong>, <strong className="font-semibold text-[#495045]">Avaliação Neuropsicológica</strong> e <strong className="font-semibold text-[#495045]">Aconselhamento de Carreira</strong>. Estou aqui para te ajudar a lidar com suas emoções e se conhecer melhor.
                </p>
                <p>
                  Trabalho com a psicoterapia de orientação analítica e acredito que a psicoterapia é uma ferramenta essencial para a manutenção da saúde mental e do bem-estar emocional.
                </p>
                <p>
                  Além disso, trabalho com avaliação psicológica e supervisão clínica para estudantes e profissionais da área, prezando por um trabalho ético, sério e voltado à qualidade e precisão dos processos diagnósticos e intervenções psicológicas.
                </p>
              </div>
            </div>

            {/* Tags Pedro */}
            <div className="pt-3 flex flex-wrap gap-2 border-t border-[#F0EFE8] mb-4">
              {pedroTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#F5F4EE] text-[#556151] border border-[#EAE8DD]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* WhatsApp do Pedro */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/?text=Ol%C3%A1%21%20Encontrei%20seu%20contato%20pelo%20site%20da%20cl%C3%ADnica%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-xs hover:shadow-md active:scale-95 w-full justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.76.459 3.477 1.334 4.992l-1.417 5.176 5.297-1.389c1.464.799 3.119 1.22 4.773 1.22h.004c5.507 0 9.986-4.479 9.986-9.988 0-2.668-1.039-5.176-2.926-7.063s-4.395-2.931-7.064-2.931zm5.834 14.364c-.244.686-1.423 1.31-1.956 1.391-.497.075-1.139.108-1.841-.116-.426-.135-.972-.313-1.687-.623-2.973-1.288-4.908-4.298-5.056-4.496-.148-.198-1.205-1.603-1.205-3.058 0-1.455.762-2.171 1.032-2.464.27-.293.589-.366.786-.366.197 0 .394.002.564.01.182.008.427-.069.667.508.246.592.836 2.039.909 2.188.074.148.123.321.025.518-.099.198-.148.321-.295.494-.148.173-.31.388-.443.52-.148.148-.303.309-.13.606.173.297.768 1.267 1.647 2.049 1.131 1.006 2.083 1.318 2.38 1.466.297.148.47.123.644-.074.173-.198.746-.867.943-1.164.198-.297.394-.247.665-.148.271.099 1.72.811 2.016.958.296.148.493.222.566.346.074.123.074.714-.17 1.401z" />
                </svg>
                <span>Falar com Pedro</span>
              </a>
            </div>
          </Card>

          {/* CARD 2: NATÁLIA MENOTTI */}
          <Card className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EAE8DD] flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Foto Natália */}
              <PlaceholderImage
                src="/img/equipe_natalia.png"
                aspectRatio="aspect-[4/3]"
                shapeVariant="standard"
                label="Natália Menotti"
                className="w-full"
              />

              <div className="text-center">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045]">
                  Natália Menotti
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#6F7A69] mt-0.5">
                  Psicóloga Clínica & Orientação de Pais
                </p>
                <p className="text-[11px] text-[#9AA096] uppercase tracking-wider mt-0.5 font-light">
                  CRP 07/34037
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#656C60] font-light leading-relaxed">
                <p>
                  Meu nome é Natália Menotti. Sou psicóloga formada desde 2023 e trabalho com atendimentos voltados para crianças e adultos, acreditando que cada pessoa carrega uma história única que merece ser ouvida com cuidado e respeito.
                </p>
                <p>
                  Na minha prática clínica, busco oferecer um espaço acolhedor, onde seja possível falar sobre sentimentos, dificuldades e também sobre os processos de crescimento e autoconhecimento.
                </p>
                <p>
                  Gosto de trabalhar com a ideia de que somos um conjunto de vários fatores: emoções, história de vida, relações, rotina e experiências. Nem tudo precisa estar perfeitamente alinhado para que a vida funcione bem.
                </p>
                <p>
                  Atualmente também estou iniciando uma pós-graduação voltada para orientação de pais, ampliando meu olhar para o trabalho com famílias e para o desenvolvimento emocional das crianças.
                </p>
              </div>
            </div>

            {/* Tags Natália */}
            <div className="pt-3 flex flex-wrap gap-2 border-t border-[#F0EFE8] mb-4">
              {nataliaTags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#F5F4EE] text-[#556151] border border-[#EAE8DD]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* WhatsApp da Natália */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/?text=Ol%C3%A1%21%20Encontrei%20seu%20contato%20pelo%20site%20da%20cl%C3%ADnica%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors shadow-xs hover:shadow-md active:scale-95 w-full justify-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.76.459 3.477 1.334 4.992l-1.417 5.176 5.297-1.389c1.464.799 3.119 1.22 4.773 1.22h.004c5.507 0 9.986-4.479 9.986-9.988 0-2.668-1.039-5.176-2.926-7.063s-4.395-2.931-7.064-2.931zm5.834 14.364c-.244.686-1.423 1.31-1.956 1.391-.497.075-1.139.108-1.841-.116-.426-.135-.972-.313-1.687-.623-2.973-1.288-4.908-4.298-5.056-4.496-.148-.198-1.205-1.603-1.205-3.058 0-1.455.762-2.171 1.032-2.464.27-.293.589-.366.786-.366.197 0 .394.002.564.01.182.008.427-.069.667.508.246.592.836 2.039.909 2.188.074.148.123.321.025.518-.099.198-.148.321-.295.494-.148.173-.31.388-.443.52-.148.148-.303.309-.13.606.173.297.768 1.267 1.647 2.049 1.131 1.006 2.083 1.318 2.38 1.466.297.148.47.123.644-.074.173-.198.746-.867.943-1.164.198-.297.394-.247.665-.148.271.099 1.72.811 2.016.958.296.148.493.222.566.346.074.123.074.714-.17 1.401z" />
                </svg>
                <span>Falar com Natália</span>
              </a>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* 4. OUTRAS ESPECIALIDADES (3 CARDS LADO A LADO) */}
      <SectionWrapper bg="white">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#495045]">
            Outras Especialidades
          </h2>
          <p className="text-xs sm:text-sm text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Complementando nosso cuidado com abordagens diversificadas para atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outrasEspecialidades.map((esp, i) => {
            const IconComp = esp.icon;
            return (
              <Card
                key={i}
                className="bg-white text-center p-6 sm:p-8 rounded-2xl shadow-sm border border-[#EAE8DD] flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5F4EE] text-[#556151] flex items-center justify-center mb-1">
                  <IconComp size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#495045]">
                  {esp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] font-light leading-relaxed">
                  {esp.description}
                </p>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 5. CTA AGENDE SUA CONSULTA */}
      <CTASection
        title="Agende sua consulta"
        subtitle="Nossa equipe está pronta para receber você com cuidado e atenção."
        buttonTextPrimary="Agendar Visita"
      />
    </div>
  );
}
