import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  Baby,
  Smile,
  Users,
  User,
  Heart,
  Shield,
  Brain,
  GraduationCap,
  Handshake,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

export default function EspecialidadesPage() {
  const especialidades = [
    {
      title: "Psicoterapia Infantil",
      paragraph1:
        "Espaço lúdico para expressão de emoções, desenvolvimento socioemocional e fortalecimento de vínculos.",
      paragraph2:
        "Através do brincar, a criança elabora conflitos, medos e angústias. O atendimento inclui orientação aos pais para suporte integral.",
      icon: Baby,
    },
    {
      title: "Psicoterapia para Adolescentes",
      paragraph1:
        "Apoio nos desafios de identidade, autoestima e relações durante esta fase crucial.",
      paragraph2:
        "Um espaço de escuta livre de julgamentos para navegar as transformações físicas, emocionais e sociais da adolescência.",
      icon: Smile,
    },
    {
      title: "Psicoterapia para Jovens Adultos",
      paragraph1:
        "Suporte especializado para a fase de transição entre 18 e 25 anos.",
      paragraph2:
        "Acompanhamento focado nos desafios de entrada na vida adulta: carreira, relacionamentos, independência financeira e construção de identidade.",
      icon: Users,
    },
    {
      title: "Psicoterapia para Adultos",
      paragraph1:
        "Acolhimento para questões passadas, fortalecimento emocional e busca de equilíbrio.",
      paragraph2:
        "Processo de autoconhecimento essencial para lidar com ansiedade, depressão, luto, relacionamentos e desafios profissionais.",
      icon: User,
    },
    {
      title: "Psicoterapia para Idosos",
      paragraph1:
        "Cuidado com as demandas da terceira idade, preservando autonomia e bem-estar.",
      paragraph2:
        "Foco na qualidade de vida, estimulação cognitiva e elaboração de perdas e mudanças típicas desta etapa.",
      icon: Heart,
    },
    {
      title: "Psicoterapia de Casal",
      paragraph1:
        "Melhoria de comunicação, resolução de conflitos e fortalecimento dos vínculos familiares.",
      paragraph2:
        "Intervenção sistêmica para compreender e transformar dinâmicas relacionais que causam sofrimento no grupo familiar.",
      icon: Users,
    },
    {
      title: "Avaliação Psicológica",
      paragraph1:
        "Processos avaliativos com rigor e precisão técnica para diagnóstico e estratégias de cuidado.",
      paragraph2:
        "Utilização de testes padronizados e instrumentos validados para investigar funções cognitivas, personalidade e desenvolvimento com máxima confiabilidade.",
      icon: Shield,
    },
    {
      title: "Avaliação Neuropsicológica",
      paragraph1:
        "Investigação detalhada das funções cognitivas e sua relação com o comportamento.",
      paragraph2:
        "Aplicação de testes padronizados para diagnóstico diferencial de TDAH, TEA, demências e outros quadros, garantindo precisão nos resultados.",
      icon: Brain,
    },
    {
      title: "Reabilitação Cognitiva",
      paragraph1:
        "Treinamento focado na recuperação e otimização de funções mentais.",
      paragraph2:
        "Intervenções personalizadas para melhorar memória, atenção e funções executivas, promovendo autonomia e qualidade de vida.",
      icon: Brain,
    },
    {
      title: "Acolhimento para Mães Atípicas",
      paragraph1:
        "Um espaço de escuta, acolhimento e suporte emocional para mães que vivenciam os desafios e as singularidades da parentalidade atípica.",
      paragraph2:
        "Acompanhamento voltado ao fortalecimento emocional, à elaboração de sobrecargas e à construção de caminhos possíveis no dia a dia.",
      icon: Heart,
    },
    {
      title: "Psicopedagogia",
      paragraph1:
        "Acompanhamento voltado às dificuldades de aprendizagem, organização dos estudos e desenvolvimento de estratégias mais adequadas para cada pessoa.",
      paragraph2:
        "Um olhar integrado para compreender os processos de aprendizagem e favorecer autonomia, confiança e evolução escolar.",
      icon: GraduationCap,
    },
    {
      title: "Orientação Parental",
      paragraph1:
        "Suporte aos responsáveis para compreender comportamentos, fortalecer vínculos e lidar com os desafios presentes na educação dos filhos.",
      paragraph2:
        "Orientações construídas de forma acolhedora e individualizada, respeitando a realidade e as necessidades de cada família.",
      icon: Handshake,
    },
    {
      title: "Avaliação para Cirurgia Bariátrica",
      paragraph1:
        "Avaliação psicológica pré-operatória realizada com ética, escuta qualificada e atenção às particularidades de cada paciente.",
      paragraph2:
        "O processo busca compreender aspectos emocionais e comportamentais importantes para uma preparação mais consciente para a cirurgia.",
      icon: ClipboardCheck,
    },
    {
      title: "Avaliação para Vasectomia",
      paragraph1:
        "Avaliação psicológica realizada com acolhimento, responsabilidade técnica e respeito ao momento de decisão do paciente.",
      paragraph2:
        "O processo oferece um espaço de reflexão e escuta, contribuindo para uma escolha consciente e segura.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <div>
      {/* 1. HERO BANNER ESPECIALIDADES */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            NOSSAS ESPECIALIDADES
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Cuidado Integral
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#787F74] font-light max-w-xl mx-auto leading-relaxed">
            Oferecemos um olhar atento e especializado para cada momento da vida, respeitando a singularidade de cada história.
          </p>
        </div>
      </SectionWrapper>

      {/* 2. GRID DE ESPECIALIDADES (14 CARDS) */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {especialidades.map((esp, i) => {
            const IconComp = esp.icon;
            return (
              <Card
                key={i}
                className="h-full flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-[#EAE8DD] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="space-y-4">
                  {/* ÍCONE EM MOLDURA LEVE */}
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F4EE] border border-[#EAE8DD] flex items-center justify-center text-[#556151] mb-2">
                    <IconComp size={24} strokeWidth={1.5} />
                  </div>

                  {/* TÍTULO EM FONTE SANS-SERIF BOLD */}
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#495045] leading-tight">
                    {esp.title}
                  </h3>

                  {/* 2 PARÁGRAFOS DE TEXTO DA REFERÊNCIA */}
                  <div className="space-y-2.5 text-xs sm:text-sm text-[#656C60] font-light leading-relaxed">
                    <p>{esp.paragraph1}</p>
                    <p>{esp.paragraph2}</p>
                  </div>
                </div>

                {/* LINK AGENDAR VISITA COM SETA */}
                <div className="pt-5 mt-6 border-t border-[#F0EFE8]">
                  <Link
                    href="/#contato"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#556151] hover:text-[#3D4439] group"
                  >
                    <span>Agendar visita</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* 3. CTA FINAL: ENCONTRE O APOIO QUE VOCÊ PRECISA */}
      <CTASection
        title="Encontre o apoio que você precisa"
        subtitle="Cada jornada é única. Estamos aqui para caminhar ao seu lado."
        buttonTextPrimary="Agendar Consulta"
      />
    </div>
  );
}
