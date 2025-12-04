/**
 * Validation Middleware
 * Request validation utilities
 */

import { Request, Response, NextFunction } from "express";
import { ValidationError } from "@quiz/types";
import { AppError } from "./errorHandler";

/**
 * Validate year parameter
 */
export function validateYear(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const year = parseInt(req.params.year, 10);

  if (isNaN(year)) {
    throw new AppError("Invalid year parameter. Year must be a number.", 400);
  }

  if (year < 1300 || year > 2100) {
    throw new AppError("Year must be between 1300 and 2100", 400);
  }

  // Store parsed value for use in controllers
  req.params.year = year.toString();
  next();
}

/**
 * Validate series parameter
 */
export function validateSeries(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const series = parseInt(req.params.series, 10);

  if (isNaN(series)) {
    throw new AppError(
      "Invalid series parameter. Series must be a number.",
      400
    );
  }

  if (series < 1 || series > 100) {
    throw new AppError("Series must be between 1 and 100", 400);
  }

  // Store parsed value for use in controllers
  req.params.series = series.toString();
  next();
}

/**
 * Validate quiz ID parameter
 */
export function validateQuizId(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const quizId = req.params.id;

  if (!quizId || quizId.trim().length === 0) {
    throw new AppError("Quiz ID is required", 400);
  }

  if (quizId.length > 100) {
    throw new AppError("Quiz ID is too long", 400);
  }

  // Basic format validation (optional - adjust pattern as needed)
  const validIdPattern = /^[a-zA-Z0-9_-]+$/;
  if (!validIdPattern.test(quizId)) {
    throw new AppError("Quiz ID contains invalid characters", 400);
  }

  next();
}

/**
 * Validate search query parameter
 */
export function validateSearchQuery(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const searchTerm = req.query.q as string;

  if (!searchTerm || searchTerm.trim().length === 0) {
    throw new AppError("Search query (q) is required", 400);
  }

  if (searchTerm.length < 2) {
    throw new AppError("Search query must be at least 2 characters", 400);
  }

  if (searchTerm.length > 100) {
    throw new AppError("Search query is too long (max 100 characters)", 400);
  }

  next();
}

/**
 * Generic validation error response builder
 */
export function buildValidationErrors(errors: ValidationError[]): AppError {
  const message = errors
    .map((err) => `${err.field}: ${err.message}`)
    .join(", ");
  const error = new AppError(`Validation failed: ${message}`, 400);
  return error;
}

/**
 * Sanitize string input (remove potentially harmful characters)
 */
export function sanitizeString(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove HTML tags
    .replace(/['"]/g, "") // Remove quotes
    .substring(0, 1000); // Limit length
}

/**
 * Request body validator
 * Validates that request body is valid JSON (for future POST/PUT endpoints)
 */
export function validateJsonBody(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
    if (!req.is("application/json")) {
      throw new AppError("Content-Type must be application/json", 400);
    }
  }
  next();
}

export default {
  validateYear,
  validateSeries,
  validateQuizId,
  validateSearchQuery,
  buildValidationErrors,
  sanitizeString,
  validateJsonBody,
};
