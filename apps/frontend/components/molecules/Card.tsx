/**
 * Card Component (Atom)
 * Reusable card container with different variants
 */

import React from "react";

interface CardProps {
  variant?: "default" | "elevated" | "bordered" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  variant = "default",
  padding = "md",
  hover = false,
  onClick,
  className = "",
  children,
}: CardProps) {
  // Base classes
  const baseClasses = "rounded-lg transition-all duration-200";

  // Variant classes
  const variantClasses = {
    default: "bg-white shadow-md",
    elevated: "bg-white shadow-xl",
    bordered: "bg-white border-2 border-gray-200",
    flat: "bg-gray-50",
  };

  // Padding classes
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  // Hover classes
  const hoverClass = hover
    ? "hover:shadow-lg hover:scale-[1.02] cursor-pointer"
    : "";

  // Clickable classes
  const clickableClass = onClick ? "cursor-pointer" : "";

  // Combine classes
  const cardClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClass}
    ${clickableClass}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={cardClasses}
      onClick={onClick}
      {...(onClick && { type: "button" })}
    >
      {children}
    </Component>
  );
}
