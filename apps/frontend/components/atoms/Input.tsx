/**
 * Input Component (Atom)
 * Reusable text input field
 */

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export default function Input({
  error = false,
  fullWidth = false,
  className = "",
  ...props
}: InputProps) {
  // Base classes
  const baseClasses =
    "px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2";

  // State classes
  const stateClasses = error
    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500";

  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  // Disabled classes
  const disabledClass =
    "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60";

  // Combine classes
  const inputClasses = `
    ${baseClasses}
    ${stateClasses}
    ${widthClass}
    ${disabledClass}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return <input className={inputClasses} {...props} />;
}
