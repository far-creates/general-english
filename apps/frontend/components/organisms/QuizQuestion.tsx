/**
 * QuizQuestion Component (Organism)
 * Displays a quiz question with all options
 */

import React from "react";
import { Question } from "@quiz/types";
import QuizOption from "../molecules/QuizOption";

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number;
  onAnswerSelect: (optionIndex: number) => void;
  showResult?: boolean;
  disabled?: boolean;
  questionNumber: number;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onAnswerSelect,
  showResult = false,
  disabled = false,
  questionNumber,
}: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      {/* Question Header */}
      <div className="pb-4 border-b border-gray-200">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
            {questionNumber}
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
              {question.text}
            </h2>
            {question.testNumber && (
              <p className="text-sm text-gray-500 mt-1">
                Test #{question.testNumber}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            index={index}
            selected={selectedAnswer === index}
            onSelect={onAnswerSelect}
            disabled={disabled}
            showResult={showResult}
            isCorrect={index === question.correctAnswer}
          />
        ))}
      </div>

      {/* Explanation (only shown in result mode) */}
      {showResult && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <div className="flex gap-3">
            <svg
              className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">Explanation</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
