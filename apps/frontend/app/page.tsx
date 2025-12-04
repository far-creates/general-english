"use client";
import { useEffect, useState } from "react";
import { fetchYears } from "../lib/api";
import Link from "next/link";

export default function HomePage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchYears().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="container mx-auto p-8">Loading...</div>;
  if (!data?.success)
    return <div className="container mx-auto p-8">Error loading years</div>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Quiz Years</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((year: any) => (
          <Link
            key={year.year}
            href={`/${year.year}`}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">سال {year.year}</h2>
            <p className="text-gray-600">{year.seriesCount} سری</p>
            <p className="text-gray-600">{year.totalQuizzes} آزمون</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
