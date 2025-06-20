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
import GSAPScrollReveal from "@/components/gsap-scroll-reveal";
import AdvancedScrollReveal from "@/components/advanced-scroll-reveal";
import DecryptedText from "@/components/decrypted-text";
import ThreadsBackground from "@/components/threads-background";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Lanyard = dynamic(() => import("@/components/lanyard"), { ssr: false });

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

  // WhatsApp contact number
  const whatsappNumber = "6282278037765";
  // Template message for Contact Me
  const contactMeMessage = encodeURIComponent(
    "Halo Wayan Danu, saya ingin berdiskusi lebih lanjut mengenai project atau kolaborasi."
  );
  // Handler for Contact Me button
  const handleContactMe = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${contactMeMessage}`,
      "_blank"
    );
  };
  // Handler for Send Message (for form, can be reused)
  const sendMessageToWhatsapp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main className=" bg-black text-white relative overflow-x-hidden overflow-y-hidden">
      {/* Animated Background */}
      <ThreadsBackground className="opacity-40" />

      <AnimatedCursor />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0"
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
          className="container mx-auto px-4 sm:px-6 lg:px-10 z-10 relative"
          style={{ opacity, scale, y }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16 sm:mt-24 lg:mt-0 text-center lg:text-left"
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <DecryptedText
                  text="I am Wayan Danu Tirta"
                  animateOn="view"
                  speed={80}
                  sequential={true}
                  revealDirection="start"
                  className="text-white"
                  encryptedClassName="text-primary/50"
                />
                <motion.span
                  className="block text-gradient mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <DecryptedText
                    text="Full-stack Web Developer & Software Engineer"
                    animateOn="view"
                    speed={60}
                    sequential={true}
                    revealDirection="start"
                    className="text-gradient"
                    encryptedClassName="text-primary/30"
                  />
                </motion.span>
              </motion.h1>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                  onClick={handleContactMe}
                >
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={handleDownloadCV}
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative order-first lg:order-last w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
                <motion.div
                  className="relative aspect-square w-full rounded-2xl overflow-hidden"
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
          className="absolute bottom-4 sm:bottom-10  left-[45%] -translate-x-[50%] cursor-pointer scroll-down-indicator flex justify-center items-center"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown className="text-primary h-8 w-8 sm:h-10 sm:w-10" />
        </motion.div>
      </motion.section>

      {/* Description Section */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            containerClassName="text-center max-w-4xl mx-auto"
            textClassName="text-gray-300"
          >
            I help companies transform their digital presence by building
            scalable, accessible, and high-performance web applications that
            deliver exceptional user experiences and robust business value.
          </GSAPScrollReveal>
        </div>
      </section>

      <div className="relative z-10">
        <Stats />
      </div>

      {/* Expertise Highlight Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-purple-500/10 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={-2}
            blurStrength={8}
            containerClassName="text-center max-w-5xl mx-auto"
            textClassName="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            With over 2+ years of experience in web development, I've
            successfully delivered 15+ projects across various industries,
            specializing in modern React ecosystem, cloud architecture, and
            scalable full-stack solutions that drive business growth.
          </GSAPScrollReveal>
        </div>
      </section>

      {/* Services Section with Advanced Reveal */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <AdvancedScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={3}
            blurStrength={8}
            containerClassName="text-center max-w-3xl mx-auto mb-16"
            textClassName="text-2xl md:text-3xl font-bold text-white"
            animationType="word"
            animationDirection="up"
            staggerDelay={0.08}
          >
            What I Do Best
          </AdvancedScrollReveal>
        </div>
      </section>

      {/* Other Sections */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 overflow-x-hidden">
        <Services />

        {/* Projects Section with GSAP Reveal */}
        <section className="py-20">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={4}
            blurStrength={12}
            containerClassName="text-center max-w-4xl mx-auto mb-16"
            textClassName="text-2xl md:text-3xl font-bold text-gradient"
          >
            Featured Projects & Portfolio
          </GSAPScrollReveal>
        </section>

        <Projects />

        {/* Skills Section with Advanced Reveal */}
        <section className="py-20">
          <AdvancedScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={-3}
            blurStrength={10}
            containerClassName="text-center max-w-3xl mx-auto mb-16"
            textClassName="text-2xl md:text-3xl font-bold text-primary"
            animationType="char"
            animationDirection="left"
            staggerDelay={0.03}
          >
            Technical Expertise & Skills
          </AdvancedScrollReveal>
        </section>

        <Skills />

        {/* Experience Section with GSAP Reveal */}
        <section className="py-20">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={15}
            containerClassName="text-center max-w-4xl mx-auto mb-16"
            textClassName="text-2xl md:text-3xl font-bold text-white"
          >
            Professional Journey & Background
          </GSAPScrollReveal>
        </section>

        <Experience />
        {/* <Testimonials /> */}

        {/* Contact Section with GSAP Reveal */}
        <section className="py-20">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={12}
            containerClassName="text-center max-w-3xl mx-auto mb-16"
            textClassName="text-2xl md:text-3xl font-bold text-gradient"
          >
            Let's Work Together
          </GSAPScrollReveal>
        </section>
        <ContactForm />
        {/* Lanyard 3D Section */}
        <section className="relative z-10 w-full  flex items-center justify-center">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20 relative z-10">
        <div className="container mx-auto px-10 py-12">
          {/* Footer Title Section */}
          <section className="text-center mb-12">
            <GSAPScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={1}
              blurStrength={6}
              containerClassName="max-w-4xl mx-auto"
              textClassName="text-xl font-semibold text-gradient mb-4"
            >
              Ready to bring your ideas to life?
            </GSAPScrollReveal>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Wayan Danu Tirta
              </h3>
              <GSAPScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={2}
                blurStrength={4}
                containerClassName=""
                textClassName="text-gray-400 text-sm leading-relaxed"
              >
                Full-stack Web Developer & Software Engineer from Yogyakarta,
                Indonesia. Specializing in scalable web applications and
                innovative digital solutions. Available for freelance projects
                and full-time opportunities.
              </GSAPScrollReveal>
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
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <GSAPScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={0}
              blurStrength={3}
              containerClassName=""
              textClassName="text-gray-400"
            >
              © {new Date().getFullYear()} Wayan Danu Tirta. All rights
              reserved.
            </GSAPScrollReveal>
          </div>
        </div>
      </footer>
    </main>
  );
}
