/**
 * Badge Component (Atom)
 * Small label for displaying status, counts, or categories
 */

import React from "react";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  size = "md",
  rounded = false,
  children,
  className = "",
}: BadgeProps) {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-semibold";

  // Variant classes
  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  // Size classes
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
    lg: "px-3 py-1.5 text-base",
  };

  // Shape classes
  const shapeClass = rounded ? "rounded-full" : "rounded";

  // Combine classes
  const badgeClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${shapeClass}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return <span className={badgeClasses}>{children}</span>;
}
