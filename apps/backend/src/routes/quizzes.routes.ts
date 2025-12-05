/**
 * Quizzes Routes
 * Handles quiz search endpoint
 */

import { Router } from "express";
import quizzesController from "../controllers/quizzes.controller";

const router = Router();

/**
 * GET /api/quizzes/search?q=keyword
 * Search quizzes by keyword
 */
router.get("/search", quizzesController.searchQuizzes);

export default router;
