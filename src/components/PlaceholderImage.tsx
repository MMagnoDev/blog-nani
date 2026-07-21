import React from "react";

interface PlaceholderImageProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
  shapeVariant?: "diagonal-left" | "diagonal-right" | "standard";
  rounded?: string;
  children?: React.ReactNode;
}

export default function PlaceholderImage({
  src,
  alt = "Imagem Clover",
  aspectRatio = "aspect-[4/3]",
  className = "",
  label = "Imagem Placeholder",
  shapeVariant = "diagonal-left",
  rounded,
  children,
}: PlaceholderImageProps) {
  // Diagonal leaf design with exact sharp 0px corners ("pontas pontudas"):
  // diagonal-left: Top-Left=40px, Top-Right=0px (pointy), Bottom-Right=40px, Bottom-Left=0px (pointy)
  // diagonal-right: Top-Left=0px (pointy), Top-Right=40px, Bottom-Right=0px (pointy), Bottom-Left=40px
  let outerBorderRadius = "40px 0px 40px 0px";
  let innerBorderRadius = "32px 0px 32px 0px";

  if (shapeVariant === "diagonal-right") {
    outerBorderRadius = "0px 40px 0px 40px";
    innerBorderRadius = "0px 32px 0px 32px";
  } else if (shapeVariant === "standard") {
    outerBorderRadius = rounded || "16px";
    innerBorderRadius = "10px";
  }

  return (
    /* Outer card — white frame with clean rounded corners */
    <div
      className={`bg-white shadow-[0_6px_24px_rgba(0,0,0,0.07)] border border-white/80 block w-full`}
      style={{
        borderRadius: outerBorderRadius,
        padding: "6px",
      }}
    >
      {/* Inner image container */}
      <div
        className={`relative w-full ${aspectRatio} overflow-hidden ${className}`}
        style={{
          borderRadius: innerBorderRadius,
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[#EAE8DD]/70 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F1] flex items-center justify-center mb-2 shadow-sm">
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
        {children}
      </div>
    </div>
  );
}



