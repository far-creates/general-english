"use client";
import { useEffect, useState } from "react";
import { fetchQuizzes } from "@/lib/api";
import Link from "next/link";
import { use } from "react";

export default function SeriesPage({
  params,
}: {
  params: Promise<{ year: string; series: string }>;
}) {
  const { year, series } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuizzes(Number(year), Number(series)).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [year, series]);

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!data?.success)
    return <div className="container mx-auto p-8">Error loading quizzes</div>;

  return (
    <div className="container mx-auto p-8">
      <Link
        href={`/year/${year}`}
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← بازگشت
      </Link>
      <h1 className="text-4xl font-bold text-center mb-8">
        آزمون‌های سری {series}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((quiz: any) => (
          <Link
            key={quiz.id}
            href={`/year/${year}/series/${series}/quiz/${quiz.id}`}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
            <p className="text-gray-600">آزمون {quiz.testNumber}</p>
            <p className="text-gray-600">{quiz.questionCount} سوال</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
