"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data";

gsap.registerPlugin(ScrollTrigger);

interface StatProps {
  value: string;
  label: string;
  index: number;
}

function StatItem({ value, label, index }: StatProps) {
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;

    const targetValue = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/\d/g, "");

    gsap.fromTo(
      el.querySelector(".stat-number"),
      {
        innerHTML: "0" + suffix,
        opacity: 0,
        y: 20,
      },
      {
        innerHTML: targetValue + suffix,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      el.querySelector(".stat-label"),
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2 + 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [value, index]);

  return (
    <div ref={statRef} className="text-center">
      <div className="stat-number text-4xl font-bold text-primary mb-2">
        {value}
      </div>
      <div className="stat-label text-sm text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
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
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
