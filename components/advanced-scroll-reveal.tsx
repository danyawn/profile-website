import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AdvancedScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  animationType?: 'word' | 'line' | 'char';
  staggerDelay?: number;
  animationDirection?: 'up' | 'down' | 'left' | 'right';
}

const AdvancedScrollReveal: React.FC<AdvancedScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  animationType = 'word',
  staggerDelay = 0.05,
  animationDirection = 'up',
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    
    if (animationType === 'char') {
      return text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        return (
          <span className="inline-block word" key={index}>
            {char}
          </span>
        );
      });
    } else if (animationType === 'line') {
      return text.split('\n').map((line, index) => (
        <span className="block word" key={index}>
          {line}
        </span>
      ));
    } else {
      // Default word split
      return text.split(/(\s+)/).map((word, index) => {
        if (word.match(/^\s+$/)) return word;
        return (
          <span className="inline-block word" key={index}>
            {word}
          </span>
        );
      });
    }
  }, [children, animationType]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // Container rotation animation
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        ease: "none",
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>(".word");

    // Direction-based initial positions
    let initialX = 0;
    let initialY = 0;
    
    switch(animationDirection) {
      case 'left':
        initialX = -50;
        break;
      case 'right':
        initialX = 50;
        break;
      case 'up':
        initialY = 30;
        break;
      case 'down':
        initialY = -30;
        break;
    }

    // Word opacity and position animation
    gsap.fromTo(
      wordElements,
      { 
        opacity: baseOpacity, 
        willChange: "opacity, transform",
        x: initialX,
        y: initialY,
        scale: 0.8,
      },
      {
        ease: "power2.out",
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        stagger: staggerDelay,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: 1,
        },
      }
    );

    // Word blur animation
    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: `blur(${blurStrength}px)` },
        {
          ease: "none",
          filter: "blur(0px)",
          stagger: staggerDelay,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: 1,
          },
        }
      );
    }

    // Additional hover effects for individual words
    wordElements.forEach((wordEl) => {
      wordEl.addEventListener('mouseenter', () => {
        gsap.to(wordEl, {
          scale: 1.1,
          color: '#8B5CF6',
          duration: 0.3,
          ease: "power2.out"
        });
      });

      wordEl.addEventListener('mouseleave', () => {
        gsap.to(wordEl, {
          scale: 1,
          color: 'inherit',
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
    staggerDelay,
    animationDirection,
  ]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default AdvancedScrollReveal;
