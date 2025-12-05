/**
 * YearCard Component (Organism)
 * Card displaying year information with navigation
 */

import React from "react";
import { useRouter } from "next/navigation";
import { YearData } from "@quiz/types";
import Card from "../molecules/Card";
import Badge from "../atoms/Badge";

interface YearCardProps {
  year: YearData;
}

export default function YearCard({ year }: YearCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/year/${year.year}`);
  };

  return (
    <Card variant="elevated" hover onClick={handleClick} className="h-full">
      {/* Year Number */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900">{year.year}</h2>
        <div className="bg-blue-100 rounded-full p-3">
          <svg
            className="h-6 w-6 text-blue-600"
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

      {/* Title */}
      {year.title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {year.title}
        </h3>
      )}

      {/* Description */}
      {year.description && (
        <p className="text-gray-600 text-sm mb-4">{year.description}</p>
      )}

      {/* Statistics */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Badge variant="info" size="sm">
            {year.seriesCount} {year.seriesCount === 1 ? "Series" : "Series"}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="default" size="sm">
            {year.totalQuizzes} {year.totalQuizzes === 1 ? "Quiz" : "Quizzes"}
          </Badge>
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="flex justify-end mt-4">
        <svg
          className="h-5 w-5 text-blue-600"
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
