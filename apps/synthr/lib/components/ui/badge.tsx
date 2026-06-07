import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-[#171717] text-[#A3A3A3] border-[#262626]",
    accent: "bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/20",
    outline: "bg-transparent text-[#A3A3A3] border-[#262626]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
