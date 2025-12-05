/**
 * ScoreCard Component (Organism)
 * Displays quiz score with visual feedback
 */

import React from "react";
import { formatScore, formatPercentage } from "../../lib/utils/formatters";
import {
  getGradeLetter,
  getPerformanceMessage,
} from "../../lib/utils/calculations";

import Badge from "../atoms/Badge";

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed?: boolean;
  timeSpent?: number;
}

export function ScoreCard({
  score,
  totalQuestions,
  percentage,
  passed,
  timeSpent,
}: ScoreCardProps) {
  const grade = getGradeLetter(percentage);
  const message = getPerformanceMessage(percentage);

  // Get color based on score
  const getScoreColor = () => {
    if (percentage >= 90) return "from-green-500 to-emerald-600";
    if (percentage >= 70) return "from-blue-500 to-indigo-600";
    if (percentage >= 60) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-rose-600";
  };

  return (
    <div
      className={`bg-gradient-to-r ${getScoreColor()} rounded-2xl text-white p-8 shadow-xl`}
    >
      <div className="text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>

        {/* Performance Message */}
        <p className="text-xl mb-6 opacity-90">{message}</p>

        {/* Score Display */}
        <div className="bg-white bg-opacity-20 rounded-xl p-6 mb-6 backdrop-blur-sm">
          <div className="text-6xl font-bold mb-2">
            {formatPercentage(percentage)}
          </div>
          <div className="text-2xl font-semibold">
            {formatScore(score, totalQuestions)}
          </div>
        </div>

        {/* Grade and Pass Status */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 backdrop-blur-sm">
            <div className="text-sm opacity-90">Grade</div>
            <div className="text-3xl font-bold">{grade}</div>
          </div>

          {passed !== undefined && (
            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3 backdrop-blur-sm">
              <div className="text-sm opacity-90">Status</div>
              <div className="text-2xl font-bold">
                {passed ? "✓ Passed" : "✗ Failed"}
              </div>
            </div>
          )}
        </div>

        {/* Time Spent */}
        {timeSpent && (
          <p className="text-sm opacity-75">
            Time spent: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s
          </p>
        )}
      </div>
    </div>
  );
}
