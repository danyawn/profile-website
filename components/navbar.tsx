"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Simple client-side check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Improved scroll navigation with error handling
  const handleNavClick = useCallback((href: string) => {
    try {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        setIsOpen(false);
        
        // Smooth scroll to element
        targetElement.scrollIntoView({ 
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    } catch (error) {
      console.error("Navigation error:", error);
    }
  }, []);

  // WhatsApp contact handler
  const handleContactClick = useCallback(() => {
    try {
      const whatsappNumber = "6282278037765";
      const contactMeMessage = encodeURIComponent(
        "Halo Wayan Danu, saya ingin berdiskusi lebih lanjut mengenai project atau kolaborasi."
      );
      window.open(
        `https://wa.me/${whatsappNumber}?text=${contactMeMessage}`,
        "_blank"
      );
    } catch (error) {
      console.error("Contact click error:", error);
    }
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#works", label: "Works" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 overflow-x-hidden w-full ${
        scrolled ? "bg-black/90" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full overflow-x-hidden">
          <motion.button
            onClick={() => handleNavClick("#hero")}
            className="flex-shrink-0 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl font-bold text-gradient">
              Wayan Danu
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
            >
              <Button onClick={handleContactClick}>Contact</Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md rounded-b-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut"
              }}
            >
              <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-white hover:text-primary transition-colors block py-2 w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.3 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    delay: navLinks.length * 0.05,
                    duration: 0.3 
                  }}
                >
                  <Button className="w-full" onClick={handleContactClick}>
                    Contact
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
