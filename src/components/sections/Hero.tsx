"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants/siteConfig";
import WaveBackground from "@/components/animations/WaveBackground";
import { Badge, ButtonLink } from "@/components/common";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    // Animate title words
    gsap.fromTo(".hero-title-line",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      }
    );

    // Animate subtitle
    gsap.fromTo(".hero-subtitle",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );

    // Animate CTA buttons
    gsap.fromTo(".hero-cta > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, { scope: containerRef });


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
      {/* Animated Wave Background */}
      <WaveBackground />

      {/* Floating elements decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-wave-cyan/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-wave-bright-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-wave-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-8">
            <Badge variant="info" className="bg-white/80 backdrop-blur-sm shadow-lg inline-flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-wave-cyan" />
              <span className="text-sm font-medium text-wave-navy">
                Building Digital Presence for Local Businesses
              </span>
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wave-navy mb-6 leading-tight">
            <span className="block overflow-hidden">
              <span className="inline-block hero-title-line">Ride</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block hero-title-line">the</span>{" "}
              <span className="inline-block wave-text-gradient hero-title-line">Wave</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block hero-title-line">of Growth</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed hero-subtitle">
            Custom websites designed to elevate salons, restaurants, gyms, and local businesses across Kerala
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-cta">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="lg"
              className="group flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </ButtonLink>

            <ButtonLink
              href="/demos"
              variant="outline"
              size="lg"
              className="bg-white border-wave-cyan/20 hover:border-wave-cyan"
            >
              View Our Work
            </ButtonLink>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Fast Turnaround</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Mobile-First Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Local Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wave-cyan/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-wave-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
