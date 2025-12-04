"use client";
import { useEffect, useState } from "react";
import { fetchQuiz } from "@/lib/api";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function QuizPage({
  params,
}: {
  params: Promise<{ year: string; series: string; quizId: string }>;
}) {
  const { year, series, quizId } = use(params);
  const router = useRouter();

  const [quiz, setQuiz] = useState<any>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuiz(quizId).then((res) => {
      if (res.success && res.data) {
        setQuiz(res.data);
      }
      setLoading(false);
    });
  }, [quizId]);

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!quiz) return <div className="container mx-auto p-8">Quiz not found</div>;

  const question = quiz.questions[currentQ];
  const isLast = currentQ === quiz.questions.length - 1;

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQ]: optionIndex });
  };

  const handleNext = () => {
    if (isLast) {
      let score = 0;
      quiz.questions.forEach((q: any, idx: number) => {
        if (answers[idx] === q.correctAnswer) score++;
      });
      alert(`امتیاز شما: ${score} از ${quiz.questions.length}`);
      router.push(`/${year}/${series}`);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{quiz.title}</h2>
        <p className="text-gray-600">
          سوال {currentQ + 1} از {quiz.questions.length}
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-6">{question.text}</h3>

        <div className="space-y-3">
          {question.options.map((option: string, idx: number) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className={`w-full p-4 text-left border-2 rounded-lg transition-colors ${
                answers[currentQ] === idx
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-white hover:border-blue-300"
              }`}
            >
              <span className="font-semibold">{idx + 1}.</span> {option}
            </button>
          ))}
        </div>

        {answers[currentQ] !== undefined && question.explanation && (
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="font-semibold mb-1">توضیح:</p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex justify-between gap-4">
        {currentQ > 0 && (
          <button
            onClick={() => setCurrentQ(currentQ - 1)}
            className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            قبلی
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={answers[currentQ] === undefined}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            answers[currentQ] === undefined
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isLast ? "اتمام" : "بعدی"}
        </button>
      </div>
    </div>
  );
}
