"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
}

function ProjectCard({
  title,
  description,
  image,
  demoLink,
  githubLink,
  tags,
}: ProjectProps) {
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden group border border-primary/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
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
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-primary/80 text-white px-2 py-1 rounded-full"
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
        {/* <div className="flex gap-4">
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90 flex items-center gap-2"
            >
              <ExternalLink size={16} /> Demo
            </Button>
          </Link>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="text-primary border-primary hover:bg-primary hover:text-white active:bg-primary/90 flex items-center gap-2"
            >
              <Github size={16} /> Code
            </Button>
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}

export function Projects() {
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
      <div className="text-center mb-12">
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
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
