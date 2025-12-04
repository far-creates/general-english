/**
 * useQuiz Hook
 * Custom hook for fetching individual quiz data
 */

import { useState, useEffect } from "react";
import { Quiz, QuizSummary } from "@quiz/types";
import { fetchQuiz, fetchQuizSummary } from "../api";

interface UseQuizState {
  quiz: Quiz | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch a specific quiz by ID (full data with questions)
 */
export function useQuiz(quizId: string): UseQuizState {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchQuiz(quizId);

    if (result.success && result.data) {
      setQuiz(result.data);
    } else {
      setError(result.error || "Failed to fetch quiz");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (quizId) {
      fetchData();
    }
  }, [quizId]);

  return {
    quiz,
    loading,
    error,
    refetch: fetchData,
  };
}

interface UseQuizSummaryState {
  summary: QuizSummary | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch quiz summary without full question data
 * Useful for previews or when you only need metadata
 */
export function useQuizSummary(quizId: string): UseQuizSummaryState {
  const [summary, setSummary] = useState<QuizSummary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchQuizSummary(quizId);

    if (result.success && result.data) {
      setSummary(result.data);
    } else {
      setError(result.error || "Failed to fetch quiz summary");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (quizId) {
      fetchData();
    }
  }, [quizId]);

  return {
    summary,
    loading,
    error,
    refetch: fetchData,
  };
}
