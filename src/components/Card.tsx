import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-8 border border-[#E5E4DB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between ${className}`}
    >
      {children}
    </div>
  );
}
