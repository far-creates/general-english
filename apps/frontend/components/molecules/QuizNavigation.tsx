/**
 * QuizNavigation Component (Molecule)
 * Navigation buttons for quiz (Previous, Next, Submit)
 */

import React from "react";
import Button from "../atoms/Button";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  isAnswered: boolean;
  allAnswered: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export default function QuizNavigation({
  currentQuestion,
  totalQuestions,
  isAnswered,
  allAnswered,
  onPrevious,
  onNext,
  onSubmit,
  disabled = false,
}: QuizNavigationProps) {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="flex justify-between items-center gap-4">
      {/* Previous Button */}
      <Button
        variant="secondary"
        onClick={onPrevious}
        disabled={isFirstQuestion || disabled}
        className="flex items-center gap-2"
      >
        <svg
          className="w-5 h-5"
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
        Previous
      </Button>

      {/* Next/Submit Button */}
      {isLastQuestion ? (
        <Button
          variant="success"
          onClick={onSubmit}
          disabled={!allAnswered || disabled}
          className="flex items-center gap-2"
        >
          Submit Quiz
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={onNext}
          disabled={!isAnswered || disabled}
          className="flex items-center gap-2"
        >
          Next
          <svg
            className="w-5 h-5"
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
        </Button>
      )}
    </div>
  );
}
