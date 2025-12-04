import express from "express";
import cors from "cors";
import { Quiz, ApiResponse } from "@quiz/types";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Static quiz data from General English PDF
const mockQuiz: Quiz = {
  id: "1",
  title: "General English Vocabulary Test",
  description: "English vocabulary questions from 1399 exam series",
  year: 1399,
  series: 1,
  questions: [
    {
      id: "q1",
      testNumber: 1,
      text: "I omitted all the extraneous details while explaining the _________ of the matter to him.",
      options: ["breach", "distinction", "qualm", "gist"],
      correctAnswer: 3,
      explanation:
        'Gist means the main point or essence. The sentence says "I removed all extra details while explaining the essence of the matter."',
    },
    {
      id: "q2",
      testNumber: 2,
      text: "While his brother writes in an unclear and clumsy way, Sam himself is known for his _________ style of writing.",
      options: ["lucid", "verbose", "dull", "feasible"],
      correctAnswer: 0,
      explanation:
        "Lucid means clear and easy to understand. The sentence shows contrast - brother writes unclear, Sam writes clear (lucid).",
    },
    {
      id: "q3",
      testNumber: 3,
      text: "Poultry farms place the eggs into incubators to _________ the growth of the embryo into chicken.",
      options: ["conquer", "hasten", "outline", "elude"],
      correctAnswer: 1,
      explanation:
        "Hasten means to speed up or accelerate. Incubators are used to speed up the growth process of embryos into chickens.",
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
