export enum ProblemType {
  MULTIPLE_CHOICE = 'multiple_choice',
  TEXT_INPUT = 'text_input',
  TRUE_FALSE = 'true_false',
}

export interface Problem {
  id: string;
  type: ProblemType;
  question: string;
  imageUrl?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  problems: Problem[];
  xpReward: number;
  estimatedMinutes: number;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  totalXP: number;
}
