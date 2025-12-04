"use client";
import { useEffect, useState } from "react";
import { fetchSeries } from "@/lib/api";
import Link from "next/link";
import { use } from "react";

export default function YearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = use(params);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeries(Number(year)).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [year]);

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!data?.success)
    return <div className="container mx-auto p-8">Error loading series</div>;

  return (
    <div className="container mx-auto p-8">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-500 hover:underline"
      >
        ← بازگشت
      </Link>
      <h1 className="text-4xl font-bold text-center mb-8">
        سری‌های سال {year}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((series: any) => (
          <Link
            key={series.series}
            href={`/${year}/${series.series}`}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">سری {series.series}</h2>
            <p className="text-gray-600">{series.quizCount} آزمون</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
