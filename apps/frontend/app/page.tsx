"use client";

import { useState, useEffect } from "react";
import { Quiz, ApiResponse } from "@quiz/types";
import { formatQuizTitle, calculateScore } from "@quiz/utils";

export default function Home() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/quiz")
      .then((res) => res.json())
      .then((data: ApiResponse<Quiz>) => {
        if (data.success && data.data) {
          setQuiz(data.data);
          setAnswers(new Array(data.data.questions.length).fill(-1));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quiz:", err);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (!quiz) return <div className="p-8">Failed to load quiz</div>;

  const score = submitted && quiz ? calculateScore(answers, quiz) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          {formatQuizTitle(quiz.title)}
        </h1>

        {quiz.questions.map((question, qIndex) => (
          <div key={question.id} className="mb-6 p-4 border rounded">
            <p className="font-semibold mb-3">
              {qIndex + 1}. {question.text}
            </p>
            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <label
                  key={oIndex}
                  className={`flex items-center p-2 rounded cursor-pointer ${
                    submitted
                      ? oIndex === question.correctAnswer
                        ? "bg-green-100"
                        : answers[qIndex] === oIndex
                        ? "bg-red-100"
                        : ""
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    checked={answers[qIndex] === oIndex}
                    onChange={() => handleAnswer(qIndex, oIndex)}
                    disabled={submitted}
                    className="mr-3"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answers.includes(-1)}
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 disabled:bg-gray-300"
          >
            Submit Quiz
          </button>
        ) : (
          <div className="text-center p-4 bg-blue-50 rounded">
            <p className="text-xl font-bold">
              Your Score: {score} / {quiz.questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
