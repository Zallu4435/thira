"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container, Button } from "@/components/common";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wave-white via-blue-50 to-cyan-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold wave-text-gradient mb-4">404</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-wave-cyan to-wave-bright-blue mx-auto rounded-full" />
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-wave-navy mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Oops! The page you're looking for seems to have drifted away. Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-wave-cyan to-wave-bright-blue text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="md"
              className="inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/services" className="text-wave-cyan hover:underline">
                Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/demos" className="text-wave-cyan hover:underline">
                Demos
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/about" className="text-wave-cyan hover:underline">
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/contact" className="text-wave-cyan hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
