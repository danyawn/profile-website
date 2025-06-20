"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Globe,
  User,
  Code,
  Calendar,
  type LucideIcon,
} from "lucide-react";

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
}

// Styling variables
const LANYARD_CONFIG = {
  ropeSegments: 6,
  cardWidth: "w-[90vw] max-w-80 sm:w-[400px]",
  cardHeight: "h-[300px] sm:h-[400px]",
  ropeHeight: "h-8",
  swingDuration: 3,
  swingAngle: 4,
  swingInterval: 4000,
};

// Profile data
const PROFILE_DATA = {
  name: "Wayan Danu Tirta",
  position: "Software Engineer",
  id: "WDT2025",
  year: "2025",
  skills: ["TypeScript", "React", "Node.js", "Python"],
  profileImage: "/images/profile_me.jpg",
};

// Contact data
interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_DATA: ContactItem[] = [
  {
    icon: MapPin,
    label: "Location",
    value: "Yogyakarta, Indonesia",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/wayan-danu-tirta",
    href: "https://www.linkedin.com/in/wayan-danu-tirta-682465251/",
  },
  {
    icon: Globe,
    label: "Website",
    value: "yan-danu.vercel.app",
    href: "https://yan-danu.vercel.app",
  },
];

export default function Lanyard({}: LanyardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSwinging, setIsSwinging] = useState(true);

  // Auto-swing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwinging((prev) => !prev);
    }, LANYARD_CONFIG.swingInterval);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative z-0 w-full min-h-screen flex justify-center items-center overflow-hidden px-4">
      {/* Background container with max dimensions */}
      <div className="relative max-w-[650px] max-h-[700px] w-full min-h-[600px] flex justify-center items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl" />

        {/* Ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Lanyard container */}
        <div className="relative flex flex-col items-center py-6 sm:py-10">
          {/* Lanyard rope */}
          <motion.div
            className="relative"
            animate={{
              rotate: isSwinging ? [-2, 2, -2] : [2, -2, 2],
            }}
            transition={{
              duration: LANYARD_CONFIG.swingDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Attachment point */}
            <div className="w-4 h-4 bg-gray-600 rounded-full mx-auto mb-3 shadow-lg" />

            {/* Rope segments */}
            <div className="flex flex-col items-center space-y-1">
              {Array.from({ length: LANYARD_CONFIG.ropeSegments }).map(
                (_, i) => (
                  <motion.div
                    key={i}
                    className={`w-1 ${LANYARD_CONFIG.ropeHeight} bg-gradient-to-b from-gray-300 to-gray-500 rounded-full shadow-sm`}
                    animate={{
                      rotateZ: isSwinging
                        ? [-(i * 0.25), i * 0.25, -(i * 0.25)]
                        : [i * 0.25, -(i * 0.25), i * 0.25],
                    }}
                    transition={{
                      duration: LANYARD_CONFIG.swingDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.08,
                    }}
                  />
                )
              )}
            </div>

            {/* Lanyard clip */}
            <motion.div
              className="w-6 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-sm mx-auto my-3 shadow-lg"
              animate={{
                rotateZ: isSwinging ? [-1, 1, -1] : [1, -1, 1],
              }}
              transition={{
                duration: LANYARD_CONFIG.swingDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            {/* ID Card */}
            <motion.div
              className={`relative ${LANYARD_CONFIG.cardWidth} ${LANYARD_CONFIG.cardHeight} cursor-pointer`}
              onClick={handleCardClick}
              animate={{
                rotateZ: isSwinging
                  ? [
                      -LANYARD_CONFIG.swingAngle,
                      LANYARD_CONFIG.swingAngle,
                      -LANYARD_CONFIG.swingAngle,
                    ]
                  : [
                      LANYARD_CONFIG.swingAngle,
                      -LANYARD_CONFIG.swingAngle,
                      LANYARD_CONFIG.swingAngle,
                    ],
                y: isSwinging ? [-5, 5, -5] : [5, -5, 5],
              }}
              transition={{
                duration: LANYARD_CONFIG.swingDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="relative w-full h-full transition-transform duration-700"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front side - Profile */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-purple-500/30" />
                      <div className="absolute top-4 right-4 w-20 h-20 border border-gray-600 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border border-gray-600 rounded-lg" />
                    </div>

                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center">
                        <Code className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-400">
                        DEV ID
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full p-4 sm:p-8 text-center">
                      <motion.div
                        className="relative w-24 h-24 mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={PROFILE_DATA.profileImage}
                          alt="Profile"
                          fill
                          className="object-cover rounded-full border-2 border-primary shadow-lg"
                        />
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-20 blur-sm" />
                      </motion.div>

                      <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                        {PROFILE_DATA.name}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-primary font-medium mb-2 sm:mb-3">
                        {PROFILE_DATA.position}
                      </p>

                      <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs text-gray-400 mb-2 sm:mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>ID: {PROFILE_DATA.id}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{PROFILE_DATA.year}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {PROFILE_DATA.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center justify-center space-x-1 text-xs text-gray-500"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-xs sm:text-sm">
                          Click to flip
                        </span>
                        <motion.div
                          animate={{ rotateY: [0, 180, 360] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 border border-gray-500 rounded-sm"
                        />
                      </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500" />
                  </div>
                </div>

                {/* Back side - Contact */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 to-purple-500/30" />
                      <div className="absolute top-4 left-4 w-16 h-16 border border-gray-600 rounded-full" />
                      <div className="absolute bottom-4 right-4 w-20 h-20 border border-gray-600 rounded-lg" />
                    </div>

                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          Contact Info
                        </span>
                      </div>
                      <div className="w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-br from-primary to-purple-500 rounded-full" />
                    </div>

                    <div className="flex flex-col justify-center h-full p-4 sm:p-8 pt-16 sm:pt-20 space-y-3 sm:space-y-4">
                      {CONTACT_DATA.map((contact, index) => {
                        const IconComponent = contact.icon;
                        const content = (
                          <motion.div
                            key={contact.label}
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-pointer"
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            <IconComponent className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary flex-shrink-0" />
                            <span className="text-xs sm:text-sm">
                              {contact.value}
                            </span>
                          </motion.div>
                        );

                        return contact.href ? (
                          <a
                            key={contact.label}
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        );
                      })}

                      <div className="flex justify-center mt-4 sm:mt-6">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-md sm:rounded-lg flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-px p-1.5 sm:p-2">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-0.5 sm:w-1 h-0.5 sm:h-1 ${
                                  Math.random() > 0.5 ? "bg-black" : "bg-white"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-primary" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 sm:mt-8 text-center text-gray-400 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.p
              className="text-xs sm:text-sm mb-1 sm:mb-2"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Interactive ID Card
            </motion.p>
            <p className="text-xs text-gray-500">
              Click card to flip for more information
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
