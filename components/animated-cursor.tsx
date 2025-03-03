"use client"

import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="cursor-glow hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        boxShadow: "0 0 20px 10px rgba(139, 92, 246, 0.3)",
      }}
    />
  )
}

