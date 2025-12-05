/**
 * QuizList Component (Organism)
 * Grid layout displaying multiple QuizCards
 */

import React from "react";
import { QuizSummary } from "@quiz/types";
import QuizCard from "./QuizCard";
import LoadingSpinner from "../atoms/LoadingSpinner";
import ErrorMessage from "../molecules/ErrorMessage";

interface QuizListProps {
  quizzes: QuizSummary[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function QuizList({
  quizzes,
  loading = false,
  error = null,
  onRetry,
}: QuizListProps) {
  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner size="lg" text="Loading quizzes..." />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <ErrorMessage
        message={error}
        title="Failed to Load Quizzes"
        onRetry={onRetry}
      />
    );
  }

  // Empty state
  if (quizzes.length === 0) {
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No Quizzes Available
        </h3>
        <p className="text-gray-600">
          There are currently no quizzes available for this series.
        </p>
      </div>
    );
  }

  // Grid of quiz cards
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
