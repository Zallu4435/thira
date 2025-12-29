"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Check if element is already in viewport
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight * 0.85;

    // Set initial position based on direction
    const initialState: any = { opacity: 0 };
    const animateState: any = { opacity: 1 };

    switch (direction) {
      case "up":
        initialState.y = 60;
        animateState.y = 0;
        break;
      case "down":
        initialState.y = -60;
        animateState.y = 0;
        break;
      case "left":
        initialState.x = 60;
        animateState.x = 0;
        break;
      case "right":
        initialState.x = -60;
        animateState.x = 0;
        break;
    }

    // If already in viewport, show immediately with animation
    if (isInViewport) {
      gsap.set(element, initialState);
      gsap.to(element, {
        ...animateState,
        duration: duration * 0.5, // Faster animation if already visible
        delay: delay / 1000,
        ease: "power3.out",
      });
      return;
    }

    gsap.set(element, initialState);

    // Fallback: make visible after 2 seconds if ScrollTrigger doesn't fire
    const fallbackTimeout = setTimeout(() => {
      const currentOpacity = gsap.getProperty(element, "opacity");
      if (currentOpacity === 0 || currentOpacity === null) {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    }, 2000);

    const animation = gsap.to(element, {
      ...animateState,
      duration,
      delay: delay / 1000,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: () => {
          clearTimeout(fallbackTimeout);
        },
      },
    });

    return () => {
      clearTimeout(fallbackTimeout);
      animation?.kill?.();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay, duration]);

  return <div ref={elementRef}>{children}</div>;
}
