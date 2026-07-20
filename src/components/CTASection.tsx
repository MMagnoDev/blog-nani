"use client";

import React from "react";
import Button from "./Button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonTextPrimary?: string;
  buttonTextSecondary?: string;
}

export default function CTASection({
  title = "Pronto para dar o primeiro passo?",
  subtitle = "Agende uma conversa inicial e descubra como a psicoterapia pode transformar sua relação consigo mesmo e com o mundo.",
  buttonTextPrimary = "Agendar pelo WhatsApp",
  buttonTextSecondary = "Enviar E-mail",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-36 border-y border-[#E5E4DB] flex items-center justify-center min-h-[420px] sm:min-h-[480px] [clip-path:inset(0)]">
      {/* Fixed Stationary Background Image Layer */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/img/primeiro-passo.png')",
        }}
      >
        {/* Soft Light Sage Green Overlay */}
        <div className="absolute inset-0 bg-[#A2AC98]/75 backdrop-blur-[0.5px]" />
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20 text-center text-white">
        <h2
          style={{ color: "#ffffff" }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold !text-white tracking-tight mb-3 sm:mb-4 drop-shadow-xs"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{ color: "rgba(255, 255, 255, 0.95)" }}
            className="text-xs sm:text-base md:text-lg !text-white/95 max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed drop-shadow-xs"
          >
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mt-6">
          <Button
            href="https://wa.me/5551999999999"
            variant="primary"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-white text-[#6F7A69] hover:bg-white/90 hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm border-0"
          >
            {buttonTextPrimary}
          </Button>
          <Button
            href="mailto:contato@cloverpsicologia.com.br"
            variant="outline"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 border border-white text-white bg-white/20 hover:bg-white/30 hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm"
          >
            {buttonTextSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
