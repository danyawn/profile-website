"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TimelineCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  isLast?: boolean;
}

export function TimelineCard({
  icon,
  title,
  subtitle,
  period,
  description,
  isLast = false,
}: TimelineCardProps) {
  return (
    <motion.div
      className="flex gap-4"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="timeline-icon w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(139, 92, 246, 0.3)",
          }}
        >
          {icon}
        </motion.div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
        )}
      </div>
      <div className="timeline-card bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/20 mb-6 flex-1 shadow-lg shadow-black/20 hover:border-primary/50 transition-all">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-sm text-primary font-medium">{period}</span>
        </div>
        <div className="text-sm text-primary/80 mb-4">{subtitle}</div>
        <ul className="text-gray-400 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="desc-item flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
