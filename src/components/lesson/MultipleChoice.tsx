import { Problem } from '../../models/Course';
import { Check, X } from 'lucide-react';
import './MultipleChoice.css';

interface MultipleChoiceProps {
  problem: Problem;
  onAnswer: (answer: string) => void;
  disabled: boolean;
  userAnswer: string | number | null;
}

export function MultipleChoice({
  problem,
  onAnswer,
  disabled,
  userAnswer,
}: MultipleChoiceProps) {
  const handleClick = (option: string) => {
    if (!disabled) {
      onAnswer(option);
    }
  };

  return (
    <div className="multiple-choice">
      <h2 className="question">{problem.question}</h2>
      {problem.imageUrl && (
        <img src={problem.imageUrl} alt="Problem illustration" className="problem-image" />
      )}
      <div className="options">
        {problem.options?.map((option, index) => {
          const isSelected = String(userAnswer) === option;
          const isCorrect = String(problem.correctAnswer) === option;
          const showResult = disabled && isSelected;

          return (
            <button
              key={index}
              className={`option-button ${isSelected ? 'selected' : ''} ${
                showResult && isCorrect ? 'correct' : ''
              } ${showResult && !isCorrect ? 'incorrect' : ''}`}
              onClick={() => handleClick(option)}
              disabled={disabled}
            >
              <span className="option-text">{option}</span>
              {showResult && isCorrect && <Check size={20} />}
              {showResult && !isCorrect && <X size={20} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
