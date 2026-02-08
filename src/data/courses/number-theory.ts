import { Course, ProblemType } from '../../models/Course';

export const numberTheory: Course = {
  id: 'number-theory',
  name: 'Number Theory',
  description: 'Discover the fascinating properties of integers',
  icon: '🔣',
  color: '#6366f1',
  lessons: [
    {
      id: 'numth-01',
      courseId: 'number-theory',
      title: 'Prime Numbers',
      description: 'Explore the building blocks of numbers',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'numth-01-p1',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'Which of these is a prime number?',
          options: ['4', '6', '7', '9'],
          correctAnswer: '7',
          explanation: '7 is prime because it has exactly two factors: 1 and 7.',
        },
        {
          id: 'numth-01-p2',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: 1 is a prime number',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: 'False! 1 is not prime. Prime numbers have exactly two factors, but 1 only has one factor (itself).',
        },
        {
          id: 'numth-01-p3',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'What is the smallest prime number?',
          options: ['0', '1', '2', '3'],
          correctAnswer: '2',
          explanation: '2 is the smallest prime number and the only even prime.',
        },
      ],
    },
    {
      id: 'numth-02',
      courseId: 'number-theory',
      title: 'Divisibility Rules',
      description: 'Learn shortcuts for testing divisibility',
      xpReward: 50,
      estimatedMinutes: 6,
      problems: [
        {
          id: 'numth-02-p1',
          type: ProblemType.TRUE_FALSE,
          question: 'True or False: A number is divisible by 2 if it ends in 0, 2, 4, 6, or 8',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'True! Numbers ending in even digits are divisible by 2.',
        },
        {
          id: 'numth-02-p2',
          type: ProblemType.MULTIPLE_CHOICE,
          question: 'Is 126 divisible by 3?',
          options: ['Yes', 'No'],
          correctAnswer: 'Yes',
          explanation: 'Yes! Sum of digits: 1+2+6 = 9. Since 9 is divisible by 3, so is 126.',
        },
      ],
    },
  ],
  totalXP: 100,
};
