/**
 * SeriesCard Component (Organism)
 * Card displaying series information with navigation
 */

import React from "react";
import { useRouter } from "next/navigation";
import { SeriesData } from "@quiz/types";
import Card from "../molecules/Card";
import Badge from "../atoms/Badge";

interface SeriesCardProps {
  series: SeriesData;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/year/${series.year}/series/${series.series}`);
  };

  return (
    <Card variant="elevated" hover onClick={handleClick} className="h-full">
      {/* Series Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 rounded-lg p-2">
            <svg
              className="h-6 w-6 text-indigo-600"
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
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Series {series.series}
            </h3>
            <p className="text-sm text-gray-500">Year {series.year}</p>
          </div>
        </div>
      </div>

      {/* Title */}
      {series.title && (
        <h4 className="text-base font-semibold text-gray-800 mb-2">
          {series.title}
        </h4>
      )}

      {/* Description */}
      {series.description && (
        <p className="text-gray-600 text-sm mb-4">{series.description}</p>
      )}

      {/* Statistics */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
        <Badge variant="info" size="sm">
          {series.quizCount} {series.quizCount === 1 ? "Quiz" : "Quizzes"}
        </Badge>
      </div>

      {/* Arrow Icon */}
      <div className="flex justify-end mt-4">
        <svg
          className="h-5 w-5 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Card>
  );
}
