/**
 * Routes Index
 * Aggregates and mounts all application routes
 */

import { Router } from "express";
import yearsRoutes from "./years.routes";
import seriesRoutes from "./series.routes";
import quizzesRoutes, { searchRouter } from "./quizzes.routes";
import quizRoutes from "./quiz.routes";

const router = Router();

/**
 * Mount all routes
 *
 * SIMPLIFIED Route Structure:
 * - GET /api/years                    - Get all years
 * - GET /api/years/:year              - Get specific year metadata
 * - GET /api/series/:year             - Get series for a year
 * - GET /api/quizzes/:year/:series    - Get quizzes for a series
 * - GET /api/quiz/:id                 - Get full quiz with questions
 * - GET /api/quiz/:id/summary         - Get quiz summary
 * - GET /api/search?q=keyword         - Search quizzes
 */

// Years routes
router.use("/years", yearsRoutes);

// Series routes
router.use("/series", seriesRoutes);

// Quizzes routes
router.use("/quizzes", quizzesRoutes);

// Quiz routes
router.use("/quiz", quizRoutes);

// Search route
router.use("/search", searchRouter);

/**
 * Health check endpoint
 */
router.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Quiz API is running",
    timestamp: new Date().toISOString(),
  });
});

/**
 * Root endpoint
 */
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Quiz API",
    version: "1.0.0",
    endpoints: {
      years: "/api/years",
      yearDetail: "/api/years/:year",
      series: "/api/series/:year",
      quizzes: "/api/quizzes/:year/:series",
      quiz: "/api/quiz/:id",
      search: "/api/search?q=keyword",
      health: "/api/health",
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;
