import express from "express";
import cors from "cors";
import { Quiz, ApiResponse } from "@quiz/types";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Static quiz data
const mockQuiz: Quiz = {
  id: "1",
  title: "English Grammar Basics",
  questions: [
    {
      id: "q1",
      text: "Which is the correct form?",
      options: ["He go to school", "He goes to school", "He going to school"],
      correctAnswer: 1,
    },
    {
      id: "q2",
      text: 'Choose the past tense of "run"',
      options: ["runned", "ran", "run"],
      correctAnswer: 1,
    },
    {
      id: "q3",
      text: "Which sentence is correct?",
      options: [
        "She don't like pizza",
        "She doesn't like pizza",
        "She doesn't likes pizza",
      ],
      correctAnswer: 1,
    },
  ],
};

// API endpoint
app.get("/api/quiz", (req, res) => {
  const response: ApiResponse<Quiz> = {
    success: true,
    data: mockQuiz,
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
