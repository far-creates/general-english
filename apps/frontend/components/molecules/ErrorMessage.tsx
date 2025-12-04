/**
 * ErrorMessage Component (Molecule)
 * Display error messages with optional retry action
 */

import React from "react";
import Button from "../atoms/Button";

interface ErrorMessageProps {
  message: string;
  title?: string;
  onRetry?: () => void;
  fullScreen?: boolean;
  className?: string;
}

export default function ErrorMessage({
  message,
  title = "Error",
  onRetry,
  fullScreen = false,
  className = "",
}: ErrorMessageProps) {
  const content = (
    <div className={`text-center ${className}`}>
      {/* Error Icon */}
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-red-100 p-3">
          <svg
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

      {/* Message */}
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>

      {/* Retry Button */}
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        {content}
      </div>
    );
  }

  return (
    <div className="p-8 bg-red-50 rounded-lg border border-red-200">
      {content}
    </div>
  );
}
