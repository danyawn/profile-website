"use client";

import type React from "react";

import { Code, Globe, Smartphone } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { AnimatedCard } from "./animated-card";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceProps) {
  return (
    <AnimatedCard className="hover:border-primary/40 transition-colors min-h-[200px]">
      <motion.div
        className="text-primary mb-4"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </AnimatedCard>
  );
}

export function Services() {
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
    // {
    //   icon: <Palette size={24} />,
    //   title: "UI/UX Design",
    //   description: "Creating intuitive and engaging user experiences that delight your users.",
    // },
    // {
    //   icon: <Database size={24} />,
    //   title: "Database Design",
    //   description: "Designing efficient database structures for optimal performance and scalability.",
    // },
    // {
    //   icon: <Server size={24} />,
    //   title: "Cloud Services",
    //   description: "Implementing AWS cloud solutions for reliable and scalable infrastructure.",
    // },
  ];

  return (
    <AnimatedSection className="py-16" id="services">
      <div className="text-center mb-12">
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
          />
        ))}
      </div>
    </AnimatedSection>
  );
}
