/**
 * Error Handler Middleware
 * Global error handling for Express application
 */

import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "@quiz/types";

/**
 * Custom error class for application errors
 */
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Global error handler middleware
 * Catches all errors and sends consistent error responses
 */
export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Default error values
  let statusCode = 500;
  let message = "Internal server error";
  let isOperational = false;

  // Check if it's our custom AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    isOperational = err.isOperational;
  } else if (err.message) {
    // Use the error message if available
    message = err.message;
  }

  // Log error for debugging (in production, use proper logging service)
  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    statusCode,
    isOperational,
    timestamp: new Date().toISOString(),
  });

  // Send error response
  const errorResponse: ErrorResponse = {
    message,
    statusCode,
    timestamp: new Date().toISOString(),
  };

  // In development, include stack trace
  if (process.env.NODE_ENV === "development") {
    errorResponse.details = {
      stack: err.stack,
    };
  }

  res.status(statusCode).json({
    success: false,
    error: message,
    ...errorResponse,
  });
}

/**
 * 404 Not Found handler
 * Handles requests to undefined routes
 */
export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const error = new AppError(`Route ${req.originalUrl} not found`, 404);
  next(error);
}

/**
 * Async error wrapper
 * Wraps async route handlers to catch errors
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default {
  errorHandler,
  notFoundHandler,
  asyncHandler,
  AppError,
};
