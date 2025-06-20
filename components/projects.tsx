"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
  index: number;
}

function ProjectCard({
  title,
  description,
  image,
  demoLink,
  githubLink,
  tags,
  index,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Card animation with stagger
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 80,
        rotateY: 15,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.8,
        delay: (index % 3) * 0.2, // Stagger by row
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Image animation
    gsap.fromTo(el.querySelector('.project-image'),
      {
        scale: 1.2,
        opacity: 0.8
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: (index % 3) * 0.2 + 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Tags animation
    gsap.fromTo(el.querySelectorAll('.tag'),
      {
        opacity: 0,
        scale: 0,
        rotate: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.4,
        delay: (index % 3) * 0.2 + 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
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
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      className="bg-card rounded-lg overflow-hidden group border border-primary/20"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "https://placehold.co/400x300/8B5CF6/FFFFFF"}
          alt={title}
          fill
          className="project-image object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="tag text-xs bg-primary/80 text-white px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    // Title animation
    gsap.fromTo(el.querySelector('h2'),
      {
        opacity: 0,
        y: -40,
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

  const projects = [
    {
      title: "FlyWise E-Ticketing System",
      description:
        "Full-stack e-ticketing solution with search functionality and passenger data management.",
      image: "/projects/flywise.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Car Showcase Website",
      description:
        "A car showcase website with a fully responsive design and a modern look.",
      image: "/projects/car-showcase.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "CSS"],
    },
    {
      title: "AWS Data Analysis Project",
      description:
        "Data analysis project using AWS cloud services for processing and visualizing large datasets.",
      image: "/projects/chatbot-using-aws.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["AWS", "Python", "Data Analysis"],
    },
    {
      title: "Company Profile Website",
      description:
        "A company profile website with a clean and modern design and fully functional.",
      image: "/projects/arahmata-profile.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "Real-Estate Website",
      description:
        "A real-estate website with a fully informative and responsive design.",
      image: "/projects/saeland.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      title: "URL Classification System",
      description:
        "A URL classification system that classifies URLs into Benign or Malicious.",
      image: "/projects/url-classification.png",
      demoLink: "#",
      githubLink: "#",
      tags: ["Python", "Machine Learning"],
    },
  ];

  return (
    <AnimatedSection className="py-16" id="works">
      <div ref={titleRef} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my latest web development projects. Each project demonstrates
          my commitment to creating innovative and user-friendly digital
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </AnimatedSection>
  );
}
