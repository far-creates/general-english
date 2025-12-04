/**
 * Series Routes
 * Defines routes for series endpoints
 */

import { Router } from "express";
import seriesController from "../controllers/series.controller";

const router = Router();

/**
 * GET /api/years/:year/series
 * Get all series for a specific year
 */
router.get("/", seriesController.getSeriesByYear);

/**
 * GET /api/years/:year/series/:series
 * Get metadata for a specific series
 */
router.get("/:series", seriesController.getSeriesById);

export default router;
