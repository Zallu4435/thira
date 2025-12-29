"use client";

import { 
  Layout, 
  Code2, 
  Store, 
  Server, 
  Search, 
  MessageCircle 
} from "lucide-react";
import { services } from "@/lib/constants/services";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card } from "@/components/common";

const iconMap: any = {
  layout: Layout,
  code: Code2,
  store: Store,
  server: Server,
  search: Search,
  "message-circle": MessageCircle,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wave-navy mb-4">
              Our <span className="wave-text-gradient">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored for your business needs
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            return (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <Card gradient hover className="group relative p-8 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-wave-navy mb-3 group-hover:text-wave-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover effect decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-wave-cyan/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
