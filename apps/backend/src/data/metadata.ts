/**
 * Metadata for Quiz Application
 * Contains summary information about years, series, and quizzes
 */

import { YearData, SeriesData, QuizSummary } from "@quiz/types";
import * as quizData from "./quizzes";

/**
 * Get metadata for all available years
 */
export function getAllYearsMetadata(): YearData[] {
  const years = quizData.getAvailableYears();

  return years.map((year) => {
    const series = quizData.getSeriesForYear(year);
    const totalQuizzes = quizData.getTotalQuizCountForYear(year);

    return {
      year,
      seriesCount: series.length,
      totalQuizzes,
      title: `Year ${year}`,
      description: `English vocabulary tests from year ${year}`,
    };
  });
}

/**
 * Get metadata for a specific year
 */
export function getYearMetadata(year: number): YearData | null {
  if (!quizData.hasYear(year)) return null;

  const series = quizData.getSeriesForYear(year);
  const totalQuizzes = quizData.getTotalQuizCountForYear(year);

  return {
    year,
    seriesCount: series.length,
    totalQuizzes,
    title: `Year ${year}`,
    description: `English vocabulary tests from year ${year}`,
  };
}

/**
 * Get metadata for all series in a specific year
 */
export function getSeriesMetadata(year: number): SeriesData[] {
  const seriesNumbers = quizData.getSeriesForYear(year);

  return seriesNumbers.map((series) => {
    const quizzes = quizData.getQuizzesByYearAndSeries(year, series);

    return {
      series,
      quizCount: quizzes.length,
      year,
      title: `Series ${series}`,
      description: `Test series ${series} for year ${year}`,
    };
  });
}

/**
 * Get metadata for a specific series
 */
export function getSingleSeriesMetadata(
  year: number,
  series: number
): SeriesData | null {
  if (!quizData.hasSeries(year, series)) return null;

  const quizzes = quizData.getQuizzesByYearAndSeries(year, series);

  return {
    series,
    quizCount: quizzes.length,
    year,
    title: `Series ${series}`,
    description: `Test series ${series} for year ${year}`,
  };
}

/**
 * Get quiz summaries for a specific year and series
 */
export function getQuizSummaries(year: number, series: number): QuizSummary[] {
  const quizzes = quizData.getQuizzesByYearAndSeries(year, series);

  return quizzes.map((quiz) => {
    const summary: QuizSummary = {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      questionCount: quiz.questions.length,
      year: quiz.year || year,
      series: quiz.series || series,
      testNumber: quiz.questions[0]?.testNumber,
      estimatedTime: Math.ceil(quiz.questions.length * 1.5), // ~1.5 minutes per question
      difficulty:
        quiz.questions.length <= 5
          ? "easy"
          : quiz.questions.length <= 10
          ? "medium"
          : "hard",
    };

    return summary;
  });
}

/**
 * Get summary for a specific quiz (without full question data)
 */
export function getQuizSummary(quizId: string): QuizSummary | null {
  const quiz = quizData.getQuizById(quizId);
  if (!quiz) return null;

  return {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questionCount: quiz.questions.length,
    year: quiz.year!,
    series: quiz.series!,
    testNumber: quiz.questions[0]?.testNumber,
    estimatedTime: Math.ceil(quiz.questions.length * 1.5),
    difficulty:
      quiz.questions.length <= 5
        ? "easy"
        : quiz.questions.length <= 10
        ? "medium"
        : "hard",
  };
}

/**
 * Search quizzes by title or description
 */
export function searchQuizzes(searchTerm: string): QuizSummary[] {
  const allQuizzes = quizData.getAllQuizzes();
  const lowerSearch = searchTerm.toLowerCase();

  const matchedQuizzes = allQuizzes.filter(
    (quiz) =>
      quiz.title.toLowerCase().includes(lowerSearch) ||
      quiz.description?.toLowerCase().includes(lowerSearch)
  );

  return matchedQuizzes.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questionCount: quiz.questions.length,
    year: quiz.year!,
    series: quiz.series!,
    testNumber: quiz.questions[0]?.testNumber,
    estimatedTime: Math.ceil(quiz.questions.length * 1.5),
    difficulty:
      quiz.questions.length <= 5
        ? "easy"
        : quiz.questions.length <= 10
        ? "medium"
        : "hard",
  }));
}

// Default export
export default {
  getAllYearsMetadata,
  getYearMetadata,
  getSeriesMetadata,
  getSingleSeriesMetadata,
  getQuizSummaries,
  getQuizSummary,
  searchQuizzes,
};
