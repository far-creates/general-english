/**
 * Sidebar Component (Organism)
 * Collapsible navigation tree for Years → Series → Quizzes
 * Location: frontend/components/organisms/Sidebar.tsx
 */

"use client";

import React, { useState } from "react";
import { YearData, SeriesData, QuizSummary } from "@quiz/types";
import LoadingSpinner from "../atoms/LoadingSpinner";
import Badge from "../atoms/Badge";

interface SidebarProps {
  years: YearData[];
  selectedQuizId: string | null;
  onQuizSelect: (quizId: string) => void;
  loading?: boolean;
  className?: string;
}

export default function Sidebar({
  years,
  selectedQuizId,
  onQuizSelect,
  loading = false,
  className = "",
}: SidebarProps) {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set());
  const [expandedSeries, setExpandedSeries] = useState<Set<string>>(new Set());
  const [seriesData, setSeriesData] = useState<Record<number, SeriesData[]>>(
    {}
  );
  const [quizzesData, setQuizzesData] = useState<Record<string, QuizSummary[]>>(
    {}
  );
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  // Toggle year expansion and fetch series if needed
  const toggleYear = async (year: number) => {
    const newExpanded = new Set(expandedYears);

    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);

      // Fetch series if not already loaded
      if (!seriesData[year]) {
        setLoadingStates((prev) => ({ ...prev, [`year-${year}`]: true }));
        try {
          const response = await fetch(
            `http://localhost:3001/api/years/${year}/series`
          );
          const data = await response.json();
          if (data.success && data.data) {
            setSeriesData((prev) => ({ ...prev, [year]: data.data }));
          }
        } catch (error) {
          console.error("Failed to fetch series:", error);
        }
        setLoadingStates((prev) => ({ ...prev, [`year-${year}`]: false }));
      }
    }

    setExpandedYears(newExpanded);
  };

  // Toggle series expansion and fetch quizzes if needed
  const toggleSeries = async (year: number, series: number) => {
    const key = `${year}-${series}`;
    const newExpanded = new Set(expandedSeries);

    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);

      // Fetch quizzes if not already loaded
      if (!quizzesData[key]) {
        setLoadingStates((prev) => ({ ...prev, [`series-${key}`]: true }));
        try {
          const response = await fetch(
            `http://localhost:3001/api/years/${year}/series/${series}/quizzes`
          );
          const data = await response.json();
          if (data.success && data.data) {
            setQuizzesData((prev) => ({ ...prev, [key]: data.data }));
          }
        } catch (error) {
          console.error("Failed to fetch quizzes:", error);
        }
        setLoadingStates((prev) => ({ ...prev, [`series-${key}`]: false }));
      }
    }

    setExpandedSeries(newExpanded);
  };

  if (loading) {
    return (
      <div className={`bg-white border-r border-gray-200 p-6 ${className}`}>
        <LoadingSpinner size="md" text="Loading..." />
      </div>
    );
  }

  return (
    <div
      className={`bg-white border-r border-gray-200 overflow-y-auto ${className}`}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <h2 className="text-lg font-bold text-gray-900">Quiz Navigator</h2>
        <p className="text-sm text-gray-500">Select a quiz to begin</p>
      </div>

      {/* Navigation Tree */}
      <div className="p-2">
        {years.map((year) => {
          const isYearExpanded = expandedYears.has(year.year);
          const series = seriesData[year.year] || [];
          const isYearLoading = loadingStates[`year-${year.year}`];

          return (
            <div key={year.year} className="mb-2">
              {/* Year Item */}
              <button
                onClick={() => toggleYear(year.year)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
              >
                <div className="flex items-center gap-2 flex-1">
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      isYearExpanded ? "rotate-90" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    Year {year.year}
                  </span>
                </div>
                <Badge variant="info" size="sm">
                  {year.seriesCount}
                </Badge>
              </button>

              {/* Series List */}
              {isYearExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {isYearLoading ? (
                    <div className="p-2 text-sm text-gray-500">
                      Loading series...
                    </div>
                  ) : (
                    series.map((seriesItem) => {
                      const seriesKey = `${year.year}-${seriesItem.series}`;
                      const isSeriesExpanded = expandedSeries.has(seriesKey);
                      const quizzes = quizzesData[seriesKey] || [];
                      const isSeriesLoading =
                        loadingStates[`series-${seriesKey}`];

                      return (
                        <div key={seriesItem.series}>
                          {/* Series Item */}
                          <button
                            onClick={() =>
                              toggleSeries(year.year, seriesItem.series)
                            }
                            className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-center gap-2 flex-1">
                              <svg
                                className={`w-3 h-3 text-gray-400 transition-transform ${
                                  isSeriesExpanded ? "rotate-90" : ""
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-sm font-medium text-gray-700">
                                Series {seriesItem.series}
                              </span>
                            </div>
                            <Badge variant="default" size="sm">
                              {seriesItem.quizCount}
                            </Badge>
                          </button>

                          {/* Quiz List */}
                          {isSeriesExpanded && (
                            <div className="ml-5 mt-1 space-y-1">
                              {isSeriesLoading ? (
                                <div className="p-2 text-xs text-gray-500">
                                  Loading quizzes...
                                </div>
                              ) : (
                                quizzes.map((quiz) => (
                                  <button
                                    key={quiz.id}
                                    onClick={() => onQuizSelect(quiz.id)}
                                    className={`w-full text-left p-2 rounded-lg text-sm transition-colors ${
                                      selectedQuizId === quiz.id
                                        ? "bg-blue-100 text-blue-900 font-medium"
                                        : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <svg
                                        className="w-4 h-4 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                      </svg>
                                      <span className="truncate">
                                        {quiz.title}
                                      </span>
                                    </div>
                                    {quiz.testNumber && (
                                      <span className="text-xs text-gray-500 ml-6">
                                        Test #{quiz.testNumber}
                                      </span>
                                    )}
                                  </button>
                                ))
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
