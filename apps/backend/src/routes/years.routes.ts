/**
 * Years Routes
 * Defines routes for years endpoints
 */

import { Router } from "express";
import yearsController from "../controllers/years.controller";

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

export default router;
