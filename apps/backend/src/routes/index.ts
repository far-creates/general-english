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
 * Route Structure:
 * - GET /api/years                                      - Get all years
 * - GET /api/years/:year                                - Get specific year metadata
 * - GET /api/years/:year/series                         - Get series for a year
 * - GET /api/years/:year/series/:series                 - Get specific series metadata
 * - GET /api/years/:year/series/:series/quizzes         - Get quizzes for a series
 * - GET /api/quiz/:id                                   - Get full quiz with questions
 * - GET /api/quiz/:id/summary                           - Get quiz summary
 * - GET /api/quizzes/search?q=keyword                   - Search quizzes
 */

// Years routes - /api/years
router.use("/years", yearsRoutes);

// Series routes - /api/years/:year/series
// Note: This creates nested routing under years
router.use(
  "/years/:year/series",
  (req, res, next) => {
    // Pass year parameter to series routes
    next();
  },
  seriesRoutes
);

// Quizzes routes - /api/years/:year/series/:series/quizzes
router.use(
  "/years/:year/series/:series/quizzes",
  (req, res, next) => {
    // Pass year and series parameters to quizzes routes
    next();
  },
  quizzesRoutes
);

// Quiz routes - /api/quiz
router.use("/quiz", quizRoutes);

// Search route - /api/quizzes/search
router.use("/quizzes", searchRouter);

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
      series: "/api/years/:year/series",
      quizzes: "/api/years/:year/series/:series/quizzes",
      quiz: "/api/quiz/:id",
      search: "/api/quizzes/search?q=keyword",
      health: "/api/health",
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;
