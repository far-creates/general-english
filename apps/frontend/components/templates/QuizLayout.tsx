/**
 * QuizLayout Template
 * Specialized layout for quiz-taking experience
 * Minimal distractions, focused on quiz content
 */

import React from "react";
import Link from "next/link";
import ProgressBar from "../molecules/ProgressBar";

interface QuizLayoutProps {
  children: React.ReactNode;
  quizTitle: string;
  currentQuestion: number;
  totalQuestions: number;
  onExit?: () => void;
  showProgress?: boolean;
  className?: string;
}

export default function QuizLayout({
  children,
  quizTitle,
  currentQuestion,
  totalQuestions,
  onExit,
  showProgress = true,
  className = "",
}: QuizLayoutProps) {
  const handleExit = () => {
    if (onExit) {
      onExit();
    } else {
      // Default behavior: confirm and go back
      if (
        window.confirm(
          "Are you sure you want to exit? Your progress will be lost."
        )
      ) {
        window.history.back();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Minimal Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Quiz Title */}
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-semibold text-gray-900 truncate">
                {quizTitle}
              </h1>
              <p className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {totalQuestions}
              </p>
            </div>

            {/* Exit Button */}
            <button
              onClick={handleExit}
              className="ml-4 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Exit Quiz
            </button>
          </div>

          {/* Progress Bar */}
          {showProgress && (
            <div className="mt-4">
              <ProgressBar
                current={currentQuestion + 1}
                total={totalQuestions}
                showLabel={false}
                showPercentage={false}
                color="blue"
                size="sm"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
            {children}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <div className="py-4 text-center text-sm text-gray-500">
        <p>Take your time and read each question carefully</p>
      </div>
    </div>
  );
}
