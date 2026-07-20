import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { ArrowRight, Activity } from "lucide-react";

export default function EspecialidadesPage() {
  const especialidades = [
    {
      title: "Psicoterapia Infantil",
      description: "Acompanhamento lúdico especializado para o desenvolvimento emocional e comportamental na infância.",
    },
    {
      title: "Psicoterapia para Adolescentes",
      description: "Suporte nas transformações da adolescência, orientação vocacional e manejo de ansiedades da fase.",
    },
    {
      title: "Psicoterapia para Jovens Adultos",
      description: "Auxílio nas transições de vida, escolhas de carreira, independência e construção de identidade.",
    },
    {
      title: "Psicoterapia para Adultos",
      description: "Espaço de autoconhecimento, tratamento de transtornos de humor, ansiedade, estresse e conflitos pessoais.",
    },
    {
      title: "Psicoterapia para Idosos",
      description: "Acompanhamento psicológico na maturidade, valorização do percurso de vida e enfrentamento de perdas.",
    },
    {
      title: "Psicoterapia de Casal",
      description: "Facilitação do diálogo, resolução de conflitos relacionais e fortalecimento do vínculo afetivo.",
    },
    {
      title: "Avaliação Psicológica",
      description: "Processo estruturado de investigação do funcionamento psíquico para subsidiar diagnósticos e condutas.",
    },
    {
      title: "Avaliação Neuropsicológica",
      description: "Investigação detalhada das funções cognitivas como atenção, memória, linguagem e funções executivas.",
    },
    {
      title: "Reabilitação Cognitiva",
      description: "Intervenção focada no treino e recuperação de funções cognitivas comprometidas por lesões ou condições clínicas.",
    },
    {
      title: "Acolhimento para Mães Atípicas",
      description: "Espaço exclusivo de escuta, suporte emocional e acolhimento para mães de crianças neurodivergentes.",
    },
    {
      title: "Psicopedagogia",
      description: "Diagnóstico e intervenção nos processos de aprendizagem e dificuldades no ambiente escolar.",
    },
    {
      title: "Orientação Parental",
      description: "Suporte e estratégias práticas para pais no manejo educativo e emocional dos filhos.",
    },
    {
      title: "Avaliação para Cirurgia Bariátrica",
      description: "Avaliação psicológica e emissão de laudo especializado exigido para procedimentos bariátricos.",
    },
    {
      title: "Avaliação para Vasectomia",
      description: "Acompanhamento e emissão de laudo psicológico conforme exigências regulatórias.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            ÁREAS DE ATUAÇÃO
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Especialidades
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#787F74] font-light max-w-xl mx-auto">
            Atendimento especializado para cada momento da sua vida com acolhimento e embasamento científico.
          </p>
        </div>
      </SectionWrapper>

      {/* GRID DE ESPECIALIDADES */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {especialidades.map((esp, i) => (
            <Card key={i} className="h-full flex flex-col justify-between p-6">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F1] border border-[#E5E4DB] flex items-center justify-center text-[#6F7A69] mb-4 sm:mb-5">
                  <Activity size={18} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045] mb-2.5 sm:mb-3">
                  {esp.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#787F74] leading-relaxed font-light mb-6">
                  {esp.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5E4DB]/50">
                <Link
                  href="/#contato"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#6F7A69] hover:underline group"
                >
                  <span>Agendar visita</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <CTASection />
    </div>
  );
}
