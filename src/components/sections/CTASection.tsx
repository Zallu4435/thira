"use client";

import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ButtonLink } from "@/components/common";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-wave-cyan/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-wave-bright-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wave-navy mb-6">
              Ready to <span className="wave-text-gradient">Grow Your Business</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let's create a stunning website that brings more customers to your business
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                className="group flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ButtonLink>

              <ButtonLink
                href="tel:+919876543210"
                variant="outline"
                size="lg"
                className="bg-white border-wave-cyan/20 hover:border-wave-cyan"
              >
                Call Us Now
              </ButtonLink>
            </div>

            {/* Trust badge */}
            <p className="mt-10 text-sm text-gray-500">
              ⚡ Quick response • 🎨 Custom designs • 💰 Transparent pricing
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
