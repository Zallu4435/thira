import type { Metadata } from "next";
import { Container, SectionHeading, Card, ButtonLink } from "@/components/common";
import { DemoCard } from "@/components/ui";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { generateSEO } from "@/components/common/SEO";

export const metadata: Metadata = generateSEO({
  title: "Demo Websites",
  description: "Explore our demo websites showcasing different business types. See examples of salon, restaurant, gym, and retail websites.",
  keywords: ["demo websites", "website examples", "portfolio", "web design examples", "Kerala website demos"],
});

const demos = [
  {
    title: "Salon & Beauty Parlor",
    description: "Complete booking system, service gallery, and customer reviews",
    icon: "scissors",
    features: ["Online booking system", "Service gallery", "Price list", "Customer reviews", "Staff profiles", "WhatsApp integration"],
    comingSoon: true,
  },
  {
    title: "Restaurant & Food Shop",
    description: "Menu display, online ordering integration, and location map",
    icon: "utensils",
    features: ["Digital menu", "Online ordering", "Table reservation", "Location map", "Opening hours", "Special offers"],
    comingSoon: true,
  },
  {
    title: "Fitness & Gym",
    description: "Class schedules, trainer profiles, and membership management",
    icon: "dumbbell",
    features: ["Class schedules", "Trainer profiles", "Membership plans", "Workout programs", "Progress tracking", "Event calendar"],
    comingSoon: true,
  },
  {
    title: "Retail Shop",
    description: "Product catalog, inventory display, and contact information",
    icon: "shopping-bag",
    features: ["Product catalog", "Category browsing", "Price display", "Store location", "Contact info", "Opening hours"],
    comingSoon: true,
  },
];

export default function DemosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wave-navy mb-4">
                Our <span className="wave-text-gradient">Work</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Explore demo websites showcasing our capabilities across different business types
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Demos Grid */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Demo"
              highlight="Showcases"
              subtitle="See how we can transform your business online"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {demos.map((demo, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <DemoCard
                  title={demo.title}
                  description={demo.description}
                  icon={demo.icon}
                  features={demo.features}
                  comingSoon={demo.comingSoon}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <Card gradient hover={false} className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-2">
                🚧 Demo websites are currently under development
              </p>
              <p className="text-gray-600 text-sm">
                We're crafting beautiful demo experiences for each business type. Check back soon or contact us to discuss your project!
              </p>
            </Card>
          </ScrollReveal>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="What You'll"
              highlight="Get"
              subtitle="Every demo showcases these essential features"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
            {[
              "Mobile-responsive design",
              "Fast loading speeds",
              "WhatsApp integration",
              "Google Maps location",
              "Contact forms",
              "SEO optimized",
              "Modern animations",
              "Professional aesthetics",
              "Easy navigation",
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 30}>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <svg
                    className="w-5 h-5 text-wave-cyan flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-wave-navy mb-4">
                Ready for Your Own Website?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Let's create something amazing for your business
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                >
                  Start Your Project
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  variant="outline"
                  size="lg"
                  className="bg-white border-wave-cyan/20 hover:border-wave-cyan"
                >
                  View Services
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
