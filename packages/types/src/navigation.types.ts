/**
 * Navigation Type Definitions
 * Types for navigation structure and user progress
 */

/**
 * Represents a year with available series
 * Used in the home page to display available years
 */
export interface YearData {
  /** The year number (e.g., 1399, 1400) */
  year: number;

  /** Number of series available in this year */
  seriesCount: number;

  /** Total number of quizzes across all series */
  totalQuizzes: number;

  /** Optional display title for the year */
  title?: string;

  /** Optional description */
  description?: string;
}

/**
 * Represents a series within a year
 * Used in the year page to display available series
 */
export interface SeriesData {
  /** Series number within the year */
  series: number;

  /** Number of quizzes in this series */
  quizCount: number;

  /** Year this series belongs to */
  year: number;

  /** Optional display title for the series */
  title?: string;

  /** Optional description */
  description?: string;
}

/**
 * Summary of a quiz (lightweight version)
 * Used for listing quizzes before loading full details
 */
export interface QuizSummary {
  /** Unique identifier for the quiz */
  id: string;

  /** Title of the quiz */
  title: string;

  /** Optional description */
  description?: string;

  /** Number of questions in this quiz */
  questionCount: number;

  /** Year this quiz belongs to */
  year: number;

  /** Series number within the year */
  series: number;

  /** Test number within the series */
  testNumber?: number;

  /** Estimated time to complete in minutes */
  estimatedTime?: number;

  /** Difficulty level */
  difficulty?: "easy" | "medium" | "hard";
}

/**
 * Represents a user's answer to a question
 * Used for tracking and reviewing answers
 */
export interface UserAnswer {
  /** ID of the question being answered */
  questionId: string;

  /** Index of the selected option */
  selectedOption: number;

  /** Whether the answer is correct */
  isCorrect: boolean;

  /** Time spent on this question in seconds */
  timeSpent?: number;
}

/**
 * Complete results of a quiz attempt
 * Used in the results page
 */
export interface QuizResult {
  /** ID of the quiz that was completed */
  quizId: string;

  /** User's score (number of correct answers) */
  score: number;

  /** Total number of questions */
  totalQuestions: number;

  /** Percentage score (0-100) */
  percentage: number;

  /** Array of all user answers with correctness */
  answers: UserAnswer[];

  /** When the quiz was completed */
  completedAt: Date;

  /** Total time spent on quiz in seconds */
  totalTimeSpent?: number;

  /** Pass/fail status (if applicable) */
  passed?: boolean;

  /** Passing threshold percentage (if applicable) */
  passingScore?: number;
}

/**
 * User's overall progress across all quizzes
 * Used for tracking learning progress
 */
export interface UserProgress {
  /** Total quizzes completed */
  quizzesCompleted: number;

  /** Total quizzes available */
  totalQuizzes: number;

  /** Average score percentage across all completed quizzes */
  averageScore: number;

  /** Total time spent on all quizzes in seconds */
  totalTimeSpent: number;

  /** Array of completed quiz IDs */
  completedQuizIds: string[];

  /** Last quiz taken */
  lastQuizId?: string;

  /** Timestamp of last activity */
  lastActivity?: Date;
}
