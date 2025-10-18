"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  href?: string;
  className?: string;
}

export function InfoCard({ icon, title, description, href, className = "" }: InfoCardProps) {
  const content = (
    <>
      <motion.div
        className="text-primary"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="text-gray-400">{description}</div>
      </div>
    </>
  );

  const commonClasses = `contact-item flex items-center gap-4 p-4 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 hover:border-primary/50 transition-all shadow-lg shadow-black/20 ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={commonClasses}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  );
}
