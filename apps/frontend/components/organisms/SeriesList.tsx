/**
 * SeriesList Component (Organism)
 * Grid layout displaying multiple SeriesCards
 */

import React from "react";
import { SeriesData } from "@quiz/types";
import SeriesCard from "./SeriesCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import ErrorMessage from "../molecules/ErrorMessage";

interface SeriesListProps {
  seriesList: SeriesData[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function SeriesList({
  seriesList,
  loading = false,
  error = null,
  onRetry,
}: SeriesListProps) {
  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size="lg" text="Loading series..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <ErrorMessage
        message={error}
        title="Failed to Load Series"
        onRetry={onRetry}
      />
    );
  }

  // Empty state
  if (seriesList.length === 0) {
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No Series Available
        </h3>
        <p className="text-gray-600">
          There are currently no series available for this year.
        </p>
      </div>
    );
  }

  // Grid of series cards
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {seriesList.map((series) => (
        <SeriesCard key={series.series} series={series} />
      ))}
    </div>
  );
}
