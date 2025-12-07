/**
 * Core test and vocabulary types
 */

export interface VocabularyItem {
  word: string;
  forms?: string[]; // Additional forms like past tense, gerund
  persianMeaning: string;
  explanation: string; // Full Persian explanation
  examples: VocabularyExample[];
  collocations?: string[];
  relatedWords?: {
    synonyms?: string[];
    antonyms?: string[];
  };
}

export interface VocabularyExample {
  english: string;
  persian: string;
  context?: string;
}

export interface ChoiceExplanation {
  choice: string;
  isCorrect: boolean;
  persianMeaning: string;
  explanation: string;
  collocations?: string[];
  examples?: VocabularyExample[];
}

export interface TestQuestion {
  text: string; // The question with blank marked as _________
  blank: string; // The word that goes in the blank
  choices: {
    id: number;
    text: string;
  }[];
  correctAnswer: number; // ID of correct choice (1-4)
}

export interface Test {
  id: string; // Format: "year-series-number" e.g. "1399-1-1"
  year: number;
  series: number;
  number: number;
  title: string;

  question: TestQuestion;

  // Vocabulary explanations for words IN the question
  vocabulary: VocabularyItem[];

  // Explanations for all 4 choices
  choiceExplanations: ChoiceExplanation[];

  // Full Persian translation of the sentence
  translation: string;

  // Summary of all vocabulary (for quick reference)
  vocabularySummary: {
    word: string;
    meaning: string;
    isCorrectAnswer?: boolean;
  }[];
}

export interface UserVocabularyProgress {
  word: string;
  testId: string;
  learned: boolean;
  lastReviewed?: string;
  reviewCount: number;
}

export interface UserTestProgress {
  testId: string;
  status:
    | "locked"
    | "available"
    | "vocab-learning"
    | "ready-for-test"
    | "completed";
  vocabularyProgress: {
    total: number;
    learned: number;
  };
  testAttempt?: {
    selectedAnswer: number;
    wasCorrect: boolean;
    attemptedAt: string;
  };
  completedAt?: string;
}
