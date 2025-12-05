// ============================================================================
// 1. years.routes.ts
// Location: backend/src/routes/years.routes.ts
// ============================================================================

/**
 * Years Routes
 * Handles all year, series, and quiz listing endpoints
 */

import { Router } from "express";
import yearsController from "../controllers/years.controller";
import seriesController from "../controllers/series.controller";
import quizzesController from "../controllers/quizzes.controller";

const router = Router();

/**
 * GET /api/years
 * Get all available years
 */
router.get("/", yearsController.getAllYears);

/**
 * GET /api/years/:year
 * Get metadata for a specific year
 */
router.get("/:year", yearsController.getYearById);

/**
 * GET /api/years/:year/series
 * Get all series for a specific year
 */
router.get("/:year/series", seriesController.getSeriesByYear);

/**
 * GET /api/years/:year/series/:series
 * Get metadata for a specific series
 */
router.get("/:year/series/:series", seriesController.getSeriesById);

/**
 * GET /api/years/:year/series/:series/quizzes
 * Get all quizzes for a specific year and series
 */
router.get(
  "/:year/series/:series/quizzes",
  quizzesController.getQuizzesBySeries
);

export default router;
