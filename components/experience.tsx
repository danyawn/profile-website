"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection from "./animated-section";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    // Timeline item animation
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

    // Icon animation
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

    // Card content animation
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

    // Description items animation
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
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    // Main title animation
    gsap.fromTo(
      el.querySelector("h2"),
      {
        opacity: 0,
        y: -40,
        scale: 0.8,
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
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section titles animation
    gsap.fromTo(
      el.querySelectorAll(".section-title"),
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        stagger: 0.2,
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

  const workExperience = [
    {
      title: "Front-end Web Developer",
      company: "Techave.Dev - Yogyakarta",
      period: "Dec 2022 - Present",
      description: [
        "2+ Years experience as a Front-end Web Developer",
        "Building scalable, responsive and interactive web applications",
        "Developing frontend solutions using modern technologies",
        "Collaborating with design teams and implementing comprehensive software solutions",
      ],
      icon: <Briefcase size={24} />,
    },
    {
      title: "Intern Remote AWS Cloud Data Engineer",
      company: "RevoU - Bandung",
      period: "Jan 2024 - May 2024",
      description: [
        "Successfully completed the internship from start to finish",
        "Completed final project data analysis with cases provided by mentors",
        "Implemented AWS cloud solutions for data processing",
      ],
      icon: <Briefcase size={24} />,
    },
    {
      title: "Full Stack Website Developer Intern",
      company: "Binar Academy - Tangerang, Banten",
      period: "Feb 2023 - Jun 2023",
      description: [
        "Successfully completed 8 chapters of the internship program",
        "Developed a full-stack E-Ticketing website with a team",
        "Created ticket search functionality and front-end components",
        "Implemented passenger data input interface",
      ],
      icon: <Briefcase size={24} />,
    },
  ];

  const education = [
    {
      title: "Bachelor of Informatics Engineering (S1)",
      company: "Universitas Pembangunan Nasional Veteran Yogyakarta",
      period: "Sep 2020 - Apr 2025",
      description: [
        "Pursuing Bachelor's degree in Informatics Engineering with focus on software development",
        "Studying advanced programming concepts, data structures, and algorithms",
        "Gaining comprehensive understanding of software engineering principles",
        "Developing expertise in web technologies, database systems, and software architecture",
        "Maintaining a GPA of 3.69 (2025)",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Certificate of Junior Web Developer",
      company: "BNSP - Yogyakarta",
      period: "Jan 2023 - Jan 2027",
      description: [
        "Successfully completed the Junior Web Developer course",
        "Learned web development fundamentals",
        "Built responsive websites using HTML, CSS, and JavaScript",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "React JS Web Frontend Bootcamp",
      company: "Sanber Code - Bandung",
      period: "Oct 2022 - Present",
      description: [
        "Successfully completed the intensive 1-month bootcamp",
        "Learned React.js fundamentals and advanced concepts",
        "Built multiple projects using React.js",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "JavaScript Programming Bootcamp",
      company: "Dicoding - Bandung",
      period: "Sep 2023 - Oct 2023",
      description: [
        "Completed the Basic JavaScript Programming class before the deadline",
        "Achieved good scores on the final test",
        "Built applications using JavaScript",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "React Web Application Development",
      company: "Dicoding - Bandung",
      period: "Nov 2023",
      description: [
        "Successfully created a Personal Notes application using React.js",
        "Passed the course with good grades",
        "Implemented CRUD functionality in the application",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Website Developer Bootcamp",
      company: "Battistrada Developer - Yogyakarta",
      period: "Apr 2022",
      description: [
        "Successfully completed the Ramadhan Course at Batdev Academy",
        "Learned web development fundamentals",
        "Built responsive websites using HTML, CSS, and JavaScript",
      ],
      icon: <GraduationCap size={24} />,
    },
    {
      title: "High School Diploma (MIPA)",
      company: "SMA Negeri 1 Lempuing - South Sumatra",
      period: "Jun 2017 - Jun 2020",
      description: [
        "Successfully graduated from high school with good grades",
        "Specialized in Mathematics and Natural Sciences (MIPA)",
      ],
      icon: <GraduationCap size={24} />,
    },
  ];

  const organizations = [
    {
      title: "Head of Media and Information Department",
      company: "Himpunan Mahasiswa Informatika - Yogyakarta",
      period: "Jun 2022 - Dec 2023",
      description: [
        "Led the Media and Information Department effectively",
        "Provided direction and created work programs for one period",
        "Managed team members and coordinated department activities",
      ],
      icon: <Users size={24} />,
    },
    {
      title: "KOMINFO Staff",
      company: "Himpunan Mahasiswa Informatika - Yogyakarta",
      period: "Jan 2021 - Dec 2021",
      description: [
        "Successfully executed daily work programs",
        "Actively participated in organizational activities",
        "Supported communication and information dissemination",
      ],
      icon: <Users size={24} />,
    },
  ];

  return (
    <AnimatedSection className="py-16" id="experience">
      <div className="text-center mb-12" ref={titleRef}>
        <h2 className="text-3xl font-bold mb-4 text-gradient">
          Experience & Education
        </h2>
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
            {workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === workExperience.length - 1}
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
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === education.length - 1}
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
          {organizations.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === organizations.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
