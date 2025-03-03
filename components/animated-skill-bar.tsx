"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedSkillBarProps {
  name: string
  percentage: number
}

export function AnimatedSkillBar({ name, percentage }: AnimatedSkillBarProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true)
    }
  }, [inView, isAnimated])

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-primary transition-all duration-1500 ease-out ${isAnimated ? "" : "w-0"}`}
          style={{
            width: isAnimated ? `${percentage}%` : "0%",
            transition: "width 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        />
      </div>
    </div>
  )
}

