/**
 * API Client
 * Frontend service for making API requests to backend
 */

import {
  ApiResponse,
  YearData,
  SeriesData,
  QuizSummary,
  Quiz,
} from "@quiz/types";

// Base API URL - configurable via environment variable
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`,
      }));

      return {
        success: false,
        error:
          errorData.error || `Request failed with status ${response.status}`,
      };
    }

    const data: ApiResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error occurred",
    };
  }
}

/**
 * GET /api/years
 */
export async function fetchYears(): Promise<ApiResponse<YearData[]>> {
  return fetchAPI<YearData[]>("/years");
}

/**
 * GET /api/years/:year
 */
export async function fetchYear(year: number): Promise<ApiResponse<YearData>> {
  return fetchAPI<YearData>(`/years/${year}`);
}

/**
 * GET /api/series/:year
 */
export async function fetchSeries(
  year: number
): Promise<ApiResponse<SeriesData[]>> {
  return fetchAPI<SeriesData[]>(`/series/${year}`);
}

/**
 * GET /api/quizzes/:year/:series
 */
export async function fetchQuizzes(
  year: number,
  series: number
): Promise<ApiResponse<QuizSummary[]>> {
  return fetchAPI<QuizSummary[]>(`/quizzes/${year}/${series}`);
}

/**
 * GET /api/quiz/:id
 */
export async function fetchQuiz(quizId: string): Promise<ApiResponse<Quiz>> {
  return fetchAPI<Quiz>(`/quiz/${quizId}`);
}

/**
 * GET /api/quiz/:id/summary
 */
export async function fetchQuizSummary(
  quizId: string
): Promise<ApiResponse<QuizSummary>> {
  return fetchAPI<QuizSummary>(`/quiz/${quizId}/summary`);
}

/**
 * GET /api/search?q=keyword
 */
export async function searchQuizzes(
  searchTerm: string
): Promise<ApiResponse<QuizSummary[]>> {
  const encodedTerm = encodeURIComponent(searchTerm);
  return fetchAPI<QuizSummary[]>(`/search?q=${encodedTerm}`);
}

/**
 * GET /api/health
 */
export async function checkHealth(): Promise<ApiResponse<{ message: string }>> {
  return fetchAPI<{ message: string }>("/health");
}

export default {
  fetchYears,
  fetchYear,
  fetchSeries,
  fetchQuizzes,
  fetchQuiz,
  fetchQuizSummary,
  searchQuizzes,
  checkHealth,
};
