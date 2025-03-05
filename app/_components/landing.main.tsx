"use client";

import { Button } from "@/components/ui/button";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
// import { Testimonials } from "@/components/testimonials";
import { Experience } from "@/components/experience";
import { ContactForm } from "@/components/contact-form";
import { AnimatedCursor } from "@/components/animated-cursor";
import { Navbar } from "@/components/navbar";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    // Initialize staggered animations for skills
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".progress-bar-animation").forEach((el) => {
      observer.observe(el);
    });

    document.querySelectorAll(".stagger-item").forEach((el, i) => {
      el.setAttribute("style", `animation-delay: ${i * 0.1}s`);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToContent = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // route to cv /cv/resume-dan.pdf
  const handleDownloadCV = () => {
    window.open("/cv/resume-dan.pdf", "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatedCursor />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"
          style={{
            backgroundSize: "400% 400%",
            backgroundPosition: "0% 50%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="container mx-auto px-10 z-10"
          style={{ opacity, scale, y }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-40 md:mt-56 lg:mt-0" // Added margin-top to push content down
            >
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                I am Wayan Danu Tirta
                <motion.span
                  className="block text-gradient mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Front-End Web Developer.
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I help companies solve problems by building accessible and
                inclusive web products and digital experiences. With a passion
                for creating intuitive interfaces and engaging user experiences.
              </motion.p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
                <motion.div
                  className="relative aspect-square max-w-[400px] mx-auto animate-float rounded-2xl overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 20px 10px rgba(139, 92, 246, 0.3)",
                      "0 0 20px 15px rgba(139, 92, 246, 0.4)",
                      "0 0 20px 10px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src="/images/profile_me.jpg"
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer scroll-down-indicator"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown className="text-primary h-10 w-10" />
        </motion.div>
      </motion.section>

      <Stats />

      {/* Other Sections */}
      <div className="container mx-auto px-10">
        <Services />
        <Projects />
        <Skills />
        <Experience />
        {/* <Testimonials /> */}
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Wayan Danu Tirta
              </h3>
              <p className="text-gray-400">
                Front-End Developer based in Yogyakarta, Indonesia. Available
                for freelance work and full-time positions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="hover:text-primary transition-colors"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-primary transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="hover:text-primary transition-colors"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
                <li>AWS Cloud Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>thephantomwarrior02@gmail.com</li>
                <li>+62 82278037765</li>
                <li>Yogyakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Wayan Danu Tirta. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
