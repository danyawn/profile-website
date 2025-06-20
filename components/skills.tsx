"use client"

import { useEffect, useRef } from "react";
import { AnimatedSection } from "./animated-section"
import { StaggeredChildren } from "./staggered-children"
import { AnimatedSkillBar } from "./animated-skill-bar"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleEl = titleRef.current;
    const gridEl = skillsGridRef.current;
    if (!titleEl || !gridEl) return;

    // Title animation
    gsap.fromTo(titleEl.querySelector('h2'),
      {
        opacity: 0,
        y: -30,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleEl,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Description animation
    gsap.fromTo(titleEl.querySelector('p'),
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
          trigger: titleEl,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Skills grid animation
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

  const skills = [
    { name: "React", percentage: 92 },
    { name: "CSS", percentage: 90 },
    { name: "NextJS", percentage: 92 },
    { name: "Node.js", percentage: 87 },
    { name: "JavaScript", percentage: 93 },
    { name: "React Native", percentage: 85 },
    { name: "TypeScript", percentage: 90 },
    { name: "AWS", percentage: 70 },
    { name: "UI/UX Design", percentage: 70 },
  ]

  return (
    <AnimatedSection className="py-16" id="skills">
      <div ref={titleRef} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">My Skills</h2>
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

