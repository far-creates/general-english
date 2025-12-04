/**
 * Quiz Data - Main Index
 * Aggregates all quiz data across all years
 */

import { Quiz } from "@quiz/types";
import * as year1399 from "./1399";

/**
 * All quizzes organized by year
 */
export const quizzesByYear: Record<number, typeof year1399> = {
  1399: year1399,
  // Add more years as they become available:
  // 1400: year1400,
  // 1401: year1401,
};

/**
 * Get all available years
 */
export function getAvailableYears(): number[] {
  return Object.keys(quizzesByYear).map(Number).sort();
}

/**
 * Get all series for a specific year
 */
export function getSeriesForYear(year: number): number[] {
  const yearData = quizzesByYear[year];
  if (!yearData) return [];
  return yearData.getAvailableSeries();
}

/**
 * Get all quizzes for a specific year and series
 */
export function getQuizzesByYearAndSeries(
  year: number,
  series: number
): Quiz[] {
  const yearData = quizzesByYear[year];
  if (!yearData) return [];
  return yearData.getSeriesQuizzes(series);
}

/**
 * Get a specific quiz by ID
 */
export function getQuizById(quizId: string): Quiz | null {
  for (const yearData of Object.values(quizzesByYear)) {
    const allQuizzes = yearData.getAllQuizzes();
    const quiz = allQuizzes.find((q) => q.id === quizId);
    if (quiz) return quiz;
  }
  return null;
}

/**
 * Get all quizzes across all years (flattened)
 */
export function getAllQuizzes(): Quiz[] {
  return Object.values(quizzesByYear).flatMap((yearData) =>
    yearData.getAllQuizzes()
  );
}

/**
 * Get total quiz count for a specific year
 */
export function getTotalQuizCountForYear(year: number): number {
  const yearData = quizzesByYear[year];
  if (!yearData) return 0;
  return yearData.getTotalQuizCount();
}

/**
 * Get total quiz count across all years
 */
export function getTotalQuizCount(): number {
  return getAllQuizzes().length;
}

/**
 * Check if a year exists in the data
 */
export function hasYear(year: number): boolean {
  return year in quizzesByYear;
}

/**
 * Check if a series exists for a given year
 */
export function hasSeries(year: number, series: number): boolean {
  const availableSeries = getSeriesForYear(year);
  return availableSeries.includes(series);
}

// Default export
export default {
  getAvailableYears,
  getSeriesForYear,
  getQuizzesByYearAndSeries,
  getQuizById,
  getAllQuizzes,
  getTotalQuizCountForYear,
  getTotalQuizCount,
  hasYear,
  hasSeries,
};
