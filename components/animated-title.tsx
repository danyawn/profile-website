"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTitleProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedTitle({
  children,
  containerClassName = "",
  textClassName = "",
  delay = 0,
  duration = 0.8,
}: AnimatedTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div
        className={textClassName}
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={
          isInView
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 30, filter: "blur(10px)" }
        }
        transition={{
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
