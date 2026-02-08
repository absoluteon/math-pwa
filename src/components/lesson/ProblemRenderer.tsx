import { Problem, ProblemType } from '../../models/Course';
import { MultipleChoice } from './MultipleChoice';
import { TextInput } from './TextInput';

interface ProblemRendererProps {
  problem: Problem;
  onAnswer: (answer: string | number) => void;
  disabled: boolean;
  userAnswer: string | number | null;
}

export function ProblemRenderer({
  problem,
  onAnswer,
  disabled,
  userAnswer,
}: ProblemRendererProps) {
  switch (problem.type) {
    case ProblemType.MULTIPLE_CHOICE:
    case ProblemType.TRUE_FALSE:
      return (
        <MultipleChoice
          problem={problem}
          onAnswer={onAnswer}
          disabled={disabled}
          userAnswer={userAnswer}
        />
      );
    case ProblemType.TEXT_INPUT:
      return (
        <TextInput
          problem={problem}
          onAnswer={onAnswer}
          disabled={disabled}
          userAnswer={userAnswer}
        />
      );
    default:
      return <div>Unsupported problem type</div>;
  }
}
