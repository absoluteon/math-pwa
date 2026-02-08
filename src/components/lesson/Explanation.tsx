import { CheckCircle, XCircle } from 'lucide-react';
import './Explanation.css';

interface ExplanationProps {
  explanation: string;
  isCorrect: boolean;
  onNext: () => void;
  isLastProblem: boolean;
}

export function Explanation({
  explanation,
  isCorrect,
  onNext,
  isLastProblem,
}: ExplanationProps) {
  return (
    <div className={`explanation ${isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="explanation-header">
        {isCorrect ? (
          <>
            <CheckCircle size={32} />
            <h3>Correct!</h3>
          </>
        ) : (
          <>
            <XCircle size={32} />
            <h3>Not quite</h3>
          </>
        )}
      </div>
      <p className="explanation-text">{explanation}</p>
      <button className="next-button" onClick={onNext}>
        {isLastProblem ? 'Complete Lesson' : 'Next Problem'}
      </button>
    </div>
  );
}
