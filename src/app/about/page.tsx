import type { Metadata } from "next";
import { Target, Eye, Lightbulb, Users, Award, Zap } from "lucide-react";
import { Container, SectionHeading, Card, ButtonLink } from "@/components/common";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { generateSEO } from "@/components/common/SEO";

export const metadata: Metadata = generateSEO({
  title: "About Us",
  description: "Learn about Thira and our mission to empower local businesses with digital solutions",
  keywords: ["about Thira", "web development company Kerala", "local business websites", "Kerala web design"],
});

const values = [
  {
    icon: Target,
    title: "Customer-Focused",
    description: "Your success is our priority. We build solutions that truly work for your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Using cutting-edge technology to create modern, efficient websites.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "No shortcuts. We deliver professional, high-quality work every time.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality or attention to detail.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We discuss your business needs, goals, and vision for your website.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "Create wireframes and designs tailored to your brand identity.",
  },
  {
    step: "03",
    title: "Development",
    description: "Build your website using modern technologies and best practices.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Thorough testing across devices, then launch your site to the world.",
  },
  {
    step: "05",
    title: "Support & Growth",
    description: "Ongoing support and guidance as your business grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wave-navy mb-4">
                About <span className="wave-text-gradient">Thira</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Empowering local businesses with modern web solutions
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <Container size="md">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-wave-navy mb-6 text-center">
                Our <span className="wave-text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Thira was born from a simple observation: talented local businesses across Kerala deserve a strong digital presence. Too many great salons, restaurants, gyms, and shops struggle to reach customers online because quality web development feels out of reach.
                </p>
                <p>
                  We believe every business, regardless of size, should have access to professional, modern websites that actually drive growth. That's why we combine cutting-edge web technology with deep understanding of local business needs to create websites that truly work.
                </p>
                <p>
                  Whether you run a salon, restaurant, gym, or retail shop, we're here to help you ride the wave of digital growth. Our mission is simple: make professional web development accessible, affordable, and effective for local businesses throughout Kerala.
                </p>
                <p className="font-medium text-wave-navy">
                  Based in Malappuram, Kerala, we understand the unique challenges and opportunities that local businesses face. We're not just developers—we're your partners in digital growth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <Card hover={false} className="p-6 shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wave-navy mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  To empower local businesses across Kerala with custom web solutions that drive real growth and customer engagement. We're committed to making professional web development accessible and affordable for businesses of all sizes.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Affordable pricing for local businesses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Fast turnaround times</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Ongoing support and maintenance</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card hover={false} className="p-6 shadow-lg h-full flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-wave-navy mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                  To be Kerala's most trusted web development partner for local businesses, known for quality, reliability, and genuine care for our clients' success in the digital landscape.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Building lasting client relationships</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Expanding digital presence across Kerala</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-wave-cyan mt-1">✓</span>
                    <span>Setting industry standards for quality</span>
                  </li>
                </ul>
              </Card>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Our"
              highlight="Values"
              subtitle="The principles that guide everything we do"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="text-center group bg-gradient-to-br from-white to-blue-50/30 p-6 rounded-xl border border-gray-100 hover:border-wave-cyan/30 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-wave-cyan/20 to-wave-bright-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-wave-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-wave-navy mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-br from-wave-navy to-wave-deep-blue text-white">
        <Container>
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                How We{" "}
                <span className="text-wave-cyan">
                  Work
                </span>
              </h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                Our streamlined process from idea to launch
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto mt-12">
            {process.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="flex items-start space-x-5 mb-8 last:mb-0 pb-8 last:pb-0 border-b border-white/20 last:border-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-wave-cyan/30 rounded-xl flex items-center justify-center border border-wave-cyan/50">
                    <span className="text-xl font-bold text-wave-cyan">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Why Choose"
              highlight="Thira"
              subtitle="What makes us different from other web development services"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              {
                title: "Local Understanding",
                description: "We understand Kerala's business landscape and customer behavior patterns",
                icon: "📍",
              },
              {
                title: "Affordable Pricing",
                description: "Transparent, one-time pricing with no hidden fees or monthly subscriptions",
                icon: "💰",
              },
              {
                title: "Fast Turnaround",
                description: "Get your website live in weeks, not months. Quick delivery without compromising quality",
                icon: "⚡",
              },
              {
                title: "Mobile-First Design",
                description: "Every website is optimized for mobile devices first, ensuring great experience on all screens",
                icon: "📱",
              },
              {
                title: "Ongoing Support",
                description: "We're here for you even after launch. Get help with updates, changes, and maintenance",
                icon: "🤝",
              },
              {
                title: "Modern Technology",
                description: "Built with Next.js, React, and latest web technologies for speed and performance",
                icon: "🚀",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <Card hover className="p-5 text-center h-full flex flex-col">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-wave-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-wave-navy mb-4">
                Let's Work <span className="wave-text-gradient">Together</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ready to take your business online? We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                >
                  Get in Touch
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
