"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

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

    gsap.set(element, initialState);

    gsap.to(element, {
      ...animateState,
      duration,
      delay: delay / 1000,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: elementRef, dependencies: [direction, delay, duration] });

  return <div ref={elementRef}>{children}</div>;
}
