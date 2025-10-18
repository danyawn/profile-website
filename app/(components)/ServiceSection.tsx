"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Code, Globe, Smartphone } from "lucide-react";
import AnimatedSection from "../../components/animated-section";
import AnimatedCard from "../../components/animated-card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data";
import AnimatedTitle from "@/components/animated-title";

gsap.registerPlugin(ScrollTrigger);

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  reducedMotion: boolean;
}

function ServiceCard({
  title,
  description,
  icon,
  index,
  reducedMotion,
}: ServiceProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || reducedMotion) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".service-icon"),
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        delay: index * 0.15 + 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index, reducedMotion]);

  return (
    <div ref={cardRef}>
      <AnimatedCard className="transition-all duration-300 min-h-[200px] hover:shadow-xl">
        <motion.div
          className="service-icon text-primary mb-4"
          initial={{ scale: 1 }}
          whileHover={!reducedMotion ? { scale: 1.1 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </AnimatedCard>
    </div>
  );
}

export function Services() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={24} />,
    Globe: <Globe size={24} />,
    Smartphone: <Smartphone size={24} />,
  };

  return (
    <AnimatedSection className="py-16" id="services">
      <div className="text-center mb-12">
        <AnimatedTitle
          containerClassName="mb-4"
          textClassName="text-3xl font-bold text-gradient"
        >
          Services & Expertise
        </AnimatedTitle>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I offer a wide range of services to help businesses and individuals
          create impactful digital experiences. Here's how I can help you
          succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={iconMap[service.icon]}
            title={service.title}
            description={service.description}
            index={index}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
