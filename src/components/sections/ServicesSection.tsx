"use client";

import {
  Layout,
  Code2,
  Store,
  Server,
  Search,
  MessageCircle,
  LucideIcon,
} from "lucide-react";
import { Container, SectionHeading } from "@/components/common";
import { ServiceCard } from "@/components/ui";
import ScrollReveal from "@/components/animations/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  code: Code2,
  store: Store,
  server: Server,
  search: Search,
  "message-circle": MessageCircle,
};

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
  heading?: {
    title: string;
    highlight: string;
    subtitle: string;
  };
}

export default function ServicesSection({
  services,
  heading,
}: ServicesSectionProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        {heading && (
          <ScrollReveal>
            <SectionHeading
              title={heading.title}
              highlight={heading.highlight}
              subtitle={heading.subtitle}
            />
          </ScrollReveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ServiceCard
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

