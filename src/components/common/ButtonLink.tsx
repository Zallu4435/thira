import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

export default function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-wave-cyan to-wave-bright-blue text-white hover:shadow-xl hover:scale-105",
    secondary:
      "bg-wave-navy text-white hover:bg-wave-deep-blue hover:shadow-lg",
    outline:
      "border-2 border-wave-cyan text-wave-cyan hover:bg-wave-cyan hover:text-white",
    ghost:
      "text-wave-navy hover:bg-wave-white hover:text-wave-cyan",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

