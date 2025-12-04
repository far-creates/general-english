/**
 * Quiz Data - Year 1399
 * Aggregates all series for year 1399
 */

import { Quiz } from "@quiz/types";
import series1Quizzes from "./series1.ts";

/**
 * All quizzes for year 1399, organized by series
 */
export const quizzesBySeriesMap: Record<number, Quiz[]> = {
  1: series1Quizzes,
  // Add more series as they become available:
  // 2: series2Quizzes,
  // 3: series3Quizzes,
};

/**
 * Get all quizzes for a specific series in 1399
 */
export function getSeriesQuizzes(series: number): Quiz[] {
  return quizzesBySeriesMap[series] || [];
}

/**
 * Get all available series numbers for 1399
 */
export function getAvailableSeries(): number[] {
  return Object.keys(quizzesBySeriesMap).map(Number).sort();
}

/**
 * Get all quizzes for year 1399 (flattened)
 */
export function getAllQuizzes(): Quiz[] {
  return Object.values(quizzesBySeriesMap).flat();
}

/**
 * Get total number of quizzes in year 1399
 */
export function getTotalQuizCount(): number {
  return getAllQuizzes().length;
}

// Default export: all quizzes organized by series
export default quizzesBySeriesMap;
