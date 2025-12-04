export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  year?: number;
  series?: number;
  testNumber?: number;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  year?: number;
  series?: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
