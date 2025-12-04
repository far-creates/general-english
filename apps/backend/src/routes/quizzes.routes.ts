/**
 * Quizzes Routes
 */

import { Router } from "express";
import quizzesController from "../controllers/quizzes.controller";

const router = Router();

/**
 * GET /api/quizzes/:year/:series
 * Get all quizzes for a specific year and series
 */
router.get("/:year/:series", quizzesController.getQuizzesBySeries);

/**
 * GET /api/search?q=keyword
 * Search quizzes by keyword
 */
export const searchRouter = Router();
searchRouter.get("/", quizzesController.searchQuizzes);

export default router;
