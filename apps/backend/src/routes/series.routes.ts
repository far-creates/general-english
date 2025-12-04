/**
 * Series Routes
 */

import { Router } from "express";
import seriesController from "../controllers/series.controller";

const router = Router();

/**
 * GET /api/series/:year
 * Get all series for a specific year
 */
// router.get("/:year", seriesController.getSeriesByYear);

export default router;
