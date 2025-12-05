/**
 * WrongAnswerExplanation Component (Molecule)
 * Displays explanation of why a wrong answer is incorrect
 * Location: frontend/components/molecules/WrongAnswerExplanation.tsx
 */

import React from "react";
import { WrongAnswerExplanation as WrongAnswerType } from "@quiz/types";

interface WrongAnswerExplanationProps {
  wrongAnswer: WrongAnswerType;
  showTranslation?: boolean;
  className?: string;
}

export default function WrongAnswerExplanation({
  wrongAnswer,
  showTranslation = true,
  className = "",
}: WrongAnswerExplanationProps) {
  // Get option letter (A, B, C, D)
  const optionLetter = String.fromCharCode(65 + wrongAnswer.optionIndex);

  return (
    <div
      className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}
    >
      {/* Header */}
      <div className="flex items-start gap-2 mb-2">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
          ✗
        </div>
        <div className="flex-1">
          <h4 className="text-base font-bold text-red-900 mb-1">
            Option {optionLetter}: "{wrongAnswer.optionText}"
          </h4>
          <p className="text-sm text-red-700 font-medium mb-1">
            Why this is incorrect:
          </p>
        </div>
      </div>

      {/* Explanation */}
      <div className="ml-8">
        <p className="text-red-800 text-sm leading-relaxed mb-2">
          {wrongAnswer.reason}
        </p>

        {/* Persian Translation */}
        {showTranslation && wrongAnswer.reasonTranslation && (
          <p className="text-red-700 text-sm bg-red-100 rounded p-2" dir="rtl">
            {wrongAnswer.reasonTranslation}
          </p>
        )}
      </div>
    </div>
  );
}
