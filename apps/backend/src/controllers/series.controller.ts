/**
 * Series Controller
 * Handles HTTP requests for series endpoints
 */

import { Request, Response } from "express";
import dataService from "../services/data.service";

/**
 * GET /api/years/:year/series
 * Get all series for a specific year
 */
export async function getSeriesByYear(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const year = parseInt(req.params.year, 10);

    // Validate year parameter
    if (isNaN(year)) {
      res.status(400).json({
        success: false,
        error: "Invalid year parameter",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const result = dataService.getSeriesByYear(year);

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
 * GET /api/years/:year/series/:series
 * Get metadata for a specific series
 */
export async function getSeriesById(
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

    const result = dataService.getSeriesById(year, series);

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

// Default export
export default {
  getSeriesByYear,
  getSeriesById,
};
