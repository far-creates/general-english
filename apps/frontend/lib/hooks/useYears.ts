/**
 * useYears Hook
 * Custom hook for fetching years data
 */

import { useState, useEffect } from "react";
import { YearData } from "@quiz/types";
import { fetchYears, fetchYear } from "../api";

interface UseYearsState {
  years: YearData[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch all available years
 */
export function useYears(): UseYearsState {
  const [years, setYears] = useState<YearData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchYears();

    if (result.success && result.data) {
      setYears(result.data);
    } else {
      setError(result.error || "Failed to fetch years");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    years,
    loading,
    error,
    refetch: fetchData,
  };
}

interface UseYearState {
  year: YearData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch a specific year's metadata
 */
export function useYear(yearNumber: number): UseYearState {
  const [year, setYear] = useState<YearData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchYear(yearNumber);

    if (result.success && result.data) {
      setYear(result.data);
    } else {
      setError(result.error || "Failed to fetch year");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (yearNumber) {
      fetchData();
    }
  }, [yearNumber]);

  return {
    year,
    loading,
    error,
    refetch: fetchData,
  };
}
