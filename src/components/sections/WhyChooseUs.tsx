import { Check } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FeatureItem } from "@/components/ui";

const features = [
  {
    title: "Tailored to Your Business",
    description: "Every website is custom-designed to match your brand and business goals",
  },
  {
    title: "Fast Turnaround",
    description: "Get your website live quickly without compromising on quality",
  },
  {
    title: "Local Understanding",
    description: "We understand Kerala market and local business needs",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent one-time payment with no hidden fees",
  },
  {
    title: "Modern Technology",
    description: "Built with latest web technologies for best performance",
  },
  {
    title: "Ongoing Support",
    description: "We're here to help even after your website goes live",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-wave-navy to-wave-deep-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-wave-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-wave-bright-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="text-wave-cyan">Thira</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with local market understanding
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <FeatureItem
                title={feature.title}
                description={feature.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
