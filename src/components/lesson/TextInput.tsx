import { useState } from 'react';
import { Problem } from '../../models/Course';
import './TextInput.css';

interface TextInputProps {
  problem: Problem;
  onAnswer: (answer: string | number) => void;
  disabled: boolean;
  userAnswer: string | number | null;
}

export function TextInput({ problem, onAnswer, disabled, userAnswer }: TextInputProps) {
  const [input, setInput] = useState(String(userAnswer || ''));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      // Try to parse as number only if the entire input is a valid number
      const trimmedInput = input.trim();
      const numValue = parseFloat(trimmedInput);
      // Only treat as number if parseFloat result matches the original input
      // This prevents "3/10" from being converted to 3
      const isWholeNumber = !isNaN(numValue) && String(numValue) === trimmedInput;
      onAnswer(isWholeNumber ? numValue : trimmedInput);
    }
  };

  return (
    <div className="text-input">
      <h2 className="question">{problem.question}</h2>
      {problem.imageUrl && (
        <img src={problem.imageUrl} alt="Problem illustration" className="problem-image" />
      )}
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          className="answer-input"
          disabled={disabled}
          autoFocus
        />
        {!disabled && (
          <button type="submit" className="submit-button" disabled={!input.trim()}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
