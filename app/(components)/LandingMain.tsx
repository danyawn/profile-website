"use client";

import { Button } from "@/components/ui/button";
import { Stats } from "@/app/(components)/StatsSection";
import { Services } from "@/app/(components)/ServiceSection";
import { Projects } from "@/app/(components)/ProjectSection";
import { Skills } from "@/app/(components)/SkillsSection";
import { Experience } from "@/app/(components)/ExperienceSection";
import { ContactForm } from "@/app/(components)/ContactFormSection";
import { AnimatedCursor } from "@/components/animated-cursor";
import { Navbar } from "@/app/(components)/NavbarSection";
import GSAPScrollReveal from "@/components/gsap-scroll-reveal";
import DecryptedText from "@/components/decrypted-text";
import ThreadsBackground from "@/app/(components)/ThreadsBackgroundSection";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data";

const Lanyard = dynamic(() => import("@/app/(components)/LanyardSection"), {
  ssr: false,
});

export default function LandingMain() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const scrollToContent = useCallback(() => {
    try {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    } catch (error) {
      console.error("Scroll error:", error);
    }
  }, [reducedMotion]);

  const handleDownloadCV = useCallback(() => {
    try {
      window.open(personalInfo.cv.path, "_blank");
    } catch (error) {
      console.error("Download CV error:", error);
    }
  }, []);

  const handleContactMe = useCallback(() => {
    try {
      const contactMeMessage = encodeURIComponent(
        personalInfo.contact.whatsappMessage
      );
      window.open(
        `https://wa.me/${personalInfo.contact.whatsapp}?text=${contactMeMessage}`,
        "_blank"
      );
    } catch (error) {
      console.error("Contact error:", error);
    }
  }, []);

  const shouldShowAnimations = useMemo(() => !reducedMotion, [reducedMotion]);

  return (
    <main className=" text-white relative overflow-x-hidden">
      {shouldShowAnimations && <ThreadsBackground className="opacity-60" />}

      {isClient && shouldShowAnimations && <AnimatedCursor />}
      <Navbar />

      <motion.section
        ref={targetRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0.1 : 1 }}
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-10 z-10 relative"
          style={isClient && shouldShowAnimations ? { opacity, scale, y } : {}}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              className="mt-16 sm:mt-24 lg:mt-0 text-center lg:text-left"
              initial={
                shouldShowAnimations
                  ? { opacity: 0, x: -50 }
                  : { opacity: 1, x: 0 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reducedMotion ? 0.1 : 0.8,
                delay: reducedMotion ? 0 : 0.2,
              }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4"
                initial={
                  shouldShowAnimations
                    ? { opacity: 0, y: 20 }
                    : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0.1 : 0.8,
                  delay: reducedMotion ? 0 : 0.4,
                }}
              >
                {isClient && shouldShowAnimations ? (
                  <>
                    <DecryptedText
                      text={`I am ${personalInfo.name}`}
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
                        text={personalInfo.title}
                        animateOn="view"
                        speed={60}
                        sequential={true}
                        revealDirection="start"
                        className="text-gradient"
                        encryptedClassName="text-primary/30"
                      />
                    </motion.span>
                  </>
                ) : (
                  <>
                    <span className="text-white">I am {personalInfo.name}</span>
                    <span className="block text-gradient mt-2">
                      {personalInfo.title}
                    </span>
                  </>
                )}
              </motion.h1>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={
                  shouldShowAnimations
                    ? { opacity: 0, y: 20 }
                    : { opacity: 1, y: 0 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reducedMotion ? 0.1 : 0.8,
                  delay: reducedMotion ? 0 : 1,
                }}
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
              initial={
                shouldShowAnimations
                  ? { opacity: 0, scale: 0.8 }
                  : { opacity: 1, scale: 1 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reducedMotion ? 0.1 : 0.8,
                delay: reducedMotion ? 0 : 0.6,
                type: reducedMotion ? "tween" : "spring",
                stiffness: 100,
              }}
            >
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full blur-3xl" />
                <motion.div
                  className="relative aspect-square w-full rounded-2xl overflow-hidden"
                  animate={
                    shouldShowAnimations
                      ? {
                          boxShadow: [
                            "0 0 20px 10px rgba(139, 92, 246, 0.3)",
                            "0 0 20px 15px rgba(139, 92, 246, 0.4)",
                            "0 0 20px 10px rgba(139, 92, 246, 0.3)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 4,
                    repeat: shouldShowAnimations ? Number.POSITIVE_INFINITY : 0,
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

        <motion.button
          className="absolute bottom-4 sm:bottom-10 left-[45%] -translate-x-[50%] cursor-pointer scroll-down-indicator flex justify-center items-center"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: reducedMotion ? 0 : 1.5,
            duration: reducedMotion ? 0.1 : 0.5,
          }}
          whileHover={shouldShowAnimations ? { scale: 1.1 } : {}}
          whileTap={shouldShowAnimations ? { scale: 0.9 } : {}}
        >
          <ChevronDown className="text-primary h-8 w-8 sm:h-10 sm:w-10" />
        </motion.button>
      </motion.section>

      {/* Description Section */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={shouldShowAnimations}
            baseRotation={shouldShowAnimations ? 5 : 0}
            blurStrength={shouldShowAnimations ? 10 : 0}
            containerClassName="text-center max-w-4xl mx-auto"
            textClassName="text-gray-300"
          >
            I help companies transform their digital presence by building
            scalable, accessible, and high-performance web applications that
            deliver exceptional user experiences and robust business value.
          </GSAPScrollReveal>
        </div>
      </section>

      <div className="relative z-20">
        <Stats />
      </div>

      {/* Expertise Highlight Section */}
      <section className="py-16 section-gradient-primary relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <GSAPScrollReveal
            baseOpacity={0}
            enableBlur={shouldShowAnimations}
            baseRotation={shouldShowAnimations ? -2 : 0}
            blurStrength={shouldShowAnimations ? 8 : 0}
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

      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative z-20 overflow-x-hidden">
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <ContactForm />
        {shouldShowAnimations && (
          <section className="relative z-20 w-full flex items-center justify-center">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </section>
        )}
      </div>

      <footer className="relative z-20 mt-20">
        <div className="container mx-auto px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Wayan Danu Tirta
              </h3>
              <GSAPScrollReveal
                baseOpacity={0}
                enableBlur={shouldShowAnimations}
                baseRotation={shouldShowAnimations ? 2 : 0}
                blurStrength={shouldShowAnimations ? 4 : 0}
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
                  <button
                    onClick={() => {
                      try {
                        document
                          .getElementById("services")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } catch (error) {
                        console.error("Footer navigation error:", error);
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      try {
                        document
                          .getElementById("works")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } catch (error) {
                        console.error("Footer navigation error:", error);
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      try {
                        document
                          .getElementById("skills")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } catch (error) {
                        console.error("Footer navigation error:", error);
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      try {
                        document
                          .getElementById("experience")
                          ?.scrollIntoView({ behavior: "smooth" });
                      } catch (error) {
                        console.error("Footer navigation error:", error);
                      }
                    }}
                    className="hover:text-primary transition-colors"
                  >
                    Experience
                  </button>
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
              enableBlur={shouldShowAnimations}
              baseRotation={shouldShowAnimations ? 0 : 0}
              blurStrength={shouldShowAnimations ? 3 : 0}
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
