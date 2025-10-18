"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import AnimatedSection from "../../components/animated-section";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/animated-title";

gsap.registerPlugin(ScrollTrigger);

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const contactEl = contactInfoRef.current;
    const formEl = formRef.current;
    if (!contactEl || !formEl) return;

    gsap.fromTo(contactEl.querySelectorAll('.contact-item'),
      {
        opacity: 0,
        x: -50,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactEl,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(formEl,
      {
        opacity: 0,
        x: 50,
        rotateY: 15
      },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formEl,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(formEl.querySelectorAll('.form-field'),
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3,
        scrollTrigger: {
          trigger: formEl,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatedSection className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <AnimatedTitle
            containerClassName="mb-4"
            textClassName="text-3xl font-bold text-gradient"
          >
            Let's Get In Touch
          </AnimatedTitle>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'm just a message away.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={contactInfoRef}>
            <div className="space-y-6">
              <motion.div
                className="contact-item flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <Phone className="text-primary" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400">+62 82278037765</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <Mail className="text-primary" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">thephantomwarrior02@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-item flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <MapPin className="text-primary" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-400">
                    Maguwoharjo, Kecamatan Depok, Kabupaten Sleman, DI
                    Yogyakarta
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg shadow-black/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-4">
                Follow me on social media or check out my professional profiles
                to see more of my work and connect.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/wayan-danu-tirta-682465251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://profile-yan-danu.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.3)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {isSubmitted ? (
              <motion.div
                className="bg-primary/10 backdrop-blur-lg border border-primary/50 rounded-lg p-6 text-center shadow-lg shadow-black/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <motion.div
                  className="text-primary text-5xl mb-4 mx-auto"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  ✓
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    placeholder="First Name"
                    className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-3 w-full focus:outline-none shadow-lg shadow-black/10 placeholder-gray-400"
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "rgb(139, 92, 246)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    required
                  />
                  <motion.input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-3 w-full focus:outline-none shadow-lg shadow-black/10 placeholder-gray-400"
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "rgb(139, 92, 246)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    required
                  />
                </div>
                <motion.input
                  type="email"
                  placeholder="Email"
                  className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-3 w-full focus:outline-none shadow-lg shadow-black/10 placeholder-gray-400"
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: "rgb(139, 92, 246)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  required
                />
                <motion.textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg p-3 w-full focus:outline-none resize-none shadow-lg shadow-black/10 placeholder-gray-400"
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: "rgb(139, 92, 246)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
