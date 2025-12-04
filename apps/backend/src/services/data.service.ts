/**
 * Data Service
 * Business logic layer for accessing quiz data
 * This layer sits between controllers and raw data
 */

import {
  Quiz,
  YearData,
  SeriesData,
  QuizSummary,
  ApiResponse,
} from "@quiz/types";
import * as quizData from "../data/quizzes";
import * as metadata from "../data/metadata";

/**
 * Get all available years with metadata
 */
export function getAllYears(): ApiResponse<YearData[]> {
  try {
    const years = metadata.getAllYearsMetadata();

    return {
      success: true,
      data: years,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch years",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get metadata for a specific year
 */
export function getYearById(year: number): ApiResponse<YearData> {
  try {
    const yearData = metadata.getYearMetadata(year);

    if (!yearData) {
      return {
        success: false,
        error: `Year ${year} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      data: yearData,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch year data",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get all series for a specific year
 */
export function getSeriesByYear(year: number): ApiResponse<SeriesData[]> {
  try {
    if (!quizData.hasYear(year)) {
      return {
        success: false,
        error: `Year ${year} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    const series = metadata.getSeriesMetadata(year);

    return {
      success: true,
      data: series,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch series data",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get metadata for a specific series
 */
export function getSeriesById(
  year: number,
  series: number
): ApiResponse<SeriesData> {
  try {
    const seriesData = metadata.getSingleSeriesMetadata(year, series);

    if (!seriesData) {
      return {
        success: false,
        error: `Series ${series} not found for year ${year}`,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      data: seriesData,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch series data",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get all quizzes for a specific year and series (summaries only)
 */
export function getQuizzesBySeries(
  year: number,
  series: number
): ApiResponse<QuizSummary[]> {
  try {
    if (!quizData.hasYear(year)) {
      return {
        success: false,
        error: `Year ${year} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    if (!quizData.hasSeries(year, series)) {
      return {
        success: false,
        error: `Series ${series} not found for year ${year}`,
        timestamp: new Date().toISOString(),
      };
    }

    const quizzes = metadata.getQuizSummaries(year, series);

    return {
      success: true,
      data: quizzes,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch quizzes",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get a specific quiz by ID (full data with questions)
 */
export function getQuizById(id: string): ApiResponse<Quiz> {
  try {
    const quiz = quizData.getQuizById(id);

    if (!quiz) {
      return {
        success: false,
        error: `Quiz with ID ${id} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      data: quiz,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch quiz",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Search quizzes by keyword
 */
export function searchQuizzes(searchTerm: string): ApiResponse<QuizSummary[]> {
  try {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return {
        success: false,
        error: "Search term is required",
        timestamp: new Date().toISOString(),
      };
    }

    const results = metadata.searchQuizzes(searchTerm);

    return {
      success: true,
      data: results,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to search quizzes",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get quiz summary without full question data
 */
export function getQuizSummary(id: string): ApiResponse<QuizSummary> {
  try {
    const summary = metadata.getQuizSummary(id);

    if (!summary) {
      return {
        success: false,
        error: `Quiz with ID ${id} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      data: summary,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch quiz summary",
      timestamp: new Date().toISOString(),
    };
  }
}

// Default export
export default {
  getAllYears,
  getYearById,
  getSeriesByYear,
  getSeriesById,
  getQuizzesBySeries,
  getQuizById,
  searchQuizzes,
  getQuizSummary,
};
