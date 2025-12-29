import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container, SectionHeading, Card, ButtonLink } from "@/components/common";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/constants/siteConfig";
import { generateSEO } from "@/components/common/SEO";
import ToastProvider from "@/components/ui/ToastProvider";

export const metadata: Metadata = generateSEO({
  title: "Contact Us",
  description: "Get in touch with Thira for your web development needs. Contact us for custom website design and development services in Kerala.",
  keywords: ["contact Thira", "web development contact", "Kerala web design contact", "get website quote"],
});

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.links.phone,
    href: `tel:${siteConfig.links.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: siteConfig.location,
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: siteConfig.hours,
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wave-navy mb-4">
                Get in <span className="wave-text-gradient">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Ready to grow your business online? We'd love to hear from you
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <a href={method.href} className="group block">
                  <Card gradient hover className="h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-wave-navy mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-gray-600">{method.value}</p>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <ToastProvider>
                  <ContactForm />
                </ToastProvider>
              </ScrollReveal>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <div className="bg-gradient-to-br from-wave-navy to-wave-deep-blue text-white p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    We typically respond within 24 hours on business days.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Available for consultation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Free project quotes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span>Quick turnaround</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-wave-navy mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-wave-cyan mt-1">1.</span>
                      <span>Initial consultation call</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wave-cyan mt-1">2.</span>
                      <span>Project scope discussion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wave-cyan mt-1">3.</span>
                      <span>Custom quote based on needs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-wave-cyan mt-1">4.</span>
                      <span>Timeline and next steps</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-wave-navy mb-4">
                Prefer WhatsApp?
              </h2>
              <p className="text-gray-600 mb-8">
                Chat with us directly for quick responses and instant quotes
              </p>
              <ButtonLink
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="bg-[#25D366] hover:bg-[#20ba5a]"
              >
                Start WhatsApp Chat
              </ButtonLink>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
