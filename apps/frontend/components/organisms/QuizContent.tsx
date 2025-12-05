/**
 * QuizContent Component (Organism)
 * Main quiz taking area with questions and navigation
 * Location: frontend/components/organisms/QuizContent.tsx
 */

"use client";

import React, { useState, useEffect } from "react";
import { useQuiz } from "../../lib/hooks/useQuiz";
import { Quiz } from "@quiz/types";
import { calculateScore, createQuizResult } from "../../lib/utils/calculations";
import QuizQuestion from "./QuizQuestion";
import QuizProgress from "../molecules/QuizProgress";
import QuizNavigation from "../molecules/QuizNavigation";
import LoadingSpinner from "../atoms/LoadingSpinner";
import ErrorMessage from "../molecules/ErrorMessage";
import { ScoreCard } from "./ScoreCard";
import { ResultQuestion } from "./ResultQuestion";
import { ResultSummary } from "./ResultSummary";
import Button from "../atoms/Button";

interface QuizContentProps {
  quizId: string;
  onQuizComplete?: () => void;
}

export default function QuizContent({
  quizId,
  onQuizComplete,
}: QuizContentProps) {
  const { quiz, loading, error, refetch } = useQuiz(quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [startTime] = useState(Date.now());

  // Initialize answers array when quiz loads
  useEffect(() => {
    if (quiz) {
      setAnswers(new Array(quiz.questions.length).fill(-1));
      setCurrentQuestion(0);
      setSubmitted(false);
    }
  }, [quiz]);

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner size="lg" text="Loading quiz..." />
      </div>
    );
  }

  // Error state
  if (error || !quiz) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <ErrorMessage
          message={error || "Quiz not found"}
          title="Failed to Load Quiz"
          onRetry={refetch}
        />
      </div>
    );
  }

  // Handle answer selection
  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  // Handle navigation
  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestion(index);
  };

  // Handle submission
  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    setSubmitted(true);
    if (onQuizComplete) {
      onQuizComplete();
    }
  };

  // Handle restart
  const handleRestart = () => {
    setAnswers(new Array(quiz.questions.length).fill(-1));
    setCurrentQuestion(0);
    setSubmitted(false);
  };

  const isAnswered = answers[currentQuestion] !== -1;
  const allAnswered = !answers.includes(-1);
  const score = submitted ? calculateScore(answers, quiz) : 0;
  const percentage = submitted
    ? Math.round((score / quiz.questions.length) * 100)
    : 0;

  // Submitted/Results view
  if (submitted) {
    const result = createQuizResult(
      quiz.id,
      answers,
      quiz,
      Math.floor((Date.now() - startTime) / 1000)
    );

    return (
      <div className="p-8 space-y-6 overflow-y-auto h-full">
        {/* Score Card */}
        <ScoreCard
          score={result.score}
          totalQuestions={result.totalQuestions}
          percentage={result.percentage}
          passed={result.passed}
          timeSpent={result.totalTimeSpent}
        />

        {/* Summary */}
        <ResultSummary
          correctCount={result.score}
          incorrectCount={result.totalQuestions - result.score}
          totalQuestions={result.totalQuestions}
          onTryAgain={handleRestart}
        />

        {/* Detailed Results */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            Review Your Answers
          </h3>
          {quiz.questions.map((question, index) => (
            <ResultQuestion
              key={question.id}
              question={question}
              userAnswer={result.answers[index]}
              questionNumber={index + 1}
            />
          ))}
        </div>
      </div>
    );
  }

  // Quiz taking view
  return (
    <div className="flex flex-col h-full">
      {/* Header with Progress */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {quiz.title}
          </h1>
          <QuizProgress
            currentQuestion={currentQuestion}
            totalQuestions={quiz.questions.length}
            answers={answers}
            onQuestionClick={handleQuestionClick}
          />
        </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto">
          <QuizQuestion
            question={quiz.questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion]}
            onAnswerSelect={handleAnswer}
            questionNumber={currentQuestion + 1}
          />
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="p-6 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <QuizNavigation
            currentQuestion={currentQuestion}
            totalQuestions={quiz.questions.length}
            isAnswered={isAnswered}
            allAnswered={allAnswered}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
