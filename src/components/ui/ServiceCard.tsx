"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <div
      className="group relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl border-2 border-gray-100 hover:border-wave-cyan/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-wave-cyan to-wave-bright-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-wave-navy mb-3 group-hover:text-wave-cyan transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>

      {/* Hover effect decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-wave-cyan/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}
