/**
 * QuizOption Component (Molecule)
 * Single selectable quiz option
 */

import React from "react";

interface QuizOptionProps {
  option: string;
  index: number;
  selected: boolean;
  onSelect: (index: number) => void;
  disabled?: boolean;
  showResult?: boolean;
  isCorrect?: boolean;
}

export default function QuizOption({
  option,
  index,
  selected,
  onSelect,
  disabled = false,
  showResult = false,
  isCorrect = false,
}: QuizOptionProps) {
  const handleClick = () => {
    if (!disabled) {
      onSelect(index);
    }
  };

  // Get option letter (A, B, C, D)
  const optionLetter = String.fromCharCode(65 + index);

  // Determine styling based on state
  let borderClass = "border-gray-200";
  let bgClass = "bg-white hover:bg-gray-50";
  let textClass = "text-gray-700";
  let labelBgClass = "bg-gray-100";
  let labelTextClass = "text-gray-700";

  if (showResult) {
    // Result mode - show correct/incorrect
    if (isCorrect) {
      borderClass = "border-green-500";
      bgClass = "bg-green-50";
      textClass = "text-green-900";
      labelBgClass = "bg-green-500";
      labelTextClass = "text-white";
    } else if (selected && !isCorrect) {
      borderClass = "border-red-500";
      bgClass = "bg-red-50";
      textClass = "text-red-900";
      labelBgClass = "bg-red-500";
      labelTextClass = "text-white";
    }
  } else if (selected) {
    // Selected but not in result mode
    borderClass = "border-blue-500";
    bgClass = "bg-blue-50";
    textClass = "text-blue-900";
    labelBgClass = "bg-blue-500";
    labelTextClass = "text-white";
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        w-full flex items-center p-4 rounded-lg border-2 transition-all duration-200
        ${borderClass} ${bgClass} ${textClass}
        ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
        ${!showResult && !disabled ? "hover:border-blue-300" : ""}
      `
        .trim()
        .replace(/\s+/g, " ")}
    >
      {/* Option Letter */}
      <span
        className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4
        ${labelBgClass} ${labelTextClass}
      `
          .trim()
          .replace(/\s+/g, " ")}
      >
        {optionLetter}
      </span>

      {/* Option Text */}
      <span className="flex-1 text-left font-medium">{option}</span>

      {/* Result Icon */}
      {showResult && isCorrect && (
        <svg
          className="w-6 h-6 text-green-600 ml-2 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {showResult && selected && !isCorrect && (
        <svg
          className="w-6 h-6 text-red-600 ml-2 flex-shrink-0"
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
    </button>
  );
}
