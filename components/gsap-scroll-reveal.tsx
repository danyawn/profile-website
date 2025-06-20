"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

interface GSAPScrollRevealProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
  baseOpacity?: number;
  enableBlur?: boolean;
  baseRotation?: number;
  blurStrength?: number;
}

export default function GSAPScrollReveal({
  children,
  containerClassName = "",
  textClassName = "",
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 0,
  blurStrength = 10,
}: GSAPScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    const textElement = textRef.current;

    if (!container || !textElement) return;

    let splitText: SplitText | null = null;
    let scrollTrigger: ScrollTrigger | null = null;

    try {
      // Try to create SplitText, but fallback gracefully if it fails
      try {
        splitText = new SplitText(textElement, {
          type: "words,chars",
          wordsClass: "split-word",
          charsClass: "split-char",
        });
      } catch (splitError) {
        console.warn("SplitText failed, using fallback animation:", splitError);
      }

      const animationTargets = splitText?.chars || [textElement];

      // Set initial state
      gsap.set(animationTargets, {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
        rotationX: baseRotation,
        transformOrigin: "center bottom",
      });

      // Create scroll-triggered animation
      scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(animationTargets, {
            opacity: 1,
            filter: "blur(0px)",
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: splitText ? 0.03 : 0,
          });
        },
        onLeave: () => {
          gsap.to(animationTargets, {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            rotationX: baseRotation,
            duration: 0.8,
            ease: "power2.out",
            stagger: splitText ? 0.02 : 0,
          });
        },
        onEnterBack: () => {
          gsap.to(animationTargets, {
            opacity: 1,
            filter: "blur(0px)",
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: splitText ? 0.02 : 0,
          });
        },
        onLeaveBack: () => {
          gsap.to(animationTargets, {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            rotationX: baseRotation,
            duration: 0.6,
            ease: "power2.out",
            stagger: splitText ? 0.01 : 0,
          });
        },
      });
    } catch (error) {
      console.error("GSAP ScrollReveal error:", error);
      // Ensure content is visible even if animation fails
      if (textElement) {
        gsap.set(textElement, {
          opacity: 1,
          filter: "none",
          rotationX: 0,
        });
      }
    }

    return () => {
      try {
        if (scrollTrigger) {
          scrollTrigger.kill();
        }
        if (splitText) {
          splitText.revert();
        }
      } catch (cleanupError) {
        console.error("Cleanup error:", cleanupError);
      }
    };
  }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <div ref={textRef} className={textClassName}>
        {children}
      </div>
    </div>
  );
}
