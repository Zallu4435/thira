import Link from "next/link";
import { ExternalLink, Scissors, Utensils, Dumbbell, ShoppingBag, HeartPulse, Briefcase, GraduationCap, Home, Wrench, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  utensils: Utensils,
  dumbbell: Dumbbell,
  "shopping-bag": ShoppingBag,
  "heart-pulse": HeartPulse,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  home: Home,
  wrench: Wrench,
};

interface DemoCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  icon?: string;
  features?: string[];
  comingSoon?: boolean;
}

export default function DemoCard({
  title,
  description,
  image,
  link,
  icon,
  features = [],
  comingSoon = false,
}: DemoCardProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  if (comingSoon) {
    return (
      <div
        className={cn(
          "group relative block bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col"
        )}
      >
        {/* Image placeholder */}
        <div className="relative h-40 bg-gradient-to-br from-wave-cyan/20 to-wave-bright-blue/20 flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : IconComponent ? (
            <IconComponent className="w-16 h-16 text-wave-cyan/40" />
          ) : (
            <div className="text-5xl opacity-20">🌊</div>
          )}
          
          <div className="absolute inset-0 bg-wave-navy/80 backdrop-blur-sm flex items-center justify-center">
            <span className="px-4 py-2 bg-wave-cyan text-white font-semibold rounded-lg text-sm">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-wave-navy mb-2 group-hover:text-wave-cyan transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          
          {features.length > 0 && (
            <div className="mt-auto">
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                    <svg
                      className="w-4 h-4 text-wave-cyan flex-shrink-0 mt-0.5"
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
                    <span>{feature}</span>
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-xs text-wave-cyan font-medium">
                    +{features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link || "#"}
      className={cn(
        "group relative block bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col",
        "hover:border-wave-cyan/50 hover:shadow-2xl hover:-translate-y-2"
      )}
    >
      {/* Image placeholder */}
      <div className="relative h-40 bg-gradient-to-br from-wave-cyan/20 to-wave-bright-blue/20 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : IconComponent ? (
          <IconComponent className="w-16 h-16 text-wave-cyan/40" />
        ) : (
          <div className="text-5xl opacity-20">🌊</div>
        )}
        
        {link && (
          <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            <ExternalLink className="w-5 h-5 text-wave-cyan" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-wave-navy mb-2 group-hover:text-wave-cyan transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {features.length > 0 && (
          <div className="mt-auto">
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                  <svg
                    className="w-4 h-4 text-wave-cyan flex-shrink-0 mt-0.5"
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
                  <span>{feature}</span>
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-xs text-wave-cyan font-medium">
                  +{features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
}
