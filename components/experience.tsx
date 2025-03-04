"use client";

import type React from "react";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import { Briefcase, GraduationCap, Users } from "lucide-react";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  isLast?: boolean;
}

function TimelineItem({
  title,
  company,
  period,
  description,
  icon,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(139, 92, 246, 0.3)",
          }}
        >
          {icon}
        </motion.div>
        {!isLast && <div className="w-0.5 grow bg-primary/20 mt-2"></div>}
      </div>
      <div className="bg-card rounded-lg p-6 border border-primary/20 mb-6 flex-1">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-primary text-sm">{period}</span>
        </div>
        <div className="text-sm text-primary/80 mb-4">{company}</div>
        <ul className="text-gray-400 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
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
  const workExperience = [
    {
      title: "Front End Developer",
      company: "Techave.Dev - Yogyakarta",
      period: "Dec 2022 - Present",
      description: [
        "2+ Years experience as a Front-end Developer",
        "Building responsive and interactive web applications",
        "Collaborating with design and backend teams",
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
      <div className="text-center mb-12">
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
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="mr-2 text-primary" size={24} />
            Work Experience
          </h3>
          <div className="ml-2">
            {workExperience.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === workExperience.length - 1}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-primary" size={24} />
            Education
          </h3>
          <div className="ml-2">
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Users className="mr-2 text-primary" size={24} />
          Organizational Experience
        </h3>
        <div className="ml-2">
          {organizations.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              isLast={index === organizations.length - 1}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
