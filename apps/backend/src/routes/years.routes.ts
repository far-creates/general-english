/**
 * Years Routes
 */

import { Router } from "express";
import yearsController from "../controllers/years.controller";
import seriesController from "@/controllers/series.controller";

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
router.get("/:year/:series", seriesController.getSeriesById);

export default router;
