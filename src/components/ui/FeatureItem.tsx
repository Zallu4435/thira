import { Check } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="flex-shrink-0 w-10 h-10 bg-wave-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-wave-cyan group-hover:scale-110 transition-all duration-300">
        <Check className="w-5 h-5 text-wave-cyan group-hover:text-white transition-colors" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
