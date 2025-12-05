/**
 * Quiz Type Definitions
 * Core types for quiz questions and quiz structure
 */

/**
 * Word explanation with examples and collocations
 */
export interface WordExplanation {
  /** The word being explained */
  word: string;

  /** English meaning/definition */
  meaning: string;

  /** Persian translation */
  translation: string;

  /** Example sentences using the word */
  examples?: string[];

  /** Common collocations or phrases */
  collocations?: string[];

  /** Additional usage notes */
  notes?: string;
}

/**
 * Explanation for why a wrong answer is incorrect
 */
export interface WrongAnswerExplanation {
  /** Index of the wrong option (0-based) */
  optionIndex: number;

  /** The wrong option text */
  optionText: string;

  /** Explanation of why this answer is wrong */
  reason: string;

  /** Persian translation of the reason (optional) */
  reasonTranslation?: string;
}

/**
 * Represents a single question in a quiz
 */
export interface Question {
  /** Unique identifier for the question */
  id: string;

  /** The question text to be displayed */
  text: string;

  /** Array of possible answers */
  options: string[];

  /** Index of the correct answer in the options array (0-based) */
  correctAnswer: number;

  /** Optional explanation of the correct answer */
  explanation?: string;

  /** Year this question belongs to (e.g., 1399) */
  year?: number;

  /** Series number within the year */
  series?: number;

  /** Test number within the series */
  testNumber?: number;

  /** NEW: Detailed word explanations */
  wordExplanations?: WordExplanation[];

  /** NEW: Persian translation of the question */
  questionTranslation?: string;

  /** NEW: Explanations for wrong answers */
  wrongAnswerExplanations?: WrongAnswerExplanation[];

  /** NEW: Vocabulary summary list */
  vocabularySummary?: string[];
}

/**
 * Represents a complete quiz with all its questions
 */
export interface Quiz {
  /** Unique identifier for the quiz */
  id: string;

  /** Title of the quiz */
  title: string;

  /** Optional description of the quiz */
  description?: string;

  /** Array of questions in this quiz */
  questions: Question[];

  /** Year this quiz belongs to (e.g., 1399) */
  year?: number;

  /** Series number within the year */
  series?: number;
}

/**
 * Metadata about a quiz (without the full question data)
 * Used for listing quizzes before loading full details
 */
export interface QuizMetadata {
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

  /** Test number (if applicable) */
  testNumber?: number;
}

/**
 * Tracks user's progress through a quiz
 */
export interface QuizProgress {
  /** Current question index (0-based) */
  currentQuestion: number;

  /** Array of user's answers (index matches question index, -1 means unanswered) */
  answers: number[];

  /** Total time spent on quiz in seconds */
  timeSpent?: number;

  /** Timestamp when quiz was started */
  startedAt?: Date;

  /** Whether the quiz has been submitted */
  isSubmitted?: boolean;
}
