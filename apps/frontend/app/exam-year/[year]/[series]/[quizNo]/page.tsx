interface QuizPageProps {
  params: Promise<{
    year: string;
    series: string;
    quiz: string;
  }>;
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { year, series, quiz } = await params;

  return (
    <main>
      <h1>Quiz Details</h1>
      <div>
        <h2>Year: {year}</h2>
        <h3>Series: {series}</h3>
        <p>Quiz ID: {quiz}</p>
      </div>
    </main>
  );
}
