import React from "react";

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
  shapeVariant?: "diagonal-left" | "diagonal-right" | "standard";
  rounded?: string;
}

export default function PlaceholderImage({
  src,
  alt = "Imagem Clover",
  aspectRatio = "aspect-square",
  className = "",
  label = "Imagem Placeholder",
  shapeVariant = "diagonal-right",
  rounded,
}: PlaceholderImageProps) {
  const shapeClasses = {
    "diagonal-left": "rounded-[40px_14px_40px_14px]",
    "diagonal-right": "rounded-[14px_40px_14px_40px]",
    standard: rounded || "rounded-xl",
  };

  const innerRadiusClass = shapeClasses[shapeVariant];

  return (
    <div
      className={`pt-2.5 px-2.5 pb-4 bg-white ${innerRadiusClass} shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E5E4DB] ${className}`}
    >
      <div className={`relative w-full ${aspectRatio} ${innerRadiusClass} overflow-hidden`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[#EAE8DD]/70 flex flex-col items-center justify-center p-4 text-center shadow-inner">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F1] flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform duration-300">
              <svg
                className="w-5 h-5 text-[#6F7A69]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#787F74] uppercase tracking-wider">
              {label}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
