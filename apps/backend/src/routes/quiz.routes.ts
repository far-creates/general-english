/**
 * Quiz Routes
 * Handles individual quiz endpoints
 */

import { Router } from "express";
import quizController from "../controllers/quiz.controller";

const router = Router();

/**
 * GET /api/quiz/:id
 * Get a specific quiz by ID (full data with questions)
 */
router.get("/:id", quizController.getQuizById);

/**
 * GET /api/quiz/:id/summary
 * Get quiz summary without full question data
 */
router.get("/:id/summary", quizController.getQuizSummary);

export default router;
