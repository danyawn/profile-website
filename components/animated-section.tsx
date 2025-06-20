"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  id,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: 50 };
      case "down":
        return { x: 0, y: -50 };
      case "left":
        return { x: 50, y: 0 };
      case "right":
        return { x: -50, y: 0 };
      default:
        return { x: 0, y: 50 };
    }
  };

  const directionValues = getDirectionValues();

  const initial = {
    opacity: 0,
    x: directionValues.x,
    y: directionValues.y,
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directionValues.x,
    y: isInView ? 0 : directionValues.y,
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
