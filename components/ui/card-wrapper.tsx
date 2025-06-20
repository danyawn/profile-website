import type React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function CardWrapper({ children, className = "" }: CardWrapperProps) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-lg rounded-xl p-6 
        border border-white/10 shadow-lg
        hover:bg-white/10 hover:border-white/20
        transition-all duration-500 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  );
}
