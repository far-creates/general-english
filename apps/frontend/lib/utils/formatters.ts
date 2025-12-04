/**
 * Formatter Utilities
 * Functions for formatting data for display
 */

import { Quiz, QuizSummary, YearData, SeriesData } from "@quiz/types";

/**
 * Format quiz title with year and series
 */
export function formatQuizTitle(
  title: string,
  year?: number,
  series?: number
): string {
  if (year && series) {
    return `${title} - Year ${year}, Series ${series}`;
  }
  if (year) {
    return `${title} - Year ${year}`;
  }
  return title;
}

/**
 * Format year display text
 */
export function formatYear(year: number): string {
  return `Year ${year}`;
}

/**
 * Format series display text
 */
export function formatSeries(series: number): string {
  return `Series ${series}`;
}

/**
 * Format question count
 */
export function formatQuestionCount(count: number): string {
  return `${count} Question${count !== 1 ? "s" : ""}`;
}

/**
 * Format estimated time
 */
export function formatEstimatedTime(minutes: number): string {
  if (minutes < 1) {
    return "Less than 1 minute";
  }
  if (minutes === 1) {
    return "1 minute";
  }
  return `${minutes} minutes`;
}

/**
 * Format time from seconds to readable string
 */
export function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds === 0) {
    return `${minutes}m`;
  }

  return `${minutes}m ${remainingSeconds}s`;
}

/**
 * Format time from seconds to detailed string
 */
export function formatTimeDetailed(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? "s" : ""}`;
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if (remainingSeconds === 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
  }

  return `${minutes} minute${
    minutes !== 1 ? "s" : ""
  } ${remainingSeconds} second${remainingSeconds !== 1 ? "s" : ""}`;
}

/**
 * Format percentage
 */
export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

/**
 * Format score display
 */
export function formatScore(correct: number, total: number): string {
  return `${correct} / ${total}`;
}

/**
 * Format difficulty level with color/emoji
 */
export function formatDifficulty(
  difficulty?: "easy" | "medium" | "hard"
): string {
  switch (difficulty) {
    case "easy":
      return "🟢 Easy";
    case "medium":
      return "🟡 Medium";
    case "hard":
      return "🔴 Hard";
    default:
      return "⚪ Unknown";
  }
}

/**
 * Get difficulty color class (for Tailwind)
 */
export function getDifficultyColorClass(
  difficulty?: "easy" | "medium" | "hard"
): string {
  switch (difficulty) {
    case "easy":
      return "text-green-600 bg-green-50";
    case "medium":
      return "text-yellow-600 bg-yellow-50";
    case "hard":
      return "text-red-600 bg-red-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format date with time
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }

  return formatDate(d);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - 3) + "...";
}

/**
 * Format option label (1, 2, 3, 4)
 */
export function formatOptionLabel(index: number): string {
  return `${index + 1}`;
}

/**
 * Format quiz summary for display
 */
export function formatQuizSummaryText(quiz: QuizSummary): string {
  return `${formatQuestionCount(quiz.questionCount)} • ${formatEstimatedTime(
    quiz.estimatedTime || 0
  )} • ${formatDifficulty(quiz.difficulty)}`;
}

export default {
  formatQuizTitle,
  formatYear,
  formatSeries,
  formatQuestionCount,
  formatEstimatedTime,
  formatTime,
  formatTimeDetailed,
  formatPercentage,
  formatScore,
  formatDifficulty,
  getDifficultyColorClass,
  formatDate,
  formatDateTime,
  formatRelativeTime,
  truncateText,
  formatOptionLabel,
  formatQuizSummaryText,
};
