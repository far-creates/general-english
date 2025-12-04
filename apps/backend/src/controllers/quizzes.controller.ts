/**
 * Quizzes Controller
 * Handles HTTP requests for quizzes listing endpoints
 */

import { Request, Response } from "express";
import dataService from "../services/data.service";

/**
 * GET /api/years/:year/series/:series/quizzes
 * Get all quizzes for a specific year and series (summaries only)
 */
export async function getQuizzesBySeries(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const year = parseInt(req.params.year, 10);
    const series = parseInt(req.params.series, 10);

    // Validate parameters
    if (isNaN(year)) {
      res.status(400).json({
        success: false,
        error: "Invalid year parameter",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    if (isNaN(series)) {
      res.status(400).json({
        success: false,
        error: "Invalid series parameter",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const result = dataService.getQuizzesBySeries(year, series);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * GET /api/quizzes/search?q=keyword
 * Search quizzes by keyword
 */
export async function searchQuizzes(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const searchTerm = req.query.q as string;

    // Validate search term
    if (!searchTerm || searchTerm.trim().length === 0) {
      res.status(400).json({
        success: false,
        error: "Search term (q) is required",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const result = dataService.searchQuizzes(searchTerm);

    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
}

// Default export
export default {
  getQuizzesBySeries,
  searchQuizzes,
};
