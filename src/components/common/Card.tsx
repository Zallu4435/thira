import { HTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  gradient?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, gradient = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border-2 border-gray-100 p-6",
          gradient
            ? "bg-gradient-to-br from-white to-blue-50/50"
            : "bg-white",
          hover &&
            "hover:border-wave-cyan/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
