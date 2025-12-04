/**
 * Header Component (Organism)
 * Application header with logo and navigation
 */

import React from "react";
import Link from "next/link";

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function Header({
  showBackButton = false,
  onBackClick,
}: HeaderProps) {
  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Back Button or Logo */}
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Go back"
              >
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="bg-blue-600 rounded-lg p-2">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  Quiz App
                </span>
                <span className="text-xs text-gray-500">
                  English Vocabulary
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side - Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
