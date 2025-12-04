/**
 * Helper Utilities
 * Common utility functions for the backend
 */

import { Quiz, Question, QuizSummary } from "@quiz/types";

/**
 * Calculate quiz statistics
 */
export function calculateQuizStats(quiz: Quiz) {
  return {
    totalQuestions: quiz.questions.length,
    estimatedTime: Math.ceil(quiz.questions.length * 1.5), // 1.5 minutes per question
    hasExplanations: quiz.questions.every((q) => q.explanation !== undefined),
    difficulty: getDifficulty(quiz.questions.length),
  };
}

/**
 * Determine difficulty level based on question count
 */
export function getDifficulty(
  questionCount: number
): "easy" | "medium" | "hard" {
  if (questionCount <= 5) return "easy";
  if (questionCount <= 10) return "medium";
  return "hard";
}

/**
 * Format quiz title with year and series
 */
export function formatQuizTitle(
  title: string,
  year?: number,
  series?: number
): string {
  let formatted = title;

  if (year && series) {
    formatted = `${title} - Year ${year}, Series ${series}`;
  } else if (year) {
    formatted = `${title} - Year ${year}`;
  }

  return formatted;
}

/**
 * Generate unique quiz ID
 */
export function generateQuizId(
  year: number,
  series: number,
  quizNumber: number
): string {
  return `quiz_${year}_${series}_${quizNumber}`;
}

/**
 * Generate unique question ID
 */
export function generateQuestionId(
  year: number,
  series: number,
  testNumber: number
): string {
  return `q_${year}_${series}_${testNumber}`;
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 * Useful for randomizing question/option order
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Remove sensitive data from quiz (e.g., correct answers)
 * Useful for quiz previews without spoilers
 */
export function sanitizeQuizForPreview(quiz: Quiz): Omit<Quiz, "questions"> & {
  questions: Omit<Question, "correctAnswer" | "explanation">[];
} {
  return {
    ...quiz,
    questions: quiz.questions.map((q) => ({
      id: q.id,
      text: q.text,
      options: q.options,
      year: q.year,
      series: q.series,
      testNumber: q.testNumber,
    })),
  };
}

/**
 * Calculate score percentage
 */
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * Check if a score passes (configurable threshold)
 */
export function isPassing(
  score: number,
  total: number,
  threshold: number = 70
): boolean {
  const percentage = calculatePercentage(score, total);
  return percentage >= threshold;
}

/**
 * Format time in seconds to human-readable string
 */
export function formatTime(seconds: number): string {
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
 * Validate quiz data structure
 */
export function isValidQuiz(quiz: any): quiz is Quiz {
  return (
    quiz &&
    typeof quiz.id === "string" &&
    typeof quiz.title === "string" &&
    Array.isArray(quiz.questions) &&
    quiz.questions.length > 0 &&
    quiz.questions.every(isValidQuestion)
  );
}

/**
 * Validate question data structure
 */
export function isValidQuestion(question: any): question is Question {
  return (
    question &&
    typeof question.id === "string" &&
    typeof question.text === "string" &&
    Array.isArray(question.options) &&
    question.options.length >= 2 &&
    typeof question.correctAnswer === "number" &&
    question.correctAnswer >= 0 &&
    question.correctAnswer < question.options.length
  );
}

/**
 * Deep clone object (simple implementation)
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Create pagination metadata
 */
export function createPaginationMeta(
  total: number,
  page: number,
  pageSize: number
) {
  const totalPages = Math.ceil(total / pageSize);

  return {
    total,
    page,
    pageSize,
    totalPages,
    hasNext: page < totalPages,
    hasPrevious: page > 1,
  };
}

export default {
  calculateQuizStats,
  getDifficulty,
  formatQuizTitle,
  generateQuizId,
  generateQuestionId,
  shuffleArray,
  sanitizeQuizForPreview,
  calculatePercentage,
  isPassing,
  formatTime,
  isValidQuiz,
  isValidQuestion,
  deepClone,
  createPaginationMeta,
};
