/**
 * useQuizzes Hook
 * Custom hook for fetching quizzes data
 */

import { useState, useEffect } from "react";
import { QuizSummary } from "@quiz/types";
import { fetchQuizzes, searchQuizzes } from "../api";

interface UseQuizzesState {
  quizzes: QuizSummary[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch all quizzes for a specific year and series
 */
export function useQuizzes(year: number, series: number): UseQuizzesState {
  const [quizzes, setQuizzes] = useState<QuizSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchQuizzes(year, series);

    if (result.success && result.data) {
      setQuizzes(result.data);
    } else {
      setError(result.error || "Failed to fetch quizzes");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (year && series) {
      fetchData();
    }
  }, [year, series]);

  return {
    quizzes,
    loading,
    error,
    refetch: fetchData,
  };
}

interface UseSearchQuizzesState {
  quizzes: QuizSummary[];
  loading: boolean;
  error: string | null;
  search: (term: string) => void;
  clear: () => void;
}

/**
 * Hook for searching quizzes by keyword
 * Note: This hook doesn't auto-fetch, call search() manually
 */
export function useSearchQuizzes(): UseSearchQuizzesState {
  const [quizzes, setQuizzes] = useState<QuizSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (searchTerm: string) => {
    if (!searchTerm || searchTerm.trim().length < 2) {
      setError("Search term must be at least 2 characters");
      return;
    }

    setLoading(true);
    setError(null);

    const result = await searchQuizzes(searchTerm);

    if (result.success && result.data) {
      setQuizzes(result.data);
    } else {
      setError(result.error || "Search failed");
      setQuizzes([]);
    }

    setLoading(false);
  };

  const clear = () => {
    setQuizzes([]);
    setError(null);
    setLoading(false);
  };

  return {
    quizzes,
    loading,
    error,
    search,
    clear,
  };
}
