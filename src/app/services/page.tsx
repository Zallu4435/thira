import type { Metadata } from "next";
import { Container, SectionHeading, ButtonLink } from "@/components/common";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { generateSEO } from "@/components/common/SEO";

export const metadata: Metadata = generateSEO({
  title: "Our Services",
  description: "Comprehensive web development services for local businesses in Kerala. Custom websites, SEO, hosting, and WhatsApp integration.",
  keywords: ["web development services", "website design Kerala", "custom websites", "SEO services", "business website development"],
});

const mainServices = [
  {
    icon: "layout",
    title: "Custom Website Design",
    description: "Unique designs tailored to your brand identity with modern UI/UX principles. Mobile-responsive layouts that look great on all devices.",
  },
  {
    icon: "code",
    title: "Full-Stack Development",
    description: "React/Next.js frontend with Node.js backend integration. Real-time features like booking systems, live chat, and notifications.",
  },
  {
    icon: "store",
    title: "Business-Specific Solutions",
    description: "Industry-tailored features for salons (booking systems), restaurants (online ordering), gyms (class schedules), and retail shops (product catalogs).",
  },
  {
    icon: "server",
    title: "Domain & Hosting Setup",
    description: "Complete setup including domain registration, secure hosting configuration, SSL certificates, and performance optimization.",
  },
  {
    icon: "search",
    title: "SEO & Performance",
    description: "Fast loading speeds, search engine optimization, Google Business integration, and performance monitoring for better visibility.",
  },
  {
    icon: "message-circle",
    title: "WhatsApp Integration",
    description: "Direct customer communication with chat widgets, automated responses, and seamless integration with your business WhatsApp.",
  },
];

const additionalFeatures = [
  {
    icon: "zap",
    title: "Lightning Fast",
    description: "Optimized for speed with modern web technologies",
  },
  {
    icon: "shield",
    title: "Secure & Reliable",
    description: "SSL certificates and secure hosting included",
  },
  {
    icon: "headphones",
    title: "Ongoing Support",
    description: "We're here to help even after launch",
  },
];

const pricing = [
  {
    title: "Basic",
    description: "Perfect for small businesses",
    features: [
      "5-page website",
      "Mobile responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "1 month support",
    ],
    note: "Starting from custom quote",
  },
  {
    title: "Standard",
    description: "Most popular for growing businesses",
    features: [
      "10-page website",
      "Custom design & branding",
      "Booking/Ordering system",
      "Google Maps integration",
      "Advanced SEO",
      "3 months support",
    ],
    note: "Custom pricing based on requirements",
    popular: true,
  },
  {
    title: "Premium",
    description: "For businesses ready to scale",
    features: [
      "Unlimited pages",
      "Advanced features & integrations",
      "Admin dashboard",
      "Analytics & reporting",
      "Priority support",
      "6 months support",
    ],
    note: "Custom pricing based on requirements",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wave-navy mb-4">
                Our <span className="wave-text-gradient">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Comprehensive web solutions designed to help your business thrive in the digital world
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main Services Grid */}
      <ServicesSection
        services={mainServices}
        heading={{
          title: "What We",
          highlight: "Offer",
          subtitle: "End-to-end web development services tailored for local businesses",
        }}
      />

      {/* Additional Features */}
      <FeaturesSection features={additionalFeatures} />

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Flexible"
              highlight="Pricing"
              subtitle="One-time payment with transparent pricing - no hidden fees"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {pricing.map((plan, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col ${
                  plan.popular 
                    ? "border-wave-cyan shadow-xl scale-105" 
                    : "border-gray-200"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-wave-cyan to-wave-bright-blue text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-wave-navy mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>

                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-wave-cyan flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-500 mb-4 italic">{plan.note}</p>

                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 mt-auto ${
                      plan.popular
                        ? "bg-gradient-to-r from-wave-cyan to-wave-bright-blue text-white hover:shadow-lg"
                        : "bg-wave-white text-wave-navy border-2 border-wave-cyan/20 hover:border-wave-cyan"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto text-sm">
              All packages are customizable based on your specific needs. Contact us for a detailed quote tailored to your business requirements.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-wave-navy to-wave-deep-blue text-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss your project and create a custom solution for your business
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-wave-cyan hover:bg-wave-cyan/90"
                >
                  Contact Us Now
                </ButtonLink>
                <ButtonLink
                  href="/demos"
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/30"
                >
                  View Demos
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
