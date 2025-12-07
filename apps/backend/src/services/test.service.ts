import { Request, Response } from "express";
import { Test, ApiResponse } from "@quiz/types";
import * as testData from "../data/tests";

/**
 * Get test by ID with full details
 */
export function getTestById(testId: string): ApiResponse<Test> {
  try {
    const test = testData.getTestById(testId);

    if (!test) {
      return {
        success: false,
        error: `Test ${testId} not found`,
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      data: test,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch test",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get all tests
 */
export function getAllTests(): ApiResponse<Test[]> {
  try {
    const tests = testData.getAllTests();

    return {
      success: true,
      data: tests,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch tests",
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Get tests by year and series
 */
export function getTestsByYearAndSeries(
  year: number,
  series: number
): ApiResponse<Test[]> {
  try {
    const tests = testData.getTestsByYearAndSeries(year, series);

    return {
      success: true,
      data: tests,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch tests",
      timestamp: new Date().toISOString(),
    };
  }
}
