"use client"

import { useEffect, useRef } from "react";
import AnimatedSection from "../../components/animated-section"
import { AnimatedSkillBar } from "../../components/animated-skill-bar"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data";
import AnimatedTitle from "@/components/animated-title";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const skillsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gridEl = skillsGridRef.current;
    if (!gridEl) return;

    const skillItems = gridEl.querySelectorAll('.skill-item');
    gsap.fromTo(skillItems,
      {
        opacity: 0,
        y: 60,
        rotateX: 45,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridEl,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <AnimatedSection className="py-16" id="skills">
      <div className="text-center mb-12">
        <AnimatedTitle
          containerClassName="mb-4"
          textClassName="text-3xl font-bold text-gradient"
        >
          My Skills
        </AnimatedTitle>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I've spent years honing my skills in web development. Here's an overview of my technical expertise and
          proficiency levels.
        </p>
      </div>
      <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <AnimatedSkillBar name={skill.name} percentage={skill.percentage} />
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

