import { Test } from "@quiz/types";
import { tests_1399_series_1 } from "./1399-1";

/**
 * Central repository of all tests
 */
export const allTests: Record<string, Test> = {
  ...tests_1399_series_1,
};

/**
 * Get test by ID
 */
export function getTestById(id: string): Test | null {
  return allTests[id] || null;
}

/**
 * Get all tests
 */
export function getAllTests(): Test[] {
  return Object.values(allTests);
}

/**
 * Get tests by year
 */
export function getTestsByYear(year: number): Test[] {
  return Object.values(allTests).filter((test) => test.year === year);
}

/**
 * Get tests by year and series
 */
export function getTestsByYearAndSeries(year: number, series: number): Test[] {
  return Object.values(allTests).filter(
    (test) => test.year === year && test.series === series
  );
}

/**
 * Get next available test (for progressive unlocking)
 */
export function getNextTest(currentTestId: string): Test | null {
  const allTestsList = getAllTests().sort((a, b) => {
    // Sort by year, then series, then number
    if (a.year !== b.year) return a.year - b.year;
    if (a.series !== b.series) return a.series - b.series;
    return a.number - b.number;
  });

  const currentIndex = allTestsList.findIndex((t) => t.id === currentTestId);
  if (currentIndex === -1 || currentIndex === allTestsList.length - 1) {
    return null;
  }

  return allTestsList[currentIndex + 1];
}
