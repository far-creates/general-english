/**
 * VocabularySummary Component (Molecule)
 * Displays vocabulary summary list for a question
 * Location: frontend/components/molecules/VocabularySummary.tsx
 */

import React from "react";

interface VocabularySummaryProps {
  vocabularyList: string[];
  className?: string;
}

export default function VocabularySummary({
  vocabularyList,
  className = "",
}: VocabularySummaryProps) {
  if (!vocabularyList || vocabularyList.length === 0) {
    return null;
  }

  return (
    <div
      className={`bg-purple-50 border border-purple-200 rounded-lg p-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-5 h-5 text-purple-600"
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
        <h4 className="text-base font-bold text-purple-900">
          Vocabulary Summary
        </h4>
      </div>

      {/* Vocabulary List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {vocabularyList.map((item, index) => {
          // Check if item has correct answer marker (✓)
          const isCorrect = item.includes("✓");
          const cleanItem = item.replace("✓", "").trim();

          return (
            <div
              key={index}
              className={`flex items-start gap-2 p-2 rounded text-sm ${
                isCorrect
                  ? "bg-green-100 border border-green-300 font-semibold"
                  : "bg-white border border-purple-200"
              }`}
            >
              {/* Bullet or Checkmark */}
              <span className="flex-shrink-0 mt-0.5">
                {isCorrect ? (
                  <svg
                    className="w-4 h-4 text-green-600"
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
                  <span className="text-purple-600">•</span>
                )}
              </span>

              {/* Vocabulary Item */}
              <span
                className={`flex-1 ${
                  isCorrect ? "text-green-900" : "text-purple-900"
                }`}
                dir="auto"
              >
                {isCorrect ? cleanItem : item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
