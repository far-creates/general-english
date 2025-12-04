/**
 * Years Controller
 * Handles HTTP requests for years endpoints
 */

import { Request, Response } from "express";
import dataService from "../services/data.service";

/**
 * GET /api/years
 * Get all available years
 */
export async function getAllYears(req: Request, res: Response): Promise<void> {
  try {
    const result = dataService.getAllYears();

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
 * GET /api/years/:year
 * Get metadata for a specific year
 */
export async function getYearById(req: Request, res: Response): Promise<void> {
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

    const result = dataService.getYearById(year);

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
  getAllYears,
  getYearById,
};
