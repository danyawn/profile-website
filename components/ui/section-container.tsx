"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "card" | "glass";
  animated?: boolean;
}

export function SectionContainer({ 
  children, 
  className = "", 
  variant = "default",
  animated = true 
}: SectionContainerProps) {
  const variants = {
    default: "",
    card: "p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg shadow-black/20",
    glass: "p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-2xl"
  };

  const baseClass = variants[variant];
  const Component = animated ? motion.div : "div";

  const animationProps = animated ? {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 }
  } : {};

  return (
    <Component
      className={`${baseClass} ${className}`}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
