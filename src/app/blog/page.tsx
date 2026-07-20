import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Card from "@/components/Card";
import Button from "@/components/Button";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTASection from "@/components/CTASection";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Saúde Mental na Infância: Sinais de Alerta",
      excerpt: "Como identificar quando mudanças comportamentais em crianças exigem atenção profissional e suporte terapêutico.",
      category: "Infância",
      date: "14 Julho 2026",
    },
    {
      title: "Parentalidade Consciente: O que é?",
      excerpt: "Estratégias para exercer a maternidade e paternidade com maior presença, empatia e alinhamento emocional.",
      category: "Parentalidade",
      date: "02 Julho 2026",
    },
    {
      title: "Ansiedade e Autocuidado no Dia a Dia",
      excerpt: "Pequenas práticas diárias que auxiliam no manejo dos sintomas de ansiedade e promovem paz interior.",
      category: "Bem-Estar",
      date: "20 Junho 2026",
    },
    {
      title: "Neurodiversidade: Compreendendo o TEA",
      excerpt: "Um olhar integrado e acolhedor sobre o Transtorno do Espectro Autista e a importância da intervenção precoce.",
      category: "Neurodiversidade",
      date: "10 Junho 2026",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <SectionWrapper className="pt-12 sm:pt-16 pb-12 sm:pb-16 text-center" bg="default">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-[#6F7A69]">
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
            BLOG & ARTIGOS
            <span className="w-6 sm:w-8 h-[1px] bg-[#6F7A69]/40" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#495045]">
            Reflexões sobre Saúde Mental
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#787F74] font-light max-w-xl mx-auto">
            Conteúdos, orientações e textos informativos produzidos por nossa equipe técnica.
          </p>
        </div>
      </SectionWrapper>

      {/* POSTS GRID */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {posts.map((post, i) => (
            <Card key={i} className="h-full p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <PlaceholderImage
                  aspectRatio="aspect-[16/9]"
                  rounded="rounded-xl"
                  label={`Capa Artigo ${i + 1}`}
                  className="mb-5 sm:mb-6"
                />

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#787F74] mb-3">
                  <span className="inline-flex items-center gap-1 bg-[#B9C1AE]/20 text-[#6F7A69] px-2.5 py-1 rounded-full font-medium text-[11px]">
                    <Tag size={11} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#495045] mb-2.5 sm:mb-3 leading-tight hover:text-[#6F7A69] transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#787F74] leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E4DB]/50 flex justify-end">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6F7A69] hover:underline cursor-pointer group">
                  Ler artigo completo
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Botão Carregar Mais Artigos */}
        <div className="text-center">
          <Button variant="outline" className="w-full sm:w-auto px-8 text-xs sm:text-sm">
            Carregar Mais Artigos
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <CTASection />
    </div>
  );
}
