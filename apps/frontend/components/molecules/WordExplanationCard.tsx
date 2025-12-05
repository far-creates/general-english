/**
 * WordExplanationCard Component (Molecule)
 * Displays detailed word explanation with examples and collocations
 * Location: frontend/components/molecules/WordExplanationCard.tsx
 */

import React, { useState } from "react";
import { WordExplanation } from "@quiz/types";
import Badge from "../atoms/Badge";

interface WordExplanationCardProps {
  wordExplanation: WordExplanation;
  showTranslation?: boolean;
  className?: string;
}

export default function WordExplanationCard({
  wordExplanation,
  showTranslation = true,
  className = "",
}: WordExplanationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`}
    >
      {/* Header - Word */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-bold text-blue-900">
              {wordExplanation.word}
            </h4>
            <Badge variant="info" size="sm">
              Word
            </Badge>
          </div>

          {/* English Meaning */}
          <p className="text-blue-800 font-medium mb-1">
            {wordExplanation.meaning}
          </p>

          {/* Persian Translation */}
          {showTranslation && (
            <p className="text-blue-700 text-sm" dir="rtl">
              {wordExplanation.translation}
            </p>
          )}
        </div>

        {/* Expand/Collapse Button */}
        {(wordExplanation.examples ||
          wordExplanation.collocations ||
          wordExplanation.notes) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-2 p-1 rounded hover:bg-blue-100 transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            <svg
              className={`w-5 h-5 text-blue-600 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-3 space-y-3 pt-3 border-t border-blue-200">
          {/* Examples */}
          {wordExplanation.examples && wordExplanation.examples.length > 0 && (
            <div>
              <h5 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
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
                Examples:
              </h5>
              <ul className="list-disc list-inside space-y-1">
                {wordExplanation.examples.map((example, index) => (
                  <li key={index} className="text-blue-800 text-sm">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Collocations */}
          {wordExplanation.collocations &&
            wordExplanation.collocations.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  Common Phrases:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {wordExplanation.collocations.map((collocation, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                    >
                      {collocation}
                    </span>
                  ))}
                </div>
              </div>
            )}

          {/* Notes */}
          {wordExplanation.notes && (
            <div className="bg-blue-100 rounded p-2">
              <p className="text-blue-800 text-sm">
                <span className="font-semibold">Note:</span>{" "}
                {wordExplanation.notes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
