"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label?: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
      whileHover={{
        scale: 1.1,
        backgroundColor: "rgba(139, 92, 246, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
