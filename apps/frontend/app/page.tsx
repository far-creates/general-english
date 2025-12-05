/**
 * Main Quiz App Page
 * Single page with sidebar navigation and quiz content
 * Location: frontend/app/page.tsx
 */

"use client";

import React, { useState } from "react";
import { useYears } from "../lib/hooks/useYears";
import Sidebar from "../components/organisms/Sidebar";
import QuizContent from "../components/organisms/QuizContent";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import LoadingSpinner from "../components/atoms/LoadingSpinner";

export default function HomePage() {
  const { years, loading, error } = useYears();
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);

  const handleQuizSelect = (quizId: string) => {
    setSelectedQuizId(quizId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          years={years}
          selectedQuizId={selectedQuizId}
          onQuizSelect={handleQuizSelect}
          loading={loading}
          className="w-80 flex-shrink-0"
        />

        {/* Content Area */}
        <div className="flex-1 overflow-hidden bg-white">
          {selectedQuizId ? (
            <QuizContent quizId={selectedQuizId} />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="text-center max-w-md">
                <div className="mb-6">
                  <svg
                    className="w-24 h-24 mx-auto text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Quiz App
                </h2>
                <p className="text-gray-600 mb-6">
                  Select a quiz from the sidebar to get started. Navigate
                  through years and series to find the perfect quiz for you.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-left">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Quick Guide:
                  </h3>
                  <ul className="space-y-1 text-blue-800">
                    <li>• Click on a year to expand it</li>
                    <li>• Click on a series to see available quizzes</li>
                    <li>• Select a quiz to begin practicing</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
