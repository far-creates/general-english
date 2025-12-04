/**
 * API Type Definitions
 * Types for API requests and responses
 */

/**
 * Generic API response wrapper
 * Used to standardize all API responses
 */
export interface ApiResponse<T> {
  /** Whether the request was successful */
  success: boolean;

  /** The response data (only present if success is true) */
  data?: T;

  /** Error message (only present if success is false) */
  error?: string;

  /** Optional timestamp of the response */
  timestamp?: string;
}

/**
 * Detailed error response
 * Used for more complex error reporting
 */
export interface ErrorResponse {
  /** Human-readable error message */
  message: string;

  /** Optional error code for programmatic handling */
  code?: string;

  /** Optional detailed error information */
  details?: Record<string, any>;

  /** HTTP status code */
  statusCode?: number;

  /** Timestamp when error occurred */
  timestamp?: string;
}

/**
 * Paginated response wrapper
 * Used when returning lists of items with pagination
 */
export interface PaginatedResponse<T> {
  /** Array of items for current page */
  items: T[];

  /** Total number of items across all pages */
  total: number;

  /** Current page number (1-based) */
  page: number;

  /** Number of items per page */
  pageSize: number;

  /** Total number of pages */
  totalPages: number;

  /** Whether there is a next page */
  hasNext: boolean;

  /** Whether there is a previous page */
  hasPrevious: boolean;
}

/**
 * Validation error details
 * Used when request validation fails
 */
export interface ValidationError {
  /** Field name that failed validation */
  field: string;

  /** Validation error message */
  message: string;

  /** Type of validation that failed */
  type?: "required" | "format" | "range" | "custom";
}

/**
 * API request options
 * Configuration for API calls
 */
export interface ApiRequestOptions {
  /** Request timeout in milliseconds */
  timeout?: number;

  /** Custom headers */
  headers?: Record<string, string>;

  /** Whether to include credentials */
  credentials?: boolean;

  /** Abort signal for canceling requests */
  signal?: AbortSignal;
}
