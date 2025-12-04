/**
 * Calculation Utilities
 * Functions for calculating scores, percentages, and statistics
 */

import { Quiz, Question, UserAnswer, QuizResult } from "@quiz/types";

/**
 * Calculate quiz score from user answers
 * @param answers - Array of user's selected option indices (-1 means unanswered)
 * @param quiz - The quiz object with questions and correct answers
 * @returns Number of correct answers
 */
export function calculateScore(answers: number[], quiz: Quiz): number {
  let correct = 0;

  quiz.questions.forEach((question, index) => {
    if (answers[index] === question.correctAnswer) {
      correct++;
    }
  });

  return correct;
}

/**
 * Calculate percentage score
 * @param correct - Number of correct answers
 * @param total - Total number of questions
 * @returns Percentage (0-100)
 */
export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

/**
 * Check if user passed the quiz
 * @param score - Number of correct answers
 * @param total - Total number of questions
 * @param threshold - Passing percentage (default 70%)
 * @returns True if passed
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
 * Create UserAnswer objects from answers array
 * @param answers - Array of selected option indices
 * @param quiz - The quiz object
 * @returns Array of UserAnswer objects
 */
export function createUserAnswers(answers: number[], quiz: Quiz): UserAnswer[] {
  return quiz.questions.map((question, index) => ({
    questionId: question.id,
    selectedOption: answers[index],
    isCorrect: answers[index] === question.correctAnswer,
  }));
}

/**
 * Create complete quiz result
 * @param quizId - ID of the quiz
 * @param answers - Array of user's selected options
 * @param quiz - The quiz object
 * @param timeSpent - Optional time spent in seconds
 * @returns Complete QuizResult object
 */
export function createQuizResult(
  quizId: string,
  answers: number[],
  quiz: Quiz,
  timeSpent?: number
): QuizResult {
  const score = calculateScore(answers, quiz);
  const totalQuestions = quiz.questions.length;
  const percentage = calculatePercentage(score, totalQuestions);
  const userAnswers = createUserAnswers(answers, quiz);

  return {
    quizId,
    score,
    totalQuestions,
    percentage,
    answers: userAnswers,
    completedAt: new Date(),
    totalTimeSpent: timeSpent,
    passed: isPassing(score, totalQuestions),
    passingScore: 70,
  };
}

/**
 * Calculate progress percentage through quiz
 * @param currentQuestion - Current question index (0-based)
 * @param totalQuestions - Total number of questions
 * @returns Progress percentage (0-100)
 */
export function calculateProgress(
  currentQuestion: number,
  totalQuestions: number
): number {
  if (totalQuestions === 0) return 0;
  return Math.round(((currentQuestion + 1) / totalQuestions) * 100);
}

/**
 * Count answered questions
 * @param answers - Array of answers (-1 means unanswered)
 * @returns Number of answered questions
 */
export function countAnswered(answers: number[]): number {
  return answers.filter((answer) => answer !== -1).length;
}

/**
 * Check if all questions are answered
 * @param answers - Array of answers
 * @returns True if all answered
 */
export function allAnswered(answers: number[]): boolean {
  return !answers.includes(-1);
}

/**
 * Get unanswered question indices
 * @param answers - Array of answers
 * @returns Array of indices for unanswered questions
 */
export function getUnansweredQuestions(answers: number[]): number[] {
  return answers
    .map((answer, index) => (answer === -1 ? index : -1))
    .filter((index) => index !== -1);
}

/**
 * Calculate average score across multiple results
 * @param results - Array of quiz results
 * @returns Average percentage score
 */
export function calculateAverageScore(results: QuizResult[]): number {
  if (results.length === 0) return 0;

  const totalPercentage = results.reduce(
    (sum, result) => sum + result.percentage,
    0
  );
  return Math.round(totalPercentage / results.length);
}

/**
 * Calculate total time spent across multiple results
 * @param results - Array of quiz results
 * @returns Total time in seconds
 */
export function calculateTotalTime(results: QuizResult[]): number {
  return results.reduce((sum, result) => sum + (result.totalTimeSpent || 0), 0);
}

/**
 * Get grade letter based on percentage
 * @param percentage - Score percentage (0-100)
 * @returns Grade letter (A, B, C, D, F)
 */
export function getGradeLetter(percentage: number): string {
  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

/**
 * Get performance message based on score
 * @param percentage - Score percentage (0-100)
 * @returns Encouraging message
 */
export function getPerformanceMessage(percentage: number): string {
  if (percentage === 100) return "Perfect! Outstanding work! 🎉";
  if (percentage >= 90) return "Excellent! Great job! 🌟";
  if (percentage >= 80) return "Very good! Keep it up! 👍";
  if (percentage >= 70) return "Good work! You passed! ✅";
  if (percentage >= 60) return "Not bad, but you can do better! 💪";
  return "Keep practicing! You'll improve! 📚";
}

/**
 * Estimate remaining time based on average time per question
 * @param answeredCount - Number of answered questions
 * @param totalQuestions - Total number of questions
 * @param timeSpent - Time spent so far in seconds
 * @returns Estimated remaining time in seconds
 */
export function estimateRemainingTime(
  answeredCount: number,
  totalQuestions: number,
  timeSpent: number
): number {
  if (answeredCount === 0) return 0;

  const avgTimePerQuestion = timeSpent / answeredCount;
  const remainingQuestions = totalQuestions - answeredCount;

  return Math.round(avgTimePerQuestion * remainingQuestions);
}

export default {
  calculateScore,
  calculatePercentage,
  isPassing,
  createUserAnswers,
  createQuizResult,
  calculateProgress,
  countAnswered,
  allAnswered,
  getUnansweredQuestions,
  calculateAverageScore,
  calculateTotalTime,
  getGradeLetter,
  getPerformanceMessage,
  estimateRemainingTime,
};
