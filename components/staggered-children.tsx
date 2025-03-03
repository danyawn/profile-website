"use client";

import React from "react";

import { type ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface StaggeredChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childClassName?: string;
}

export function StaggeredChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  childClassName = "",
}: StaggeredChildrenProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Clone children and wrap each in a motion.div
  const staggeredChildren = React.Children.map(children, (child) => {
    return (
      <motion.div variants={itemVariants} className={childClassName}>
        {child}
      </motion.div>
    );
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {staggeredChildren}
    </motion.div>
  );
}
