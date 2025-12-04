export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questionCount: number;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  persianExplanation: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
