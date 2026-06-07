import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "accent" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    default: "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E5E5]",
    accent: "bg-[#A855F7] text-white hover:bg-[#9333EA]",
    outline: "border border-[#262626] bg-transparent text-[#F5F5F5] hover:bg-[#171717]",
    ghost: "bg-transparent text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#171717]",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
