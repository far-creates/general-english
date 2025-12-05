/**
 * YearGrid Component (Organism)
 * Grid layout displaying multiple YearCards
 */

import React from "react";
import { YearData } from "@quiz/types";
import YearCard from "./YearCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import ErrorMessage from "../molecules/ErrorMessage";

interface YearGridProps {
  years: YearData[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function YearGrid({
  years,
  loading = false,
  error = null,
  onRetry,
}: YearGridProps) {
  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size="lg" text="Loading years..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <ErrorMessage
        message={error}
        title="Failed to Load Years"
        onRetry={onRetry}
      />
    );
  }

  // Empty state
  if (years.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-gray-100 p-4">
            <svg
              className="h-12 w-12 text-gray-400"
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
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No Years Available
        </h3>
        <p className="text-gray-600">
          There are currently no quiz years available.
        </p>
      </div>
    );
  }

  // Grid of year cards
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {years.map((year) => (
        <YearCard key={year.year} year={year} />
      ))}
    </div>
  );
}
