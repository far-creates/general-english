// packages/types/src/index.ts
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
