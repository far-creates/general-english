/**
 * Validator Utilities
 * Functions for validating data and user input
 */

import { Quiz, Question, QuizSummary, YearData, SeriesData } from "@quiz/types";

/**
 * Validate year number
 */
export function isValidYear(year: number): boolean {
  return !isNaN(year) && year >= 1300 && year <= 2100;
}

/**
 * Validate series number
 */
export function isValidSeries(series: number): boolean {
  return !isNaN(series) && series >= 1 && series <= 100;
}

/**
 * Validate quiz ID format
 */
export function isValidQuizId(id: string): boolean {
  if (!id || typeof id !== "string") return false;
  if (id.trim().length === 0) return false;
  if (id.length > 100) return false;

  // Basic format validation (alphanumeric, underscore, hyphen)
  const validPattern = /^[a-zA-Z0-9_-]+$/;
  return validPattern.test(id);
}

/**
 * Validate search query
 */
export function isValidSearchQuery(query: string): boolean {
  if (!query || typeof query !== "string") return false;
  const trimmed = query.trim();
  return trimmed.length >= 2 && trimmed.length <= 100;
}

/**
 * Validate question structure
 */
export function isValidQuestion(question: any): question is Question {
  if (!question || typeof question !== "object") return false;

  return (
    typeof question.id === "string" &&
    question.id.length > 0 &&
    typeof question.text === "string" &&
    question.text.length > 0 &&
    Array.isArray(question.options) &&
    question.options.length >= 2 &&
    question.options.every((opt: any) => typeof opt === "string") &&
    typeof question.correctAnswer === "number" &&
    question.correctAnswer >= 0 &&
    question.correctAnswer < question.options.length
  );
}

/**
 * Validate quiz structure
 */
export function isValidQuiz(quiz: any): quiz is Quiz {
  if (!quiz || typeof quiz !== "object") return false;

  return (
    typeof quiz.id === "string" &&
    quiz.id.length > 0 &&
    typeof quiz.title === "string" &&
    quiz.title.length > 0 &&
    Array.isArray(quiz.questions) &&
    quiz.questions.length > 0 &&
    quiz.questions.every(isValidQuestion)
  );
}

/**
 * Validate quiz summary structure
 */
export function isValidQuizSummary(summary: any): summary is QuizSummary {
  if (!summary || typeof summary !== "object") return false;

  return (
    typeof summary.id === "string" &&
    summary.id.length > 0 &&
    typeof summary.title === "string" &&
    typeof summary.questionCount === "number" &&
    summary.questionCount > 0 &&
    typeof summary.year === "number" &&
    typeof summary.series === "number"
  );
}

/**
 * Validate year data structure
 */
export function isValidYearData(data: any): data is YearData {
  if (!data || typeof data !== "object") return false;

  return (
    typeof data.year === "number" &&
    typeof data.seriesCount === "number" &&
    typeof data.totalQuizzes === "number" &&
    data.seriesCount >= 0 &&
    data.totalQuizzes >= 0
  );
}

/**
 * Validate series data structure
 */
export function isValidSeriesData(data: any): data is SeriesData {
  if (!data || typeof data !== "object") return false;

  return (
    typeof data.series === "number" &&
    typeof data.quizCount === "number" &&
    typeof data.year === "number" &&
    data.quizCount >= 0
  );
}

/**
 * Validate answer index
 */
export function isValidAnswerIndex(
  index: number,
  optionCount: number
): boolean {
  return !isNaN(index) && index >= 0 && index < optionCount;
}

/**
 * Validate answers array for a quiz
 */
export function isValidAnswersArray(answers: number[], quiz: Quiz): boolean {
  if (!Array.isArray(answers)) return false;
  if (answers.length !== quiz.questions.length) return false;

  return answers.every((answer, index) => {
    // -1 is valid (unanswered)
    if (answer === -1) return true;
    // Otherwise check if within option bounds
    return isValidAnswerIndex(answer, quiz.questions[index].options.length);
  });
}

/**
 * Validate email format (for future user features)
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Sanitize string input (remove dangerous characters)
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== "string") return "";

  return input
    .trim()
    .replace(/[<>]/g, "") // Remove HTML brackets
    .replace(/['"]/g, "") // Remove quotes
    .substring(0, 1000); // Limit length
}

/**
 * Validate difficulty level
 */
export function isValidDifficulty(
  difficulty: any
): difficulty is "easy" | "medium" | "hard" {
  return (
    difficulty === "easy" || difficulty === "medium" || difficulty === "hard"
  );
}

/**
 * Check if value is a positive integer
 */
export function isPositiveInteger(value: any): boolean {
  return Number.isInteger(value) && value > 0;
}

/**
 * Check if value is a non-negative integer
 */
export function isNonNegativeInteger(value: any): boolean {
  return Number.isInteger(value) && value >= 0;
}

/**
 * Validate percentage value (0-100)
 */
export function isValidPercentage(value: number): boolean {
  return !isNaN(value) && value >= 0 && value <= 100;
}

/**
 * Validate time value (must be non-negative)
 */
export function isValidTime(seconds: number): boolean {
  return !isNaN(seconds) && seconds >= 0;
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: any): boolean {
  if (!obj) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === "object") return Object.keys(obj).length === 0;
  return false;
}

export default {
  isValidYear,
  isValidSeries,
  isValidQuizId,
  isValidSearchQuery,
  isValidQuestion,
  isValidQuiz,
  isValidQuizSummary,
  isValidYearData,
  isValidSeriesData,
  isValidAnswerIndex,
  isValidAnswersArray,
  isValidEmail,
  isValidUrl,
  sanitizeInput,
  isValidDifficulty,
  isPositiveInteger,
  isNonNegativeInteger,
  isValidPercentage,
  isValidTime,
  isEmpty,
};
