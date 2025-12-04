/**
 * Quizzes Routes
 * Defines routes for quizzes listing endpoints
 */

import { Router } from "express";
import quizzesController from "../controllers/quizzes.controller";

const router = Router();

/**
 * GET /api/years/:year/series/:series/quizzes
 * Get all quizzes for a specific year and series
 */
router.get("/", quizzesController.getQuizzesBySeries);

/**
 * GET /api/quizzes/search?q=keyword
 * Search quizzes by keyword
 * Note: This route is mounted separately in the main routes file
 */
export const searchRouter = Router();
searchRouter.get("/search", quizzesController.searchQuizzes);

export default router;
