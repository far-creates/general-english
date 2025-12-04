// Quiz-related types
export type { Question, Quiz, QuizMetadata, QuizProgress } from "./quiz.types";

// API-related types
export type {
  ApiResponse,
  ErrorResponse,
  PaginatedResponse,
  ValidationError,
  ApiRequestOptions,
} from "./api.types";

// Navigation and user-related types
export type {
  YearData,
  SeriesData,
  QuizSummary,
  UserAnswer,
  QuizResult,
  UserProgress,
} from "./navigation.types";

// Re-export everything as a namespace (optional, for convenience)
export * as QuizTypes from "./quiz.types";
export * as ApiTypes from "./api.types";
export * as NavigationTypes from "./navigation.types";

// OLD FILES =============================================================================
// export interface Question {
//   id: string;
//   text: string;
//   options: string[];
//   correctAnswer: number;
//   explanation?: string;
//   year?: number;
//   series?: number;
//   testNumber?: number;
// }

// export interface Quiz {
//   id: string;
//   title: string;
//   description?: string;
//   questions: Question[];
//   year?: number;
//   series?: number;
// }

// export interface ApiResponse<T> {
//   success: boolean;
//   data?: T;
//   error?: string;
// }
