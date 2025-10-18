"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection from "../../components/animated-section";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data";
import AnimatedTitle from "@/components/animated-title";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  isLast?: boolean;
  index: number;
}

function TimelineItem({
  title,
  company,
  period,
  description,
  icon,
  isLast = false,
  index,
}: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        rotateY: index % 2 === 0 ? -15 : 15,
      },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".timeline-icon"),
      {
        scale: 0,
        rotate: -180,
      },
      {
        scale: 1,
        rotate: 0,
        duration: 0.6,
        delay: index * 0.2 + 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelector(".timeline-card"),
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.2 + 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      el.querySelectorAll(".desc-item"),
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        delay: index * 0.2 + 0.7,
        ease: "power2.out",
        stagger: 0.1,
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
  }, [index]);

  return (
    <motion.div
      ref={itemRef}
      className="flex gap-4"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="timeline-icon w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(139, 92, 246, 0.3)",
          }}
        >
          {icon}
        </motion.div>
        {!isLast && <div className="w-0.5 grow bg-primary/20 mt-2"></div>}
      </div>
      <div className="timeline-card bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/20 mb-6 flex-1 shadow-lg shadow-black/20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-primary text-sm">{period}</span>
        </div>
        <div className="text-sm text-primary/80 mb-4">{company}</div>
        <ul className="text-gray-400 space-y-2">
          {description.map((item, descIndex) => (
            <li key={descIndex} className="desc-item flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Users: <Users size={24} />,
  };

  return (
    <AnimatedSection className="py-16" id="experience">
      <div className="text-center mb-12">
        <AnimatedTitle
          containerClassName="mb-4"
          textClassName="text-3xl font-bold text-gradient"
        >
          Experience & Education
        </AnimatedTitle>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My professional journey, educational background, and organizational
          experiences that have shaped my skills and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center section-title">
            <Briefcase className="mr-2 text-primary" size={24} />
            Work Experience
          </h3>
          <div className="ml-2">
            {experience.workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                icon={iconMap[item.icon]}
                isLast={index === experience.workExperience.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center section-title">
            <GraduationCap className="mr-2 text-primary" size={24} />
            Education
          </h3>
          <div className="ml-2">
            {experience.education.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                icon={iconMap[item.icon]}
                isLast={index === experience.education.length - 1}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center section-title">
          <Users className="mr-2 text-primary" size={24} />
          Organizational Experience
        </h3>
        <div className="ml-2">
          {experience.organizations.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              icon={iconMap[item.icon]}
              isLast={index === experience.organizations.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
