/**
 * ProgressBar Component (Molecule)
 * Visual progress indicator with percentage and label
 */

import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
  showPercentage?: boolean;
  color?: "blue" | "green" | "yellow" | "red" | "gray";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function ProgressBar({
  current,
  total,
  showLabel = true,
  showPercentage = true,
  color = "blue",
  size = "md",
  className = "",
}: ProgressBarProps) {
  // Calculate percentage
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  // Color classes
  const colorClasses = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    yellow: "bg-yellow-600",
    red: "bg-red-600",
    gray: "bg-gray-600",
  };

  // Size classes
  const sizeClasses = {
    sm: "h-1",
    md: "h-2",
    lg: "h-3",
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Label and Percentage */}
      {(showLabel || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {showLabel && (
            <span className="text-sm font-medium text-gray-700">
              {current} / {total}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-medium text-gray-700">
              {clampedPercentage}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}
      >
        <div
          className={`${colorClasses[color]} ${sizeClasses[size]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${clampedPercentage}%` }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
