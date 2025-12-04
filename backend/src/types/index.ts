export interface User {
  id: string;
  email: string;
  name: string;
  licenseKey?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  persianExplanation: string;
}

export interface Progress {
  userId: string;
  quizId: string;
  score: number;
  completedAt: Date;
}
