"use client";

import {
  Zap,
  Shield,
  Headphones,
  LucideIcon,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/common";
import ScrollReveal from "@/components/animations/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  shield: Shield,
  headphones: Headphones,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Why Choose"
            highlight="Thira"
            subtitle="What makes our service stand out"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-wave-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

