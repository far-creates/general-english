/**
 * ResultSummary Component (Organism)
 * Overall summary statistics for quiz results
 */

import Button from "../atoms/Button";

interface ResultSummaryProps {
  correctCount: number;
  incorrectCount: number;
  totalQuestions: number;
  onTryAgain?: () => void;
  onBackToHome?: () => void;
}

export function ResultSummary({
  correctCount,
  incorrectCount,
  totalQuestions,
  onTryAgain,
  onBackToHome,
}: ResultSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Summary</h3>

      {/* Statistics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="text-3xl font-bold text-gray-900">
            {totalQuestions}
          </div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">
            {correctCount}
          </div>
          <div className="text-sm text-green-700">Correct</div>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-lg">
          <div className="text-3xl font-bold text-red-600">
            {incorrectCount}
          </div>
          <div className="text-sm text-red-700">Incorrect</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {onTryAgain && (
          <Button variant="primary" onClick={onTryAgain} fullWidth>
            Try Again
          </Button>
        )}
        {onBackToHome && (
          <Button variant="secondary" onClick={onBackToHome} fullWidth>
            Back to Home
          </Button>
        )}
      </div>
    </div>
  );
}
