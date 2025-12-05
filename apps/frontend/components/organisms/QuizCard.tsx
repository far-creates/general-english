/**
 * QuizCard Component (Organism)
 * Card displaying quiz summary with navigation
 */

import React from "react";
import { useRouter } from "next/navigation";
import { QuizSummary } from "@quiz/types";
import Card from "../molecules/Card";
import Badge from "../atoms/Badge";
import {
  formatQuestionCount,
  formatEstimatedTime,
  getDifficultyColorClass,
} from "../../lib/utils/formatters";

interface QuizCardProps {
  quiz: QuizSummary;
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/year/${quiz.year}/series/${quiz.series}/quiz/${quiz.id}`);
  };

  // Get difficulty badge variant
  const getDifficultyVariant = (difficulty?: "easy" | "medium" | "hard") => {
    switch (difficulty) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
        return "danger";
      default:
        return "default";
    }
  };

  return (
    <Card variant="elevated" hover onClick={handleClick} className="h-full">
      {/* Quiz Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {quiz.title}
          </h3>
          {quiz.testNumber && (
            <p className="text-sm text-gray-500">Test #{quiz.testNumber}</p>
          )}
        </div>
        <div className="bg-green-100 rounded-lg p-2 ml-3 flex-shrink-0">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      </div>

      {/* Description */}
      {quiz.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {quiz.description}
        </p>
      )}

      {/* Statistics */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="info" size="sm">
          {formatQuestionCount(quiz.questionCount)}
        </Badge>
        {quiz.estimatedTime && (
          <Badge variant="default" size="sm">
            ⏱️ {formatEstimatedTime(quiz.estimatedTime)}
          </Badge>
        )}
        {quiz.difficulty && (
          <Badge variant={getDifficultyVariant(quiz.difficulty)} size="sm">
            {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
          </Badge>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-500">
          Year {quiz.year} • Series {quiz.series}
        </span>
        <svg
          className="h-5 w-5 text-green-600"
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
