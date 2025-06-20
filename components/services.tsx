"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { Code, Globe, Smartphone } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { AnimatedCard } from "./animated-card";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({ title, description, icon, index }: ServiceProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Card entrance animation
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 60,
        rotateX: 15,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Icon animation
    gsap.fromTo(el.querySelector('.service-icon'),
      {
        scale: 0,
        rotate: -180
      },
      {
        scale: 1,
        rotate: 0,
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div ref={cardRef}>
      <AnimatedCard className="hover:border-primary/40 transition-colors min-h-[200px]">
        <motion.div
          className="service-icon text-primary mb-4"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
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
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    // Title animation
    gsap.fromTo(el.querySelector('h2'),
      {
        opacity: 0,
        y: -30,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Description animation
    gsap.fromTo(el.querySelector('p'),
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Website Design",
      description:
        "I craft custom stunning, user-friendly, and responsive designs tailored to your needs.",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      description:
        "Building fast, secure, and scalable web applications using modern technologies.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with React Native for iOS and Android.",
    },
  ];

  return (
    <AnimatedSection className="py-16" id="services">
      <div ref={titleRef} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">What I Do</h2>
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
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
