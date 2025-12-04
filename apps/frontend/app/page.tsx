"use client";

import { useState, useEffect } from "react";
import { Quiz, ApiResponse } from "@quiz/types";
import { formatQuizTitle, calculateScore } from "@quiz/utils";

export default function Home() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (!quiz) return <div className="p-8 text-center">Failed to load quiz</div>;

  const score = submitted && quiz ? calculateScore(answers, quiz) : 0;
  const question = quiz.questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== -1;
  const allAnswered = !answers.includes(-1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {formatQuizTitle(quiz.title)}
            </h1>
            {quiz.description && (
              <p className="text-gray-600">{quiz.description}</p>
            )}
            {quiz.year && quiz.series && (
              <p className="text-sm text-gray-500 mt-2">
                Year: {quiz.year} | Series: {quiz.series}
              </p>
            )}
          </div>

          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestion + 1} of {quiz.questions.length}
                  </span>
                  <div className="flex gap-2">
                    {quiz.questions.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full ${
                          answers[idx] !== -1 ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    {question.text}
                  </p>

                  <div className="space-y-3">
                    {question.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          answers[currentQuestion] === oIndex
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          checked={answers[currentQuestion] === oIndex}
                          onChange={() => handleAnswer(oIndex)}
                          className="mr-4 w-5 h-5"
                        />
                        <span className="text-gray-700 font-medium">
                          {oIndex + 1}. {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {currentQuestion === quiz.questions.length - 1 ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!allAnswered}
                      className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      disabled={!isAnswered}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-8 p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white">
                <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
                <p className="text-5xl font-bold my-4">
                  {score} / {quiz.questions.length}
                </p>
                <p className="text-xl">
                  {Math.round((score / quiz.questions.length) * 100)}% Correct
                </p>
              </div>

              <div className="space-y-6">
                {quiz.questions.map((q, qIndex) => (
                  <div
                    key={q.id}
                    className={`p-6 rounded-xl border-2 ${
                      answers[qIndex] === q.correctAnswer
                        ? "border-green-500 bg-green-50"
                        : "border-red-500 bg-red-50"
                    }`}
                  >
                    <p className="font-semibold mb-3">
                      Q{qIndex + 1}: {q.text}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => (
                        <div
                          key={oIndex}
                          className={`p-3 rounded ${
                            oIndex === q.correctAnswer
                              ? "bg-green-200 font-semibold"
                              : answers[qIndex] === oIndex
                              ? "bg-red-200"
                              : "bg-white"
                          }`}
                        >
                          {oIndex + 1}. {option}
                          {oIndex === q.correctAnswer && " ✓"}
                          {answers[qIndex] === oIndex &&
                            oIndex !== q.correctAnswer &&
                            " ✗"}
                        </div>
                      ))}
                    </div>
                    {q.explanation && (
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.reload()}
                className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
