/**
 * useSeries Hook
 * Custom hook for fetching series data
 */

import { useState, useEffect } from "react";
import { SeriesData } from "@quiz/types";
import { fetchSeries, fetchSeriesById } from "../api";

interface UseSeriesState {
  seriesList: SeriesData[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch all series for a specific year
 */
export function useSeries(year: number): UseSeriesState {
  const [seriesList, setSeriesList] = useState<SeriesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchSeries(year);

    if (result.success && result.data) {
      setSeriesList(result.data);
    } else {
      setError(result.error || "Failed to fetch series");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (year) {
      fetchData();
    }
  }, [year]);

  return {
    seriesList,
    loading,
    error,
    refetch: fetchData,
  };
}

interface UseSeriesByIdState {
  series: SeriesData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Hook to fetch a specific series metadata
 */
export function useSeriesById(
  year: number,
  seriesNumber: number
): UseSeriesByIdState {
  const [series, setSeries] = useState<SeriesData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const result = await fetchSeriesById(year, seriesNumber);

    if (result.success && result.data) {
      setSeries(result.data);
    } else {
      setError(result.error || "Failed to fetch series");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (year && seriesNumber) {
      fetchData();
    }
  }, [year, seriesNumber]);

  return {
    series,
    loading,
    error,
    refetch: fetchData,
  };
}
