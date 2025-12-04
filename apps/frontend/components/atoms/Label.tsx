/**
 * Label Component (Atom)
 * Form label with optional required indicator
 */

import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  error?: boolean;
  children: React.ReactNode;
}

export default function Label({
  required = false,
  error = false,
  children,
  className = "",
  ...props
}: LabelProps) {
  // Base classes
  const baseClasses = "block text-sm font-medium mb-1";

  // State classes
  const stateClass = error ? "text-red-600" : "text-gray-700";

  // Combine classes
  const labelClasses = `
    ${baseClasses}
    ${stateClass}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <label className={labelClasses} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
