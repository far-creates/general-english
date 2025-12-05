/**
 * ResultQuestion Component (Organism)
 * Displays a question with answer review
 */

import { Question, UserAnswer } from "@quiz/types";

interface ResultQuestionProps {
  question: Question;
  userAnswer: UserAnswer;
  questionNumber: number;
}

export function ResultQuestion({
  question,
  userAnswer,
  questionNumber,
}: ResultQuestionProps) {
  const isCorrect = userAnswer.isCorrect;

  return (
    <div
      className={`p-6 rounded-xl border-2 ${
        isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
      }`}
    >
      {/* Question Header */}
      <div className="flex items-start gap-3 mb-4">
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {questionNumber}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{question.text}</p>
          {question.testNumber && (
            <p className="text-sm text-gray-500 mt-1">
              Test #{question.testNumber}
            </p>
          )}
        </div>
        {/* Result Icon */}
        {isCorrect ? (
          <svg
            className="w-6 h-6 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-red-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {question.options.map((option, index) => {
          const isUserAnswer = index === userAnswer.selectedOption;
          const isCorrectAnswer = index === question.correctAnswer;

          let bgClass = "bg-white";
          let textClass = "text-gray-700";
          let icon = null;

          if (isCorrectAnswer) {
            bgClass = "bg-green-200";
            textClass = "text-green-900 font-semibold";
            icon = "✓";
          } else if (isUserAnswer && !isCorrect) {
            bgClass = "bg-red-200";
            textClass = "text-red-900";
            icon = "✗";
          }

          return (
            <div
              key={index}
              className={`p-3 rounded ${bgClass} ${textClass} flex items-center justify-between`}
            >
              <span>
                {String.fromCharCode(65 + index)}. {option}
              </span>
              {icon && <span className="font-bold text-lg">{icon}</span>}
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      {question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <div className="flex gap-2">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
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
              <p className="font-semibold text-blue-900 text-sm mb-1">
                Explanation
              </p>
              <p className="text-blue-800 text-sm">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
