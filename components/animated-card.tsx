"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { CardWrapper } from "./ui/card-wrapper"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimatedCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: 30 }
      case "down":
        return { x: 0, y: -30 }
      case "left":
        return { x: 30, y: 0 }
      case "right":
        return { x: -30, y: 0 }
      default:
        return { x: 0, y: 30 }
    }
  }

  const directionValues = getDirectionValues()

  const initial = {
    opacity: 0,
    scale: 0.95,
    x: directionValues.x,
    y: directionValues.y,
  }

  const animate = {
    opacity: isInView ? 1 : 0,
    scale: isInView ? 1 : 0.95,
    x: isInView ? 0 : directionValues.x,
    y: isInView ? 0 : directionValues.y,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <CardWrapper>
        {children}
      </CardWrapper>
    </motion.div>
  )
}

