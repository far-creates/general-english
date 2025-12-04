/**
 * Backend Server - Main Entry Point
 * Express.js server for Quiz Application API
 */

import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";

// Initialize Express app
const app: Application = express();
const PORT = process.env.PORT || 3001;

/**
 * Middleware Configuration
 */

// Enable CORS for frontend access
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (simple version)
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

/**
 * API Routes
 */

// Mount all API routes under /api prefix
app.use("/api", routes);

/**
 * Root endpoint
 */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Quiz Application API",
    version: "1.0.0",
    documentation: "/api",
    timestamp: new Date().toISOString(),
  });
});

/**
 * Error Handling
 */

// 404 handler - must be after all routes
app.use(notFoundHandler);

// Global error handler - must be last
app.use(errorHandler);

/**
 * Start Server
 */
app.listen(PORT, () => {
  console.log("=".repeat(50));
  console.log("🚀 Quiz Application API Server");
  console.log("=".repeat(50));
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log("=".repeat(50));
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason: Error, promise: Promise<any>) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // In production, you might want to exit the process
  // process.exit(1);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error: Error) => {
  console.error("Uncaught Exception:", error);
  // In production, exit the process
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  process.exit(0);
});

export default app;
