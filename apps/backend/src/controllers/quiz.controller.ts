/**
 * Quiz Controller
 * Handles HTTP requests for individual quiz endpoints
 */

import { Request, Response } from "express";
import dataService from "@/services/data.service";

/**
 * GET /api/quiz/:id
 * Get a specific quiz by ID (full data with questions)
 */
export async function getQuizById(req: Request, res: Response): Promise<void> {
  try {
    const quizId = req.params.id;

    // Validate quiz ID
    if (!quizId || quizId.trim().length === 0) {
      res.status(400).json({
        success: false,
        error: "Quiz ID is required",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const result = dataService.getQuizById(quizId);

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
 * GET /api/quiz/:id/summary
 * Get quiz summary without full question data
 */
export async function getQuizSummary(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const quizId = req.params.id;

    // Validate quiz ID
    if (!quizId || quizId.trim().length === 0) {
      res.status(400).json({
        success: false,
        error: "Quiz ID is required",
        timestamp: new Date().toISOString(),
      });
      return;
    }

    const result = dataService.getQuizSummary(quizId);

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
  getQuizById,
  getQuizSummary,
};
