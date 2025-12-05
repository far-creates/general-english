/**
 * Routes Index
 * Aggregates and mounts all application routes
 */

import { Router } from "express";
import yearsRoutes from "./years.routes";
import quizRoutes from "./quiz.routes";
import quizzesRoutes from "./quizzes.routes";

const router = Router();

/**
 * Mount all routes
 *
 * API Structure:
 * - GET /api/years                                  → All years
 * - GET /api/years/:year                            → Year metadata
 * - GET /api/years/:year/series                     → Series for year
 * - GET /api/years/:year/series/:series             → Series metadata
 * - GET /api/years/:year/series/:series/quizzes     → Quizzes for series
 * - GET /api/quiz/:id                               → Full quiz with questions
 * - GET /api/quiz/:id/summary                       → Quiz summary
 * - GET /api/quizzes/search?q=keyword               → Search quizzes
 */

// Years routes - handles all nested year/series/quiz listing
router.use("/years", yearsRoutes);

// Quiz routes - handles individual quiz data
router.use("/quiz", quizRoutes);

// Quizzes routes - handles search
router.use("/quizzes", quizzesRoutes);

/**
 * Health check endpoint
 * GET /api/health
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
 * GET /api
 */
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Quiz API",
    version: "1.0.0",
    endpoints: {
      years: "/api/years",
      yearById: "/api/years/:year",
      series: "/api/years/:year/series",
      seriesById: "/api/years/:year/series/:series",
      quizzes: "/api/years/:year/series/:series/quizzes",
      quiz: "/api/quiz/:id",
      quizSummary: "/api/quiz/:id/summary",
      search: "/api/quizzes/search?q=keyword",
      health: "/api/health",
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;
