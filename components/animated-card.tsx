"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { CardWrapper } from "./ui/card-wrapper"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)",
        transition: { duration: 0.2 },
      }}
    >
      <CardWrapper className={className}>{children}</CardWrapper>
    </motion.div>
  )
}

