import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bg?: "default" | "white" | "light" | "soft";
  watermark?: boolean;
  watermarkPosition?: "left" | "right" | "center";
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  bg = "default",
  watermark = false,
  watermarkPosition = "left",
}: SectionWrapperProps) {
  const bgColors = {
    default: "bg-[#FAF9F1]",
    white: "bg-[#FFFFFF]",
    light: "bg-[#AEB5A3]/15",
    soft: "bg-[#B9C1AE]/20",
  };

  const positionClasses = {
    left: "left-[-100px] sm:left-[5%] top-1/2 -translate-y-1/2",
    right: "right-[-100px] sm:right-[5%] top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-12 sm:py-16 md:py-24 lg:py-28 ${bgColors[bg]} ${className}`}
    >
      {/* Local Watermark Background Logo */}
      {watermark && (
        <div
          className={`absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] bg-no-repeat bg-contain pointer-events-none opacity-[0.055] mix-blend-multiply z-0 ${positionClasses[watermarkPosition]}`}
          style={{ backgroundImage: "url('/logo_background.png')" }}
        />
      )}

      {/* Main Content Container above Watermark */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}
