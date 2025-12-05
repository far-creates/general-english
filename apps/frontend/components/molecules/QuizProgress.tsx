/**
 * QuizProgress Component (Molecule)
 * Visual progress indicator with dots for each question
 */

import React from "react";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: number[];
  onQuestionClick?: (index: number) => void;
  className?: string;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
  answers,
  onQuestionClick,
  className = "",
}: QuizProgressProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Progress Text */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {answers.filter((a) => a !== -1).length} answered
        </span>
      </div>

      {/* Progress Dots */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isAnswered = answers[index] !== -1;
          const isCurrent = index === currentQuestion;

          return (
            <button
              key={index}
              onClick={() => onQuestionClick?.(index)}
              disabled={!onQuestionClick}
              className={`
                w-8 h-8 rounded-full font-semibold text-sm transition-all duration-200
                ${isCurrent ? "ring-2 ring-blue-500 ring-offset-2" : ""}
                ${
                  isAnswered
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }
                ${
                  onQuestionClick && !isCurrent
                    ? "hover:scale-110 cursor-pointer"
                    : ""
                }
                ${!onQuestionClick ? "cursor-default" : ""}
              `
                .trim()
                .replace(/\s+/g, " ")}
              aria-label={`Question ${index + 1}${
                isAnswered ? " (answered)" : ""
              }`}
              aria-current={isCurrent ? "step" : undefined}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
