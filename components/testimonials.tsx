"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useState } from "react"

interface TestimonialProps {
  content: string
  author: string
  position: string
  image: string
  active: boolean
  onClick: () => void
}

function TestimonialCard({ content, author, position, image, active, onClick }: TestimonialProps) {
  return (
    <motion.div
      className={`bg-card rounded-lg p-6 border cursor-pointer transition-all duration-500 ${
        active ? "border-primary scale-100 opacity-100" : "border-primary/20 scale-95 opacity-70"
      }`}
      onClick={onClick}
      whileHover={{ scale: active ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ rotate: [0, -10, 10, -5, 0] }}
        transition={{ duration: 0.5 }}
        className="text-primary mb-4"
      >
        <Quote className="h-8 w-8" />
      </motion.div>
      <p className="text-gray-400 mb-6">{content}</p>
      <div className="flex items-center gap-4">
        <div className="relative overflow-hidden rounded-full h-12 w-12">
          <Image src={image || "https://placehold.co/400x400/8B5CF6/FFFFFF"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      author: "Sarah Johnson",
      position: "CEO at TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Working with Wayan was an absolute pleasure. His attention to detail and creative solutions made our project a success. He consistently delivered high-quality work ahead of schedule.",
    },
    {
      author: "Michael Chen",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Exceptional work! Wayan delivered beyond our expectations and was always responsive to our needs. His technical skills and problem-solving abilities are impressive.",
    },
    {
      author: "Emily Rodriguez",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "Wayan's work on our website redesign was outstanding. He understood our vision perfectly and implemented it with creativity and technical excellence. Highly recommended!",
    },
    {
      author: "David Kim",
      position: "Startup Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=60",
      content:
        "As a startup founder, finding reliable developers is crucial. Wayan exceeded all expectations with his professionalism, communication skills, and technical expertise.",
    },
  ]

  return (
    <AnimatedSection className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Client Testimonials</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take my word for it. Here's what my clients have to say about their experiences working with me.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

