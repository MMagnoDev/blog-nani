import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  style,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide shadow-xs hover:shadow-md active:scale-95";

  const variants = {
    primary: "bg-[#6F7A69] text-white hover:bg-[#5E6859]",
    outline: "border border-[#6F7A69] text-[#6F7A69] bg-transparent hover:bg-[#6F7A69] hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={combinedClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} style={style}>
      {children}
    </button>
  );
}
