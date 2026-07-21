import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "", ...props }: CardProps) {
  const hasPaddingClass = /\bp-\d+|\bpx-\d+|\bpy-\d+|\bp-0\b/.test(className);
  const paddingClass = hasPaddingClass ? "" : "p-6 sm:p-8";

  return (
    <div
      className={`bg-white rounded-2xl border border-[#E5E4DB] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
